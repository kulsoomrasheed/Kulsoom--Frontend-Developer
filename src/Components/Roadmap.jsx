import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
const Roadmap = () => {
  return (
    <Box
      position={"relative"}
      bg={"black"}
      bgImage={'url("token.png")'}
      bgSize="cover"
      bgPosition="center"
      opacity={"95%"}
      h={{ base: "auto", md: "50.2rem" }}
      scale={"crop"}
    >
      <Box
        textAlign="center"
        marginRight={{ base: 0, md: "2rem" }}
        padding={10}
        pl={{ base: 0, md: 10 }}
        order={{ base: "2", md: "1" }}
      >
        <Heading
          fontFamily="shojumaru"
          fontWeight={400}
          fontSize="2.7rem"
          lineHeight="3.2rem"
          color="rgba(237, 1, 55, 1)"
          marginBottom="1rem"
          p={6}
        >
          Road Map
        </Heading>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            gap={12}
          >
            <GridItem>
              <Image src="Link.png" maxW="100%" maxH="100%" />
            </GridItem>
            <GridItem>
              <Image src="Link.png" maxW="100%" maxH="100%" />
            </GridItem>
            <GridItem>
              <Image src="Link.png" maxW="100%" maxH="100%" />
            </GridItem>
            <GridItem>
              <Image src="Link.png" maxW="100%" maxH="100%" />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Roadmap;
