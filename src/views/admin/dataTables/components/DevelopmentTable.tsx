/* eslint-disable */
import {
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from '@chakra-ui/react'
// Custom components
import Card from 'components/card/Card'
import React, { useEffect, useMemo, useState } from 'react'
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable
} from 'react-table'
import { TableProps } from 'views/admin/default/variables/columnsData'

export default function DevelopmentTable(props: TableProps & { onCellClick: (id: number) => void }) {
  const { columnsData, tableData, onCellClick } = props

  const columns = useMemo(() => columnsData, [columnsData])
  const data = useMemo(() => tableData, [tableData])

  const tableInstance = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState
  } = tableInstance
  initialState.pageSize = 11

  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const iconColor = useColorModeValue('secondaryGray.500', 'white')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')
  const statusColorResolved = useColorModeValue('green.400', 'green.500')
  const statusColorActive = useColorModeValue('secondaryGray.800', 'secondaryGray.200')
  const statusColorPending = useColorModeValue('yellow.400', 'yellow.500')

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isMounted) return
    setIsMounted(true)
  }, [isMounted])

  if (!isMounted) return <></>

  return (
    <Card
      flexDirection='column'
      w='100%'
      px='0px'
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <Flex px='25px' justify='space-between' mb='20px' align='center'>
        <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'
        >
          Development Table
        </Text>
      </Flex>
      <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe='10px'
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify='space-between'
                    align='center'
                    fontSize={{ sm: '10px', lg: '12px' }}
                    color='gray.400'
                  >
                    {column.render('Header')}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  let data
                  if (cell.column.Header === 'NAME') {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700' onClick={() => { props.onCellClick(+row.id) }} cursor="pointer">
                        {cell.value}
                      </Text>
                    )
                  } else if (cell.column.Header === 'DATE') {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    )
                  } else if (cell.column.Header === 'STATUS') {
                    let color = statusColorActive
                    switch (cell.value) {
                      case "Resolved":
                        color = statusColorResolved;
                        break;
                      case "Pending":
                        color = statusColorPending;
                        break;
                      case "Active":
                        color = statusColorActive;
                        break;
                      default:
                        color = textColor;
                    }
                    data = (
                      <Text
                        me='10px'
                        color={color}
                        fontSize='sm'
                        fontWeight='700'
                      >
                        {cell.value}
                      </Text>
                    )
                  } else {
                    data = (
                      <Text color={textColor} fontSize='sm' fontWeight='700'>
                        {cell.value}
                      </Text>
                    )
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: '14px' }}
                      minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                      borderColor='transparent'
                    >
                      {data}
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Card>
  )
}
