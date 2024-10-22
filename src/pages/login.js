import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import WelcomeContainer from "../components/welcomeContainer";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const { email, password } = data;

    const storedUser = JSON.parse(localStorage.getItem("userCredentials"));

    if (!storedUser || storedUser.email !== email) {
      alert("Email not found. Please sign up first.");
      return;
    }

    if (storedUser.password !== password) {
      alert("Incorrect password. Please try again.");
      return;
    }

    // alert("Login successful!");
    navigate("/dashboard"); 
  };

  return (
    <Box bg={"#F1F1F1"} py={{ lg: "90px", "2xl": "140px" }}>
      <Container
        maxW={{ lg: "870px", "2xl": "1218px" }}
        px={0}
        bg={"#ffffff"}
        borderRadius={"24px"}
      >
        <Flex h={{ lg: "523px", "2xl": "743px" }}>
          <Box display={{ base: "none", lg: "grid" }}>
            <WelcomeContainer />
          </Box>
          <Stack justify={"center"} spacing={0} mx={"auto"} zIndex={999}>
            <Text
              textAlign={"center"}
              fontSize={"24px"}
              fontWeight={600}
              color={"#343434"}
            >
              Welcome
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack
                spacing={"16px"}
                mt={{ lg: "16px", "2xl": "32px" }}
                w={{ lg: "250px", "2xl": "358px" }}
              >
                <Input
                  variant="outline"
                  w="100%"
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <Text color="red">{errors.email.message}</Text>
                )}

                <Input
                  variant="outline"
                  w="100%"
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <Text color="red">{errors.password.message}</Text>
                )}
              </Stack>

              <Button
                type="submit"
                h="50px"
                bg="#89089F"
                color={"#ffffff"}
                borderRadius={"99px"}
                mt="24px"
                w={"100%"}
              >
                Login
              </Button>
            </form>
            <Text
              textAlign={"center"}
              mt="34px"
              fontSize={"14px"}
              fontWeight={400}
            >
              Have no account yet?
            </Text>
            <RouterLink
              to="/signup"
              style={{
                cursor: "pointer",
                marginTop: "24px",
                height: "50px",
                color: "#89089F",
                border: "2px solid #89089F",
                fontSize: "18px",
                fontWeight: 700,
                borderRadius: "99px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none", // This removes the underline from the link
              }}
            >
              Registration
            </RouterLink>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Login;
