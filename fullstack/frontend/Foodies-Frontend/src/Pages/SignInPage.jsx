import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from "../Styles/SigninPage.module.css"
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Button,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Image,
  Text,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import logo from "../Assets/Logo.png";
import { signinRequest } from '../Redux/Authentication/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Components/Navbar';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {signinLoading}=useSelector(state=>state.authReducer)
  console.log(signinLoading,'is signinLoading')
  const pathComingFrom = location.state?.from?.pathname || '/';
 const handleSignIn = async () => {
  const credentials = { email, password };

  try {
    const response = await dispatch(signinRequest(credentials));
    const successMessage = 'Signed in successfully';
 if (response && response === '/admin') {
        navigate('/admin');
        return;
      }
    if (response.type === 'SIGNIN_FAILURE') {
      toast.error('Invalid credentials');
    } else {
      toast.success(successMessage);
      navigate(pathComingFrom, { replace: true });
    }
  } catch (error) {
    toast.error('Invalid credentials.');
  }
};


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return signinLoading?<div><span className={styles.loader}></span></div>: (
    <>
      <Navbar/>
      <ToastContainer />
      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.100'}>
        <Box
          w={'80%'}
          bg={'white'}
          rounded={'lg'}
          boxShadow={'lg'}
          p={8}
          mx={4}
          my={8}
        >
          <Flex direction={{ base: 'column', md: 'row' }}>
            <Flex flex={2} display={{ base: 'none', md: 'block' }} mr={8}>
              <Image
                alt={'Sign Up Image'}
                objectFit={'cover'}
                src={logo}
                h="100%" 
              />
            </Flex>
            <Stack spacing={4} w={{ base: 'full', md: '50%' }}>
              <Heading fontSize={'2xl'}>Sign in to your account</Heading>
              <FormControl id="email" isRequired>
                <FormLabel mb={2}>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="md" 
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel mb={2}>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    size="md" 
                  />
                  <InputRightElement width="3rem">
                    {showPassword ? (
                      <ViewOffIcon onClick={handleTogglePassword} />
                    ) : (
                      <ViewIcon onClick={handleTogglePassword} />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                colorScheme={'blue'}
                variant={'solid'}
                onClick={handleSignIn}
                size="md" 
              >
                Sign in
              </Button>
              <Text mt={2} textAlign="center" fontSize="md" color="black.500">
                Don't have an account?{' '}
                <Link to="/signup">Sign up</Link>
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default SignIn;
