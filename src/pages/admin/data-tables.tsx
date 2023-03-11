import { Box, Grid, SimpleGrid } from '@chakra-ui/react'
import DevelopmentTable from 'views/admin/dataTables/components/DevelopmentTable'
import {
  columnsDataDevelopment,
} from 'views/admin/dataTables/variables/columnsData'
import tableDataDevelopment from 'views/admin/dataTables/variables/tableDataDevelopment.clean.json'
import React, { useState } from 'react'
import AdminLayout from 'layouts/admin'
import { TableData } from 'views/admin/default/variables/columnsData'
import RowInformation from 'views/admin/dataTables/components/RowInformation'


export default function DataTables() {
  const [selectedTicket, setSelectedTicket] = useState<any>();
  let clonedTableData = [...tableDataDevelopment]

  const handleTicketSelect = (id: number) => {
    const select = tableDataDevelopment[id]
    setSelectedTicket(select)
  }

  const handleStatusChange = (id: string, status: string) => {
    setSelectedTicket((p: any) => ({ ...p, status }))

    clonedTableData = clonedTableData.map(t => {
      if (t.id == id) t.status = status;
      return t;
    })
  }

  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <Grid
          templateColumns={{
            base: "2fr 1fr",
          }}
          mb='10px'
          gap={{ base: '20px', xl: '20px' }}
        >
          <DevelopmentTable
            columnsData={columnsDataDevelopment}
            tableData={(clonedTableData as unknown) as TableData[]}
            onCellClick={handleTicketSelect}
          />

          <RowInformation data={selectedTicket} setActiveItem={i => setSelectedTicket(i)} setTicketStatus={t => handleStatusChange(selectedTicket.id, t)} />
          {/*
            <CheckTable
              columnsData={columnsDataCheck}
              tableData={(tableDataCheck as unknown) as TableData[]}
            />
            <ColumnsTable
              columnsData={columnsDataColumns}
              tableData={(tableDataColumns as unknown) as TableData[]}
            />
            <ComplexTable
              columnsData={columnsDataComplex}
              tableData={(tableDataComplex as unknown) as TableData[]}
            />
          */}
        </Grid>
      </Box>
    </AdminLayout>
  )
}
