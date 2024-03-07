import React from 'react'
import { Box, Stack, Heading, Text, Button, Image, Td, Table, Thead, Tr, Tbody, Input, Flex } from '@chakra-ui/react'

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
      scale={'crop'}
    >
      <Box
        textAlign="center"
        marginRight={{ base: 0, md: '2rem' }}
        padding={10}
        pl={{ base: 0, md: 10 }}
        order={{ base: '2', md: '1' }}
      >

<Heading  p={10}
            fontFamily="shojumaru"
            fontWeight={400}
            fontSize="2.7rem"
            lineHeight="3.2rem"
            color="rgba(237, 1, 55, 1)"
            marginBottom="1rem"
          >Tokenomics</Heading>

          <Box display={'grid'}           gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
gap={10} m={'auto'} justifyContent={'center'} p={15}>
            <Flex>
            <Box 
              fontFamily="ZCOOL KuaiLe"
              fontWeight={400} 
              m={'auto'}
              w={'25rem'} 
              h={'21rem'} 
              color={'white'} 
              border={'1.5px solid rgba(237, 1, 55, 1)'} 
              padding={3} 
              ml={16} 
              borderRadius={'1.3rem'}
            >
              <Table m={'auto'} alignItems={'center' } mt={10}>
  <Tbody>
    <Tr>
      <Td width="50%">Total Token Supply</Td>
      <Td color={'rgba(237, 1, 55, 1)'} width="50%">20%</Td>
    </Tr>
    <Tr>
      <Td width="50%">Soft Cap</Td>
      <Td width="50%"color={'rgba(237, 1, 55, 1)'} >200 BNB</Td>
    </Tr>
    <Tr>
      <Td width="50%">Initial exchange rate</Td>
      <Td width="50%"color={'rgba(237, 1, 55, 1)'} >1 BNB</Td>
    </Tr>
  </Tbody>
</Table>

           
              </Box>
            </Flex>
            <Flex>
            <Box display="flex"justifyContent="center"order={{ base: '1', md: '2' }}
          marginBottom={{ base: '2rem', md: 0 }} >  
          <Image maxH="45.75rem" maxW="45.75rem" src="frame 1824.png" />
        </Box>

            </Flex>

          </Box>
        </Box>
        </Box>
  )
}

export default Token