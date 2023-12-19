import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  Spacer,
  HStack,
  useDisclosure,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import UserLogo from "./UserLogo";
import Logo from "../Assets/Logo.png";

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        onClose();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onClose]);

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={999} px={0} py={0}>
      <Flex alignItems="center" py={4} px={8} bg="orange.200">
        <Box>
          <img
            src={Logo}
            alt="Website Logo"
            style={{ width: "100px", height: "auto", marginRight: "10px" }}
          />
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "block" }} width="40%" bg={"white"}>
          <Input placeholder="Search"  />
        </Box>
        <Spacer />
        <Box
          display={{ base: "none", md: "block" }}
          width={{ base: "30%", md: "auto" }}
        >
          <HStack spacing={8} justify="space-between" fontSize="xl">
            <Menu>
              <MenuButton
                as={Box}
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.100" }}
              >
                Shop by Categories
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} to="/products">
                  Vegetables
                </MenuItem>
                <MenuItem as={Link} to="/products">
                  Fruits
                </MenuItem>
                <MenuItem as={Link} to="/products">
                  Dairy
                </MenuItem>
                <MenuItem as={Link} to="/products">
                  Bakery
                </MenuItem>
              </MenuList>
            </Menu>
            <HStack spacing={8}>
              <Box as={Link} to="/">
                Home
              </Box>
              <Box as={Link} to="/addToCart" fontSize="2xl">
                <FaShoppingCart size={30} />
              </Box>
              <Box as={Link} to="/signin">
                Admin
              </Box>
              <Box>
                <UserLogo />
              </Box>
            </HStack>
          </HStack>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={
              isOpen ? <CloseIcon boxSize={8} /> : <HamburgerIcon boxSize={8} />
            }
            variant="ghost"
            onClick={onToggle}
          />
        </Box>
      </Flex>
      {isOpen && (
        <Box
          bg="gray.100"
          position={{
            base: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
          }}
          overflowY="auto"
        >
          <Flex height="100%" alignItems="center" flexDirection="column">
            <HStack spacing={4} flexWrap="wrap" fontSize="xl">
              <Box as={Link} to="/">
                Home
              </Box>
              <Box as={Link} to="/addToCart" fontSize="2xl">
                <FaShoppingCart size={30} />
              </Box>
              <Box as={Link} to="/signin">
                Admin
              </Box>
              <Box>
                <UserLogo />
              </Box>
            </HStack>
            <Box mt={4} width="80%">
              <Input placeholder="Search" />
            </Box>
            <Menu>
              <MenuButton
                as={Box}
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.200" }}
              >
                Shop by Categories
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} to="/products">
                  Vegetables
                </MenuItem>
                <MenuItem as={Link} to="/products">
                  Fruits
                </MenuItem>
                <MenuItem as={Link} to="/products">
                  Dairy
                </MenuItem>
                <MenuItem as={Link} to="/products">
                  Bakery
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
