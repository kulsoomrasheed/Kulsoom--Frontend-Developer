import { Flex, Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      w={'100%'}
      bgColor={'black'}
      color={'white'}
      p={5}
    >
      <Image width={'8%'} src='Frame 1790.png' />
      <Heading size={'md'} color={'rgba(237, 1, 55, 1)'}>SITEMAP</Heading>
      <Flex direction="row" gap={5}>
        <div>Home</div>
        <div>IDO</div>
        <div>Tokenomics</div>
        <div>Whitepaper</div>
        <div>Pledge</div>
        <div>NFT</div>
        <div>Games</div>
      </Flex>
      <Image ml={44} width={'20%'} src='icons.png' />
    </Stack>
  );
};

export default Footer;
