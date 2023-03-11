// Chakra imports
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Card from 'components/card/Card'
import { NextAvatar } from 'components/image/Avatar'

export default function Banner(props: {
  banner: any
  avatar: string
  name: string
  job: string
  [x: string]: any
}) {
  const {
    banner,
    avatar,
    name,
    job,
    ...rest
  } = props
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = 'gray.400'
  const borderColor = useColorModeValue(
    'white !important',
    '#111C44 !important'
  )

  console.log(banner, avatar)

  return (
    <Card mb={{ base: '0px', lg: '20px' }} alignItems='center' {...rest}>
      <NextAvatar
        mx='auto'
        src={banner}
        objectFit="cover"
        h='131px'
        w='100%'
        style={{ borderRadius: '12px' }}
      />
      <NextAvatar
        mx='auto'
        src={avatar}
        h='87px'
        w='87px'
        mt='-43px'
        border='6px solid'
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight='bold' fontSize='xl' mt='10px'>
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize='sm'>
        {job}
      </Text>
    </Card>
  )
}
