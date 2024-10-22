import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import priceIcon from "../assets/price-icon.png";
import ratingIcon from "../assets/rating-icon.png";
import { addToCart } from "../features/product/cartSlice";
import { useDispatch } from "react-redux";

const Products = (props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: props.id, // Make sure you have a unique identifier for each product
        imgSrc: props.imgSrc,
        productType: props.productType,
        productPrice: props.productPrice,
      })
    );
  };
  return (
    <Box w={"296px"} bg={"#ffffff"} borderRadius={"15.63px"} spacing={0}>
      <Box mx={"21px"} my={"14px"}>
        <Image
          src={props.imgSrc}
          w={"251px"}
          h={"251px"}
          objectFit={"contain"}
        />
      </Box>
      <Flex>
        <Button
          w={"100%"}
          bg={"#111111"}
          color={"#ffffff"}
          fontSize={"13.1px"}
          fontWeight={700}
          borderRadius={0}
          onClick={handleAddToCart}
        >
          ADD TO CART
        </Button>
        <Button
          w={"100%"}
          bg={"#89089F"}
          color={"#FFFFFF"}
          fontSize={"13.1px"}
          fontWeight={700}
          borderRadius={0}
        >
          QUICK VIEW
        </Button>
      </Flex>
      <Flex
        justify={"space-between"}
        pt={"15.63"}
        m={"15.63px 11.72px 11.72px 11.72px"}
        pb={"11.72px"}
        borderBottom={"1px solid #C0C0C0"}
      >
        <Text fontSize={"20.09px"} fontWeight={700} color={"#000000"}>
          {props.productType}
        </Text>
        <Flex align={"center"} gap={"5.64px"}>
          <Image src={priceIcon} objectFit={"contain"} />
          <Text fontSize={"20.09px"} fontWeight={700} color={"#000000"}>
            $ {props.productPrice}
          </Text>
        </Flex>
      </Flex>

      <Flex justify={"space-between"} p={"11.72px 11.72px 15.63px 11.72px"}>
        <Text fontSize={"17.41px"} fontWeight={400} color={"#000000"}>
          Running
        </Text>
        <Flex align={"center"} gap={"5.64px"}>
          <Image src={ratingIcon} objectFit={"contain"} />
          <Image src={ratingIcon} objectFit={"contain"} />
          <Image src={ratingIcon} objectFit={"contain"} />
          <Image src={ratingIcon} objectFit={"contain"} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Products;
