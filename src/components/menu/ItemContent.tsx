// chakra imports
import { Icon, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { MdUpgrade } from "react-icons/md";

export function ItemContent(props: { title: string, description: string; icon?: IconType }) {
  const textColor = useColorModeValue("navy.700", "white");
  const size = { base: '40px', md: '50px' }

  return (
    <>
      <Flex
        justify='center'
        align='center'
        borderRadius='12px'
        minH={size}
        h={size}
        minW={size}
        w={size}
        me='14px'
        bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'>
        <Icon as={props.icon || MdUpgrade} color='white' w={8} h={14} />
      </Flex>
      <Flex flexDirection='column'>
        <Text
          mb='5px'
          fontWeight='bold'
          color={textColor}
          fontSize={{ base: "md", md: "md" }}>
          {props.title}
        </Text>
        <Flex alignItems='center'>
          <Text
            fontSize={{ base: "sm", md: "sm" }}
            lineHeight='100%'
            color={textColor}>
            {props.description}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
