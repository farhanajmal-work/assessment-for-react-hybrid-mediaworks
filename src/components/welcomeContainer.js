import { Box, Image, Stack, Text } from "@chakra-ui/react";
import background from "../assets/bg-dots.png";
import shopping from "../assets/shopping.png";
const WelcomeContainer = () => {
  return (
    <Box
      w={{ lg: "524px", "2xl": "732px" }}
      maxH={{ lg: "523px", "2xl": "743px" }}
      bg={"#89089F"}
      borderRadius={"24px 0 0  24px"}
      pos={"relative"}
    >
      <Image src={background} pos={"absolute"} top={"46px"} opacity={0.3} />
      <Image
        src={background}
        pos={"absolute"}
        bottom={"46px"}
        opacity={0.3}
        sx={{ transform: "rotate(180deg)" }}
      />
      <Image
        src={background}
        mt={"46px"}
        pos={"absolute"}
        bottom={"46px"}
        left={"542px"}
        opacity={0.3}
        sx={{ transform: "rotate(180deg)" }}
      />
      <Stack
        pos={"absolute"}
        top={0}
        justify={"center"}
        align={"center"}
        w={"100%"}
        h={"100%"}
      >
        <Image src={shopping} h={"300px"} />
        <Text fontSize={"24px"} fontWeight={600} color={"#FFFFFF"}>
          Welcome to our shop
        </Text>
        <Text fontSize={"14px"} fontWeight={400} color={"#FFFFFF"}>
          Purchase imported shoes
        </Text>
      </Stack>
    </Box>
  );
};

export default WelcomeContainer;
