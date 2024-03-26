import { CopyIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  td,
  table,
  thead,
  tr,
  tbody,
  Input,
  Flex,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";

const Participate = () => {
  return (
    <Box
      bg={"black"}
      position={"relative"}
      bgImage={'url("part.png")'}
      bgSize="cover"
      bgPosition="center"
      opacity={"95%"}
      m={"auto"}
      w={'100%'}
      justifyContent={"center"}
      h={{ base: "auto", md: "auto", lg: "61.2rem" }}
      alignContent={"center"}
      alignItems={"center"}
      scale={"crop"}
    >
      <Heading
        p={10}
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
        textAlign={"center"}
        justifyContent={"center"}
        alignContent={"center"}
        m={"auto"}
        w={"90%"}
        display={"flex"}
        gap={3}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <Box
          justifyContent={"center"}
          textAlign={"center"}
          alignContent={"center"}
          alignItems={"center"}
          mx={"auto"}
        >
          <Text
            fontFamily="ZCOOL KuaiLe"          wordBreak={'break-word'}

            fontWeight={400}
            fontSize="1.5rem"
            lineHeight="1.8rem"
            color="white"
            maxW="35rem"
            marginBottom="2rem"
          >
            During our IDO event, you will gain early access to our
            revolutionary ecosystem, designed to empower everyone to share
            wealth and achieve success.
          </Text>
          <Box
            py={13}
            my={16}
            fontFamily="ZCOOL KuaiLe"
            fontWeight={400}
            w={"25rem"}
            h={"11rem"}
            color={"white"}
            border={"1.5px solid rgba(237, 1, 55, 1)"}
            padding={3}
            ml={16}
            borderRadius={"1.3rem"}
          >
            <Text
              bgColor={"rgb(237,1,55)"}
              fontFamily="shojumaru"
              fontWeight={400}
              position={"absolute"}
              borderRadius={"1rem"}
              top={{ base: "21.5rem", md: "21.2rem", lg: "18rem" }}
              left={{ base: "17rem", md: "16rem", lg: "18.7rem" }}
              p={3}
            >
              Token Info
            </Text>
            <table align="center">
              <tbody>
                <tr>
                  <td>Total Token Supply</td>
                  <td style={{ color: "rgba(237, 1, 55, 1)", align: "center" }}>
                    20%
                  </td>
                </tr>
                <tr>
                  <td align="center">Soft Cap</td>
                  <td style={{ color: "rgba(237, 1, 55, 1)", align: "center" }}>
                    200 BNB
                  </td>
                </tr>
                <tr>
                  <td align="center">Initial exchange rate</td>
                  <td style={{ color: "rgba(237, 1, 55, 1)", align: "center" }}>
                    1 BNB
                  </td>
                </tr>
              </tbody>
            </table>

            <table style={{ margin: "auto" }}>
              <thead>
                <tr>
                  <th colspan="2" style={{ textAlign: "center" }}>
                    Recommended Referral Commission
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Token Supply</td>
                  <td style={{ color: "rgba(237, 1, 55, 1)", align: "center" }}>
                    {" "}
                    20%
                  </td>
                </tr>
                <tr>
                  <td>Soft Cap</td>
                  <td style={{ color: "rgba(237, 1, 55, 1)", align: "center" }}>
                    200 BNB
                  </td>
                </tr>
              </tbody>
            </table>

            <Heading
              p={2}
              fontFamily="shojumaru"
              fontWeight={400}
              fontSize="1.4rem"
              lineHeight="3.2rem"
              color="rgba(237, 1, 55, 1)"
              marginBottom="1rem"
            >
              Become an affiliate & Earn 7% as Commission!
            </Heading>
            <Button
              m={"auto"}
              mb={5}
              size={"sm"}
              bgGradient="linear(to-r, rgba(237, 1, 55, 1), rgb(235,96,23))"
              color={"white"}
              fontFamily="ZCOOL KuaiLe"
              borderRadius={16}
            >
              Connect Wallet{" "}
            </Button> <Flex alignItems={'center' } gap={2}>
            <Flex
              m={"auto"}
              gap={1}
              borderRadius={20}
              border={"1.5px solid rgba(237, 1, 55, 1)"}
            >
              {" "}
              <Input
                type="text"
                placeholder="Enter the amount BNB"
                border={"1.5 px solid black"}
              ></Input>
              <Button
                size={"sm"}
                bgColor={"rgba(237, 1, 55, 1)"}
                color={"white"}
                fontFamily="ZCOOL KuaiLe"
                mt={1}
                mr={1}
                borderRadius={16}
              >
                Generate
              </Button>
            </Flex>           <CopyIcon   fontSize={'1.8rem'} color={'rgba(237, 1, 55, 1)'}/></Flex>   

          </Box>
        </Box>
        <Box
          m={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
          alignContent={"center"}
          mt={{ base: "15rem", md: "15rem", lg: "2rem" }}
        >
          <Box
            fontFamily="ZCOOL KuaiLe"
            fontWeight={400}
            w={{base:"70%",md:"32rem",lg:"40rem"}}
            h={"auto"}
            gap={5}
            color={"white"}
            border={"1.5px solid rgba(237, 1, 55, 1)"}
            padding={3}
            borderRadius={"1.3rem"}
            letterSpacing={2}
            alignItems={"center"}
            alignContent={"center"}
            justifyContent={"space-between"}
            my={5}
            marginRight={45}
            animation="horizontalAnimation 2s ease-in-out infinite"
          >
            <Flex w={45} position={"absolute"} top={-10} right={"24rem"}>
              <img src="0.png" alt="" />
              <img src="0.png" alt="" />
              <img height={10} src="_.png" alt="" />
              <img src="0.png" alt="" />
              <img src="0.png" alt="" />
            </Flex>
            <Heading
              fontFamily="shojumaru"
              fontWeight={400}
              fontSize="2.7rem"
              lineHeight="3.2rem"
              color="rgba(237, 1, 55, 1)"
              marginBottom="1rem"
              my={5}
              
            >
              PRESALE 1
            </Heading>
            <Stack
            
              margin={"auto"}
              justifyContent={"space-between"}
              my={15} w={'50%'}
            >
              <Text my={2}>1 Saviour = 0.657 USDT</Text>
              <Text my={2}>1 Saviour = 0.657 USDT</Text>
              <Text my={2}>1 Saviour = 0.657 USDT</Text>
              <Text my={2}>1 Saviour = 0.657 USDT</Text>
              <Input 
                my={2}
                type="text"
                placeholder="Enter the amount BNB"
                border={"1.5px solid rgba(237, 1, 55, 1)"}
              ></Input>
              <Input 
                my={2}
                type="text"
                placeholder="Enter the amount BNB"
                border={"1.5px solid rgba(237, 1, 55, 1)"}
              ></Input>
              <Input 
                my={2}
                type="text"
                placeholder="Enter the amount BNB"
                border={"1.5px solid rgba(237, 1, 55, 1)"}
              ></Input>
              <Flex m={"auto"} gap={6}>
                <Button
                  size={"sm"}
                  bgGradient="linear(to-r, rgba(237, 1, 55, 1), rgb(235,96,23))"
                  color={"white"}
                  fontFamily="ZCOOL KuaiLe"
                  mt={1}
                  borderRadius={16}
                >
                  Buy
                </Button>
                <Button
                  size={"sm"}
                  bgGradient="linear(to-r, rgba(237, 1, 55, 1), rgb(235,96,23))"
                  color={"white"}
                  fontFamily="ZCOOL KuaiLe"
                  mt={1}
                  borderRadius={16}
                >
                  claim Drop
                </Button>
              </Flex>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Participate;
