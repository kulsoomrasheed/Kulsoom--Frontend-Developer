import { HamburgerIcon } from '@chakra-ui/icons'
import { Tabs, TabList, TabPanels, Tab, TabPanel, CloseButton } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import React from 'react'
const NavMenu=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='rgb(122,21,52)'      color={'white'}            bgColor={"rgb(122,21,52)"}
 onClick={onOpen}>
          <HamburgerIcon/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <CloseButton/>
            <Tabs>
  <TabList  color='rgba(237, 1, 55, 1)'>
    <Tab  color='rgba(237, 1, 55, 1)'>Menu</Tab>
  </TabList>
  <TabPanels>
    <TabPanel  color='rgba(237, 1, 55, 1)'>
    <Tab>Home</Tab>
    <Tab>IDO</Tab>
    <Tab>Tokenomics</Tab>
    <Tab>Roadmap</Tab>
    <Tab>Coming Soon</Tab>

    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default NavMenu