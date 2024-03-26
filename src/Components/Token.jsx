import React from 'react'
import { Box, Stack, Heading, Text, Button, Image, td, table, Thead, tr, tbody, Input, Flex, Center } from '@chakra-ui/react'

const Token = () => {
  return (
    <Box
  
    position={'relative'}
    bg={"black"}
    bgImage={'url("token.png")'}
    bgSize="cover" 
    bgPosition="center" 
    opacity={'95%'} 
    h={{ base: 'auto', md: '40.2rem' }}
    w={'100%'}
    scale={'crop'} 
    textAlign="center"
    marginRight={{ base: 0, md: '2rem' }}
    padding={10}
    pl={{ base: 0, md: 10 }}
    >
      
    
       

<Heading  p={10}
            fontFamily="shojumaru"
            fontWeight={400}
            fontSize="2.7rem"
            lineHeight="3.2rem"
            color="rgba(237, 1, 55, 1)"
            marginBottom="1rem"
          >Tokenomics</Heading>
 <Center gap={2} margin={'auto'} display={'flex'} flexDirection={{base:"column",md:"column",lg:"row"}} justifyContent={'center'} p={15} alignContent={'center'} alignItems={"center"} w={'85%'}>
  <Box
  fontFamily="ZCOOL KuaiLe"
  justifyContent={'center'}
  textAlign={"center"}
  alignItems={"center"}
  fontWeight={400} 
  margin={'auto'}
  w={'22rem'} 
  h={'15.2rem'} 

  color={'white'} 
  border={'1.5px solid rgba(237, 1, 55, 1)'} 
  borderRadius={'1.3rem'}
  display="flex"
  flexDirection="column"
>
<Text bgColor={"rgba(237, 1, 55, 1)"} position={'absolute'} borderRadius={'1rem'}top={{base:"12rem",md:"16rem",lg:'13.5rem'}} p={3}>Token Details</Text>

  <table  style={{ margin:"auto", textAlign:"center"}}>
    <tbody>
      <tr>
        <td style={{ width: "50%",padding:5 }}>Name</td>
        <td style={{ width: "50%", color: "rgba(237, 1, 55, 1)",padding:5 }}>Saviour</td>
      </tr>
      <tr>
        <td style={{ width: "50",padding:5 }}>Symbol</td>
        <td style={{ width: "50%", color: "rgba(237, 1, 55, 1)",padding:5 }}>SVR</td>
      </tr>
      <tr>
        <td style={{ width: "50%" ,padding:5}}>Total Supply</td>
        <td style={{ width: "50%", color: "rgba(237, 1, 55, 1)",padding:5 }}>1000 Trillion </td>
      </tr>
      <tr>
        <td style={{ width: "50%",padding:5 }}>Decimals</td>
        <td style={{ width: "50%", color: "rgba(237, 1, 55, 1)",padding:5 }}>18</td>
      </tr>
    </tbody>
  </table>
</Box>

<Box  justifyContent="center" mt={6}
          marginBottom={{ base: '2rem', md: 0 }} >  
          <Image maxH={{base:'15rem',md:'70%',lg:"45.75rem"}} maxW={{base:'16rem',md:'70%',lg:"45.75rem"}}src="frame 1824.png" m={'auto'}/>
        </Box>
  </Center>
 
       
        </Box>
  )
}

export default Token

/*  
<Flex>
<Box display={'flex'}           gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
gap={10} margin={'auto'} justifyContent={'center'} p={15} alignContent={'center'} alignItems={"center"}>
            <Flex>
            <Box
  fontFamily="ZCOOL KuaiLe"
  justifyContent={'center'}
  textAlign={"center"}
  alignItems={"center"}
  fontWeight={400} 
  margin={'auto'}
  w={'22rem'} 
  h={'15.2rem'} 

  color={'white'} 
  border={'1.5px solid rgba(237, 1, 55, 1)'} 
  borderRadius={'1.3rem'}
  display="flex"
  flexDirection="column"
>
  <table  style={{ margin:"auto", textAlign:"center" }}>
    <tbody>
      <tr>
        <td style={{ width: "50%",padding:5 }}>Name</td>
        <td style={{ width: "50%", color: "rgba(237, 1, 55, 1)",padding:5 }}>Saviour</td>
      </tr>
      <tr>
        <td style={{ width: "50",padding:5 }}>Symbol</td>
        <td style={{ width: "50%", color: "rgba(237, 1, 55, 1)",padding:5 }}>SVR</td>
      </tr>
      <tr>
        <td style={{ width: "50%" ,padding:5}}>Total Supply</td>
        <td style={{ width: "50%", color: "rgba(237, 1, 55, 1)",padding:5 }}>1000 Trillion </td>
      </tr>
      <tr>
        <td style={{ width: "50%",padding:5 }}>Decimals</td>
        <td style={{ width: "50%", color: "rgba(237, 1, 55, 1)",padding:5 }}>18</td>
      </tr>
    </tbody>
  </table>
</Box>

<Box display="flex"justifyContent="center"order={{ base: '1', md: '2' }}
          marginBottom={{ base: '2rem', md: 0 }} >  
          <Image maxH="45.75rem" maxW="45.75rem" src="frame 1824.png" />
        </Box>
</Flex>
  */