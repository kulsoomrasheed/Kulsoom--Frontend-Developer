import { Box, Grid, GridItem, Heading, Image, Select } from '@chakra-ui/react';
import React from 'react';

const Faq = () => {
  return (
    <Grid
      bgColor={'black'}
      color={'white'}
      margin={'auto'}
      justifyContent={'space-evenly'}
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <GridItem ml={{ base: 0, md: 15 }} justifyContent={'center'} m={'auto'}>
        <Image src='image 1.png' />
      </GridItem>
      <GridItem>
        <Box justifyContent={'center'} m={'auto'} w={'70%'} p={15} pl={10}>
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
          <Select border={'1.5px solid rgba(237, 1, 55, 1)'} my={15} placeholder='Why choose "Savior"?' />
          <Select border={'1.5px solid rgba(237, 1, 55, 1)'} my={15} placeholder='Why is the IDO duration so long?' />
          <Select border={'1.5px solid rgba(237, 1, 55, 1)'} my={15} placeholder='When will trading go live?' />
          <Select border={'1.5px solid rgba(237, 1, 55, 1)'} my={15} placeholder='When can we claim the tokens?' />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Faq;
