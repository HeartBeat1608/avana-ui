// Chakra imports
import { Box, Flex, Text, Icon, useColorModeValue, Checkbox } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';

// Assets
import { MdCheckBox, MdDragIndicator } from 'react-icons/md';
import { userTasks } from 'data/home/tasks';

export default function Conversion(props: { [x: string]: any }) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'navy.700');
  const brandColor = useColorModeValue('brand.500', 'brand.400');

  return (
    <Card p='20px' alignItems='center' flexDirection='column' w='100%' {...rest}>
      <Flex alignItems='center' w='100%' mb='30px'>
        <Text color={textColor} fontSize='lg' fontWeight='700'>
          Tasks
        </Text>
      </Flex>
      <Box px='11px' w='100%'>
        {
          userTasks.map(item => (
            <Flex w='100%' mb='20px' key={item.id}>
              <Checkbox me='16px' colorScheme='brandScheme' checked={item.done} />
              <Text fontWeight='bold' color={textColor} fontSize='md' textAlign='start'>
                {item.title}
              </Text>
              { /* <Icon ms='auto' as={MdDragIndicator} color='secondaryGray.600' w='24px' h='24px' /> */}
            </Flex>
          ))
        }
      </Box>
    </Card>
  );
}
