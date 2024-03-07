import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Participate = () => {
  return (
    <Box
      h={{ base: 'auto', md: '71.2rem' }}
      margin={'auto'}
      bg={"black"}
      w={'100%'}
    >
      <Box
        bgImage={'url("part.png")'}
        bgSize="cover" 
        bgPosition="center" 
        opacity={'71%'} 
        h="100%" 
        scale={'crop'}
      >
       <Stack>
       <Heading
            fontFamily="shojumaru"
            fontWeight={400}
            fontSize="2.7rem"
            lineHeight="3.2rem"
            color="rgb(237,1,55)"
            marginBottom="1rem"
          >
Participate in our IDO Event!          </Heading>
       <Box>
            
            </Box>
       </Stack>
     
      </Box>
    </Box>
  )
}

export default Participate
