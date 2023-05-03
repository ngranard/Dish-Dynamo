import { Text, Center } from "@chakra-ui/react";
import useUser from "./../useUser";
import useToken from "@galvanize-inc/jwtdown-for-react";

const Greeting = () => {
    const token = useToken();
    const user = useUser(token);

    if (!user) {
        return null;
    }

    return (
        <Center ml="-385px">
            <Text fontSize="lg" fontWeight="medium">
                Hi, {user.first_name}
            </Text>
        </Center>
    );
};

export default Greeting;
