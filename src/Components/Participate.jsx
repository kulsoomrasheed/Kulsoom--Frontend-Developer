import { Box, Stack, Heading, Text, Button, Image, Td, Table, Thead, Tr, Tbody, Input, Flex } from '@chakra-ui/react'
import React from 'react'

const Participate = () => {
  return (
    <Box
      position={'relative'}
      bg={"black"}
      bgImage={'url("part.png")'}
      bgSize="cover" 
      bgPosition="center" 
      opacity={'95%'} 
      h={{ base: 'auto', md: '71.2rem' }}
      scale={'crop'}
    >
      <Box 
        textAlign="center"
        marginRight={{ base: 0, md: '2rem' }}
        padding={10}
        pl={{ base: 0, md: 10 }}
        order={{ base: '2', md: '1' }}
      >
        <Heading p={10}
          fontFamily="shojumaru"
          fontWeight={400}
          fontSize="2.7rem"
          lineHeight="3.2rem"
          color="rgba(237, 1, 55, 1)"
          marginBottom="1rem"
        >
          Participate in our IDO Event!
        </Heading>
        <Box 
          textAlign={'center'} 
          justifyContent={'center'} 
          alignContent={'center'} 
          m={'auto'} 
          position={'absolute'} 
          top={'10rem'} 
          left={'9.4rem'} 
          display={'grid'}           gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
           gap={3}
        >
          <Box>
            <Text
              fontFamily="ZCOOL KuaiLe"
              fontWeight={400}
              fontSize="1.5rem"
              lineHeight="1.8rem"
              color="white"
              maxW="35rem"
              marginBottom="2rem"
            >
              During our IDO event, you will gain early access to our revolutionary ecosystem, designed to empower everyone to share wealth and achieve success.
            </Text>
            <Box 
              fontFamily="ZCOOL KuaiLe"
              fontWeight={400} 
              w={'25rem'} 
              h={'21rem'} 
              color={'white'} 
              border={'1.5px solid rgba(237, 1, 55, 1)'} 
              padding={3} 
              ml={16} 
              borderRadius={'1.3rem'}
            >
              <Table>
                <Tbody>
                  <Tr>
                    <Td>Total Token Supply</Td>
                    <Td>20%</Td>
                  </Tr>
                  <Tr>
                    <Td>Soft Cap</Td>
                    <Td>200 BNB</Td>
                  </Tr>
                  <Tr>
                    <Td>Initial exchange rate</Td>
                    <Td>1 BNB</Td>
                  </Tr>
                </Tbody>
              </Table>

              <Table>
                <Thead>
                  <Text textAlign={'center'} m={'auto'}> Recommended Referral Commission</Text>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Total Token Supply</Td>
                    <Td>20%</Td>
                  </Tr>
                  <Tr>
                    <Td>Soft Cap</Td>
                    <Td>200 BNB</Td>
                  </Tr>
                </Tbody>
              </Table>
              <Heading p={10}
          fontFamily="shojumaru"
          fontWeight={400}
          fontSize="1.7rem"
          lineHeight="3.2rem"
          color="rgba(237, 1, 55, 1)"
          marginBottom="1rem"
        >Become an affiliate & Earn 7% as Commission!</Heading>
        <Flex m={'auto'} gap={1}>  <Input type='text' placeholder='Enter the amount BNB' border={'1.5px solid rgba(237, 1, 55, 1)'}></Input><Button size={'sm'} bgColor={'rgba(237, 1, 55, 1)'} color={'white'}   fontFamily="ZCOOL KuaiLe"
              mt={1} borderRadius={16}>Generate</Button></Flex>

            </Box>
          </Box>
          <Box>

            <Box 
              fontFamily="ZCOOL KuaiLe"
              fontWeight={400} 
              w={'44rem'} 
              h={'38rem'} 
              color={'white'} 
              border={'1.5px solid rgba(237, 1, 55, 1)'} 
              padding={3}  
              borderRadius={'1.3rem'} letterSpacing={2} alignItems={'center'} alignContent={'center'} justifyContent={'space-between'} my={5} mt={15}  marginRight={45}
            >
<Heading
 fontFamily="shojumaru"
 fontWeight={400}
 fontSize="2.7rem"
 lineHeight="3.2rem"
 color="rgba(237, 1, 55, 1)"
 marginBottom="1rem" my={5}
>PRESALE 1</Heading>
<Stack w={'29rem'} margin={'auto'} justifyContent={'space-between'} my={15}>
  <Text my={2}>1 Saviour = 0.657 USDT</Text>
  <Text my={2}>1 Saviour = 0.657 USDT</Text>
  <Text my={2}>1 Saviour = 0.657 USDT</Text>
  <Text my={2}>1 Saviour = 0.657 USDT</Text>
  <Input my={2} type='text' placeholder='Enter the amount BNB' border={'1.5px solid rgba(237, 1, 55, 1)'}></Input>
  <Input my={2} type='text' placeholder='Enter the amount BNB'border={'1.5px solid rgba(237, 1, 55, 1)'}></Input>
  <Input my={2} type='text' placeholder='Enter the amount BNB' border={'1.5px solid rgba(237, 1, 55, 1)'}></Input>
<Flex m={'auto'} gap={6}>
  <Button size={'sm'} bgColor={'rgba(237, 1, 55, 1)'} color={'white'}   fontFamily="ZCOOL KuaiLe"
              mt={1} borderRadius={16}>Buy</Button><Button size={'sm'} bgColor={'rgba(237, 1, 55, 1)'} color={'white'}   fontFamily="ZCOOL KuaiLe"
              mt={1} borderRadius={16}>claim Drop</Button>
</Flex>

</Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Participate

