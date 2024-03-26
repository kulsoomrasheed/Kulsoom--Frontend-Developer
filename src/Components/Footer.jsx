import { Flex, Grid, GridItem, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      alignContent={"center"}
      m={"auto"}
      w={"100%"}
      bgColor={"black"}
      color={"white"}
      p={5}
    >
      <Image width={"8%"} src="Frame 1790.png" />
      <Heading
        size={"md"}
        bgGradient="linear(to-r, rgba(237, 1, 55, 1), rgb(98,0,5))"
        bgClip="text"
      >
        SITEMAP
      </Heading>
      <Grid
        gridTemplateColumns={{
          base: "repeat(4,1fr)",
          md: "repeat(4,1fr)",
          lg: "repeat(8,1fr)",
        }}
        gap={3}
      >
        <GridItem>Home</GridItem>
        <GridItem>IDO</GridItem>
        <GridItem>Tokenomics</GridItem>
        <GridItem>Roadmap</GridItem>
        <GridItem>Whitepaper</GridItem>
        <GridItem>Pledge</GridItem>
        <GridItem>NFT</GridItem>
        <GridItem>Games</GridItem>
      </Grid>
      <Image
        ml={{ base: "4rem", md: "7rem", lg: 44 }}
        width={"20%"}
        src="icons.png"
      />
    </Stack>
  );
};

export default Footer;
