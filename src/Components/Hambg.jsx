import React from 'react';
import NavMenu from './HbMenu';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Hambg = () => {
  return (
    <Box
      width={'100%'}
      margin={'auto'}
      bgColor={'rgb(122,21,52)'}
      justifyContent={'space-between'}
      display={{
        base: 'block', 
        sm: 'block', 
        lg: 'none', 
      }}
    >
      <Flex align="center" p={2}>
        <NavMenu />
        <Image mt={4} width={'12%'} src="Logo.png" alt="logo" />
        <Heading fontWeight={400} color={'white'} fontSize={'1.1rem'} ml={2} fontFamily="ZCOOL KuaiLe">
          Saviour
        </Heading>
        <Box ml="auto" className='connect'>
          <ConnectButton />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hambg;
