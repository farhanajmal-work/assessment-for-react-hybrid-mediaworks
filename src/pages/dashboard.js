import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";

import essentialItems from "../assets/essential-items.png";
import cartIcon from "../assets/cart-icon.png";
import { ProductsData } from "../data/produstsData";
import Products from "../components/products";
import Cart from "../components/cart";
import { useState } from "react";
import LeftSidebar from "../components/leftSidebar";

const Dashboard = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <Container px={0} maxW="100vw" minH={"100vh"} bg={"#F1F1F1"}>
      <Box maxW={"1920px"} pr={"41.5px"}>
        <LeftSidebar />
        <Stack ml={"304.5px"}>
          {showCart ? (
            <Cart setShowCart={setShowCart} />
          ) : (
            <>
              <Flex justify={"flex-end"} mt={"40px"}>
                <Button
                  bg={"#ffffff"}
                  px={"32px"}
                  py={"17px"}
                  borderRadius={"99px"}
                  gap={"16px"}
                  onClick={() => setShowCart((prev) => !prev)}
                >
                  <Image src={cartIcon} objectFit={"contain"} />
                  <Text fontSize={"16px"} fontWeight={400} color={"#09090A"}>
                    My Cart
                  </Text>
                </Button>
              </Flex>

              <Grid templateColumns="repeat(1, 1fr)" gap={"24px"} mt={"24px"}>
                <GridItem w="100%" h={"100%"} colSpan={2}>
                  <Image src={essentialItems} objectFit={"cover"} />
                </GridItem>
              </Grid>
              <Wrap spacing={"24px"} mt={"24px"} pb={"48px"}>
                {ProductsData.map((product, index) => (
                  <Products
                    key={index}
                    id={product.productId}
                    imgSrc={product.productSrc}
                    productType={product.productType}
                    productPrice={product.productPrice}
                  />
                ))}
              </Wrap>
            </>
          )}
        </Stack>
      </Box>
    </Container>
  );
};

export default Dashboard;
