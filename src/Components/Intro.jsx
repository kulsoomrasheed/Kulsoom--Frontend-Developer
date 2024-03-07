import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import {ChevronDownIcon} from '@chakra-ui/icons'

const Intro = () => {
  return (
    <Box m="auto">
      <Flex
        alignItems="center"
        justifyContent="center"
        bgColor="black"
        padding={5}
        color="white"
        direction={{ base: 'column', md: 'row' }} 
        minHeight={{ base: 'auto', md: '45.75rem' }} 
      >
        <Box textAlign="center" 
          marginRight={{ base: 0, md: '2rem' }} 
          pl={{ base: 0, md: 10 }}
          order={{ base: '2', md: '1' }} >
          <Heading
            fontFamily="shojumaru"
            fontWeight={400}
            fontSize="2.7rem"
            lineHeight="3.2rem"
            color="rgba(237, 1, 55, 1)"
            marginBottom="1rem"
          >
            Introduction
          </Heading>
          <Text
            fontFamily="ZCOOL KuaiLe"
            fontWeight={400}
            fontSize="1.5rem"
            lineHeight="1.8rem"
            color="white"
            maxW="35rem"
            marginBottom="2rem"
          >
            We've all been in the mud once, and now we've decided to fight it
            out. Pay tribute to those pioneers of WEB3 and the warriors who
            dedicated their love to the blockchain. Save the lucky ones alive,
            join us to save the future! Our mission is to empower everyone to
            share wealth and succeed. read more...
          </Text>
          <Button size={'sm'} bgColor={'rgba(237, 1, 55, 1)'} color={'white'}   fontFamily="ZCOOL KuaiLe"
              mt={1} borderRadius={16}>Documents <ChevronDownIcon/></Button>
        </Box>
        <Box display="flex" justifyContent="center"order={{ base: '1', md: '2' }}
          marginBottom={{ base: '2rem', md: 0 }} >  
          <Image maxH="45.75rem" maxW="45.75rem" src="intro.png" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Intro;
