import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const HeroSmall = () => {
  return (
    <Box
      h={"36.75rem"}
      margin={"auto"}
      bgImage={'url("rect.png")'}
      w={"100%"}
      color={"white"}
      position={"relative"}
      justifyContent={'center'}
      alignContent={'center'}
      alignItems={'center'}
      display={{
        base: 'block', 
        sm: 'block', 
        lg: 'none', 
      }}
    >
      <Stack border={"2px solid black"} bgColor={"black"}>
        <Heading
          fontFamily={"shojumaru"}
          w={"21rem"}
          h={"15rem"}
          fontWeight={400}
          fontSize={"2.8rem"}
          lineHeight={"3.3rem"}
          textAlign={"center"}
          top={"11.5rem"}
          left={"1.8rem"}
          position={"absolute"}
          animation="verticalAnimation 2s ease-in-out infinite"
        >
          Where Blockchain Heroes Thrive, Rescuing <br /> Dreams, Elevating
          Fortunes.
        </Heading>
      </Stack>
    </Box>
  );
};

export default HeroSmall;

//
