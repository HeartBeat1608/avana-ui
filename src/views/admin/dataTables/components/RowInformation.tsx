import { Box, Button, Grid, GridItem, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Information from 'views/admin/profile/components/Information'
import Card from 'components/card/Card';

type Props = {
  data: any
  setActiveItem: (item: unknown) => void;
  setTicketStatus: (status: string) => void;
}
const RowInformation = ({ data, setActiveItem, setTicketStatus }: Props) => {
  const bgColor = useColorModeValue("gray.100", "navy.700")
  const buttonColorResolve = useColorModeValue('green.500', 'green.500')
  const buttonColorClose = useColorModeValue('red.500', 'red.500')

  if (!data) {
    return (
      <Card justifyContent={'center'} alignItems="center">
        <Box>
          Please select an item to view
        </Box>
      </Card>
    )
  }

  return (
    <Card flexDirection={'column'} justifyContent="space-between">
      <SimpleGrid columns={{ sm: 1, md: 2 }} gap={{ base: '12px' }}>
        <Information
          bg={bgColor}
          title='Client Name'
          value={data?.name || "NA"}
          borderRadius="12px"
        />
        <Information
          bg={bgColor}
          title='Ticket ID'
          value={data?.ticket || "NA"}
          borderRadius="12px"
        />
        <Information
          bg={bgColor}
          title='Status'
          value={data?.status || "NA"}
          borderRadius="12px"
        />
        <GridItem colSpan={2}>
          <Information
            bg={bgColor}
            title='Issue'
            value={data?.description || "NA"}
            borderRadius="12px"
          />
        </GridItem>
      </SimpleGrid>
      <Box display={'flex'} justifyContent={'flex-end'} w={'100%'} gap={'12px'}>
        <Button borderRadius={'8px'} color={buttonColorClose} onClick={() => setActiveItem(null)}>Close</Button>
        <Button borderRadius={'8px'} color={buttonColorResolve} onClick={() => setTicketStatus('Resolved')}>Resolve</Button>
      </Box>
    </Card>
  )
}

export default RowInformation
