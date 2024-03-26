import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Flex, Grid, GridItem, Heading, Image, Select, Text } from '@chakra-ui/react';
import React from 'react';

const Faq = () => {
  return (
    <Box  bgColor={'black'} width={'100%'} m={'auto'} >
    <Grid

    fontFamily="ZCOOL KuaiLe"
  justifyContent={'center'}
  textAlign={"center"}
  alignItems={"center"}
  fontWeight={400} width={'80%'}
  margin={'auto'}
      bgColor={'black'}
      h={'auto'}
      color={'white'}
      display={'grid'}
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
      gap={4}
    >
      <GridItem ml={{ base: 0,md:0, lg: 15 }} justifyContent={'center'} m={'auto'} animation='verticalAnimation 2s ease-in-out infinite' >
        <Image src='image 1.png'  />
      </GridItem>
      <GridItem>
        <Box justifyContent={'center'} m={'auto'} w={'100%'}  >
          <Heading
            my={15}
            fontFamily="shojumaru"
            fontWeight={400}
            fontSize="1.7rem"
            lineHeight="3.2rem"
            color="rgba(237, 1, 55, 1)"
            marginBottom="1rem"
          >
            FAQ
          </Heading>
          <Box    fontFamily="shojumaru"
            fontWeight={400} borderRadius={16} m={2} display={'flex'} border={'1.5px solid rgba(237, 1, 55, 1)'} p={2}  color={'white'}>
          <Text    >1.</Text>
              <Text    fontFamily="shojumaru"
            fontWeight={400} textAlign={'center'} alignContent={'center'} margin={'auto'} justifyContent={'center'}> Why choose "Savior"?</Text><ChevronDownIcon/>
          </Box>
          <Box    fontFamily="shojumaru"
            fontWeight={400} borderRadius={16} m={2} display={'flex'} border={'1.5px solid rgba(237, 1, 55, 1)'} p={2}  color={'white'}>
          <Text    fontFamily="shojumaru"
            fontWeight={400}   >2.</Text>
              <Text    fontFamily="shojumaru"
            fontWeight={400} textAlign={'center'} alignContent={'center'} margin={'auto'} justifyContent={'center'}> Why is the IDO duration so long?</Text><ChevronDownIcon/>
          </Box>   <Box    fontFamily="shojumaru"
            fontWeight={400} borderRadius={16} m={2} display={'flex'} border={'1.5px solid rgba(237, 1, 55, 1)'} p={2}  color={'white'}>
          <Text    >3.</Text>
              <Text  textAlign={'center'} alignContent={'center'} margin={'auto'} justifyContent={'center'}> When will trading go live?</Text><ChevronDownIcon/>
          </Box>   <Box    fontFamily="shojumaru"
            fontWeight={400} borderRadius={16} m={2}  border={'1.5px solid rgba(237, 1, 55, 1)'} p={2}  color={'white'}>
         <Flex> <Text    >4.</Text>
              <Text  textAlign={'center'} alignContent={'center'} margin={'auto'} justifyContent={'center'}> When can we claim the tokens? </Text><ChevronUpIcon/>
              </Flex>
              <Text fontFamily={'ZCOOL KuaiLe'} fontSize={15} textAlign={'center'} alignContent={'center'} margin={'auto'} justifyContent={'center'}mt={10}> After the IDO concludes, you can claim the tokens on our official website.
</Text>
          </Box>
    
        </Box>
      </GridItem>
    </Grid></Box>
  );
};

export default Faq;
