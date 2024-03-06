import { Box, Flex, Heading, Image, Text, Button } from '@chakra-ui/react'
import React from 'react'

const Intro = () => {
  return (
    <Box m="auto">
      <Flex alignItems="center" justifyContent="center" bgColor="black" minHeight="45.75rem" padding={5} color="white">
        <Box textAlign="center" marginRight="2rem" pl={10}> 
          <Heading fontFamily="shojumaru" fontWeight={400} fontSize="2.7rem" lineHeight="3.2rem" color="rgba(237, 1, 55, 1)" marginBottom="1rem">
            Introduction
          </Heading>
          <Text fontFamily="ZCOOL KuaiLe" fontWeight={400} fontSize="1.5rem" lineHeight="1.8rem" color="white" maxW="35rem" marginBottom="2rem">
            We've all been in the mud once, and now we've decided to fight it out. Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future! Our mission is to empower everyone to share wealth and succeed. read more...
          </Text>
          <Button colorScheme="red" textAlign={'left'} size="lg">Join Us</Button> {/* Added red button */}
        </Box>
        <Box display="flex" justifyContent="center">
          <Image maxH="45.75rem" maxW="45.75rem" src="intro.png" />
        </Box>
      </Flex>
    </Box>
  )
}

export default Intro
