import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import profilePicture from "../assets/profile-picture.png";
import dashboardIcon from "../assets/dashboard-icon.png";
import productsIcon from "../assets/products-icon.png";
import logoutIcon from "../assets/logout-icon.png";
import { useNavigate } from "react-router-dom";


const LeftSidebar = () => {
  const navigate = useNavigate();
  const storedCredentials = JSON.parse(localStorage.getItem("userCredentials"));

  const handleLogout = () => {
    localStorage.removeItem("userCredentials");
    navigate("/login");
  };
  return (
    <Stack
      w={"266px"}
      minH={"100vh"}
      pos={"fixed"}
      bg={"#FFFFFF"}
      borderRight={"1px solid #EFEFEF"}
      p={"24px"}
    >
      <Flex gap={"12px"}>
        <Image
          src={profilePicture}
          w={"50px"}
          h={"50px"}
          borderRadius={"8px"}
        />
        <Stack spacing={0}>
          <Text fontSize={"16px"} fontWeight={700} color={"#09090A"}>
            Mark Wood
          </Text>
          <Text fontSize={"14px"} fontWeight={400} color={"#1F1F22"}>
            {storedCredentials.email}
          </Text>
        </Stack>
      </Flex>
      <Stack spacing={"24px"} mt={"44px"} flex="1">
        <Flex
          h={"56px"}
          gap={"19px"}
          bg={"#89089F"}
          align={"center"}
          pl={"16px"}
          borderRadius={"8px"}
          cursor={"pointer"}
        >
          <Image src={dashboardIcon} objectFit={"contain"} />
          <Text fontSize={"16px"} fontWeight={400} color={"#FFFFFF"}>
            Dashboard
          </Text>
        </Flex>
        <Flex
          h={"56px"}
          gap={"19px"}
          align={"center"}
          pl={"16px"}
          borderRadius={"8px"}
          cursor={"pointer"}
        >
          <Image src={productsIcon} objectFit={"contain"} />
          <Text fontSize={"16px"} fontWeight={400} color={"#09090A"}>
            Products
          </Text>
        </Flex>
      </Stack>
      <Flex
        h={"56px"}
        gap={"19px"}
        align={"center"}
        pl={"16px"}
        borderRadius={"8px"}
        cursor={"pointer"}
        onClick={handleLogout}
      >
        <Image src={logoutIcon} objectFit={"contain"} />
        <Text fontSize={"16px"} fontWeight={400} color={"#09090A"}>
          Logout
        </Text>
      </Flex>
    </Stack>
  );
};

export default LeftSidebar;
