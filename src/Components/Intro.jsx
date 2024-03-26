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
        direction={{ base: 'column',md:"column", lg: 'row' ,}} 
        minHeight={{ base: 'auto', md: '45.75rem' }} 
      >
        <Box
      m={'auto'}
          textAlign={{base:"center", md:"center",lg:"left"}}
          justifyContent={{base:"center", md:"center",lg:"left"}}>
          <Heading
            fontFamily="shojumaru"
            fontWeight={400}
            fontSize="2.7rem"
            lineHeight="3.2rem"
            color="rgba(237, 1, 55, 1)"
            marginBottom="1rem"  textAlign={{base:"center", md:"center",lg:"left"}}
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
            out. <br /> Pay tribute to those pioneers of WEB3 and the warriors who
            dedicated their love to the blockchain. Save the lucky ones alive,
            join us to save the future! <br /> Our mission is to empower everyone to
            share wealth and succeed. read more...
          </Text>
          <Button
          alignContent={'left'}
      size="md"
      textAlign="left"
      justifyContent="left"
      bgGradient="linear(to-r, rgba(237, 1, 55, 1), rgb(235, 96, 23))"
      color="white"
      fontFamily="ZCOOL KuaiLe"
      mt={1}
      borderRadius={16}
    >
      Documents <ChevronDownIcon />
    </Button>
        </Box>
        <Box display="flex" justifyContent="center"order={{ base: '1', md: '2' }}
          marginBottom={{ base: '2rem', md: 0 }} animation='verticalAnimation 2s ease-in-out infinite'>  
          <Image  w={"100%"} src="intro.png" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Intro;
