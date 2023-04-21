
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useToken from "@galvanize-inc/jwtdown-for-react";
const UpdateProfileForm = () => {
  // const token = useToken();
  // const user = useUser(token);

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
    const url = "http://localhost:8000/api/accounts/${id}";
    const fetchConfig = {
      method: "PUT",
      body: JSON.stringify(accountData),
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      setFirstName('');
      setLastName('');
      setEmail('');
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

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
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
      </Stack >
    </Flex >
  );
}

export default UpdateProfileForm;
