
import {
  Flex,
  Icon,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Center,
  Button,
  Heading,
  useColorModeValue,
  useToast,
  keyframes,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useToken from "@galvanize-inc/jwtdown-for-react";
import useUser from './useUser';
import { FaUserCircle, FaHeart } from 'react-icons/fa';
const UpdateProfileForm = () => {
  const token = useToken();
  const user = useUser(token);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const toast = useToast();
  const handleFirstName = (event) => {
    const value = event.target.value;
    setFirstName(value);
  }
  const handleLastName = (event) => {
    const value = event.target.value;
    setLastName(value);
  }
  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  }

  const handleSubmit = async (event) => {
    const accountData = {}
    accountData.first_name = firstName;
    accountData.last_name = lastName;
    accountData.email = email;
    accountData.username = email;
    const url = `http://localhost:8000/api/accounts/${user.id}`;
    const fetchConfig = {
      method: "PUT",
      body: JSON.stringify(accountData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      toast({
        title: "Account updated.",
        description: "All changes have been saved.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/update");
    }

  };
  const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 2;
  }
  50% {
    transform: scale(1.4);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
  return (
    <Flex
      minH={'70vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Icon as={FaUserCircle} w={24} h={24} />
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Update Profile
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName">
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" onChange={handleFirstName} value={firstName} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" onChange={handleLastName} value={lastName} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={handleEmail} value={email} />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Save changes
              </Button>
            </Stack>

          </Stack>

        </Box >
        <Center>
          <Heading fontSize="lg">
            We're glad you're here.
          </Heading>

        </Center>
        <Center>
          <Icon
            as={FaHeart}
            boxSize={10}
            color={useColorModeValue("purple.500", "purple.500")}
            ml={{ base: 2, md: 0 }}
            mt={{ base: 2, md: 4 }}
            css={{
              animation: `${pulseAnimation} 3s infinite`,
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 4h14M1 8l3-4m10 4L13 4"
            />
          </Icon>
        </Center>
      </Stack >
    </Flex >
  );
}

export default UpdateProfileForm;
