import {
  Avatar,
  Box,
  chakra,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
  keyframes,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
const MotionFlex = motion(Flex);

const hoverAnimation = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 6px 16px 0px",
  },
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
const testimonials = [
  {
    name: "Dan Flashes",
    role: "Patron at Truffoni's",
    content:
      "I am simply a better cook because of this app. I can't believe how easy it is to use and how many recipes I can find.",
    avatar: "https://pbs.twimg.com/tweet_video_thumb/FAH749rVEAM8I9A.jpg",
  },
  {
    name: "Djimon Hounsou",
    role: "CEO at KraftPunk",
    content:
      "After using this app, I never have to worry about what I'm going to make for dinner. It's so easy to use and has saved me loads of time.",
    avatar:
      "https://imgs.search.brave.com/0CwXPIKoQYyG-Yg7C0_HJj-8r6W__5P0qbA9tBNdHls/rs:fit:1000:667:1/g:ce/aHR0cHM6Ly9zbndv/cmtzY2VvLmltZ2l4/Lm5ldC9pZHMvZjY4/Nzc5MmQtNmIyNi00/NWY5LWJkYWYtNGY5/Y2YwYTZiZDFkLnNp/emVkLTEwMDB4MTAw/MC5KUEc_dz0xMDAw",
  },
  {
    name: "Frank Renolds",
    role: "Owner of Patty's Pub",
    content:
      "You really can't go wrong with Dish Dynamo. It's the best recipe app I've ever used. Maybe even the best app I've ever used. Period.",
    avatar:
      "https://imgs.search.brave.com/Ezj_vAXHMuj-3sM1oKptaaD8NGpHDDflVspEJDcxX4s/rs:fit:670:960:1/g:ce/aHR0cHM6Ly9pLmt5/bS1jZG4uY29tL3Bo/b3Rvcy9pbWFnZXMv/ZmFjZWJvb2svMDAx/LzMzNC85MzcvMmQ4/LmpwZ19sYXJnZQ",
  },
  {
    name: "Brandon Palala",
    role: "Chief Marketing Officer at BottomChef",
    content:
      "It really saves me time and effort. It is exactly what my life needed.",
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTYyNjQ0NV5BMl5BanBnXkFtZTgwNzk0Njg0MjE@._V1_QL75_UY281_CR93,0,190,281_.jpg",
  },
  {
    name: "Krysta Bimble",
    role: "Entrepreneur at Bimble's Bakes",
    content:
      "I didn't even need training. Dish Dynamo is the most valuable food resource we have EVER used. I love it!",
    avatar:
      "https://uproxx.com/wp-content/uploads/2022/02/patti-harrison.jpg?w=1024",
  },
  {
    name: "Darcy Llamas",
    role: "Movie Star",
    content:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, Dish Dynamo is the coolest, most happening thing around! I love the app, and the developers!",
    avatar:
      "https://pbs.twimg.com/ext_tw_video_thumb/694618345379762176/pu/img/fWirteEhFYuFslO7?format=jpg&name=large",
  },
  {
    name: "Daniel Tutu",
    role: "Literally Starving Musician",
    content:
      "I am so pleased with this product. Dish Dynamo is both attractive and highly adaptable. Without Dish Dynamo, we would have gone hungry by now. Thank you for creating this product!",
    avatar:
      "https://play-images-prod-catalog.tech.tvnz.co.nz/31541453-31541549.png?width=1200&height=630",
  },
  {
    name: "Thomas Gracey",
    role: "Operations Manager at The Angels",
    content:
      "Phenomenal. I will recommend you to my colleagues. I love Dish Dynamo.",
    avatar:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/234247948_2137436316396932_6296351707301415067_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Yp4D-AgurXsAX8S8B05&_nc_oc=AQmSBL359X70fMTYfNLVbqGGUx8Xxw4pwpy39Q42RKVQsLUh94hLkNgrzfS6Js3keqc&_nc_ht=scontent-lax3-2.xx&oh=00_AfDgHz0rkITBDGqxzQZ50gFpvC-nMptdrPsHpfRHBRzdsA&oe=644C73A1",
  },
];

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED64A6' /%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%23F56565' /%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%2338B2AC' /%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED8936' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, content, avatar, index } = props;
  return (
    <MotionFlex
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.2 }}
      animate="rest"
      variants={hoverAnimation}
      boxShadow={"lg"}
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={10}
      justifyContent={"space-between"}
      position={"relative"}
      bg={useColorModeValue("white", "gray.700")}
      _after={{
        content: '""',
        position: "absolute",
        height: "21px",
        width: "29px",
        left: "35px",
        top: "-10px",
        backgroundSize: "cover",
        backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
      }}
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        maxW: "640px",
        width: "full",
        filter: "blur(40px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
        backgroundImage: backgrounds[index % 4],
      }}
    >
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <chakra.p fontWeight={"medium"} fontSize={"15px"} pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontWeight={"bold"} fontSize={14}>
          {name}
          <chakra.span fontWeight={"medium"} color={"gray.500"}>
            {" "}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={"80px"}
        width={"80px"}
        alignSelf={"center"}
        m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
      />
    </MotionFlex>
  );
}

export default function TestimonialsBig() {
  return (
    <MotionFlex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
        <chakra.h3
          fontWeight={"bold"}
          fontSize={20}
          textTransform={"uppercase"}
          color={"purple.400"}
        >
          People love us
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
          fontWeight={"bold"}
          color={useColorModeValue("gray.700", "gray.50")}
        >
          You're in good company
        </chakra.h1>
        <chakra.h2
          margin={"auto"}
          width={"70%"}
          fontWeight={"medium"}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          See why over{" "}
          <chakra.strong color={useColorModeValue("gray.700", "gray.50")}>
            3+
          </chakra.strong>{" "}
          people use Dish Dynamo to figure out what to eat.
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={"20"}
        mt={16}
        mb={16}
        mx={"auto"}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            content={testimonial.content}
            avatar={testimonial.avatar}
            index={index}
          />
        ))}
      </SimpleGrid>
      <Box>
        <Icon
          as={FaHeart}
          boxSize={10}
          color={useColorModeValue("purple.500", "purple.500")}
          ml={{ base: 2, md: 0 }}
          mt={{ base: 0, md: 2 }}
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
      </Box>
    </MotionFlex>
  );
}
