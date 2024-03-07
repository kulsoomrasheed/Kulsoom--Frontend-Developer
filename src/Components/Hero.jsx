import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
 //// 
const Hero = () => {
  return (
    <Box h={'36.75rem'} margin={'auto'} bgImage={'url("rect.png")'} w={"100%"} color={'white'} position={'relative'} >
    <Flex gap={10} justifyContent={"space-evenly"} margin={'auto'} p={5}>
    <Flex>
        <Image src='Logo.png'></Image>
        <Heading mt={5} fontFamily="ZCOOL KuaiLe"> Saviour</Heading>
      </Flex>
      <Flex fontFamily="ZCOOL KuaiLe" justifyContent={"space-evenly"} gap={10} mt={7} border={"1px solid black"} h={'2.5rem'} borderRadius={16} pt={1} p={2} bgColor={'black'} px={5}>
        <Text>Home</Text>
        <Text>IDO</Text>
        <Text>Tokenomics</Text>
        <Text>Roadmaps</Text>
        <Text>Coming Soon</Text>

      </Flex>
      <Box mt={7}>
      <ConnectButton/>
      </Box>
    </Flex>
    <Stack>
      <Heading fontFamily={'shojumaru'} fontWeight={400} fontSize={'2.8rem'} lineHeight={'3.3rem'} textAlign={'center'} top={'17.2rem'} left={'7.2rem'} position={'absolute'}>Where Blockchain Heroes Thrive, Rescuing <br /> Dreams, Elevating Fortunes.</Heading>
    </Stack>
    </Box>
  )
}

export default Hero