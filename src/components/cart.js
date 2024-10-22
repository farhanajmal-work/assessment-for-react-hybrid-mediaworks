import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import backArrowIcon from "../assets/back-arrow.png";
import trashIcon from "../assets/Trash-icon.png";
import plusIcon from "../assets/add.png";
import minusIcon from "../assets/minus.png";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../features/product/cartSlice";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <Container
      maxW={"1574px"}
      bg={"#FFFFFF"}
      p={"24px"}
      borderRadius={"24px"}
      mt={"40px"}
    >
      <Button
        w={"608px"}
        fontSize={"22px"}
        fontWeight={600}
        borderBottom={"2px solid #D0CFCF"}
        justifyContent={"flex-start"}
        bg={"none"}
        borderRadius={0}
        px={0}
        _hover={{ background: "none" }}
        onClick={() => props.setShowCart((prev) => !prev)}
      >
        <Image src={backArrowIcon} />
        Shopping Continue
      </Button>
      <Text fontSize={"20px"} fontWeight={700} color={"#000000"}>
        Shopping Cart
      </Text>
      <Text fontSize={"20px"} fontWeight={700} color={"#000000"}>
        Total Amount:&nbsp;{totalAmount}
      </Text>
      {cartItems.map((item, index) => (
        <Flex
          key={index}
          justify={"space-between"}
          align={"center"}
          p={"24px"}
          mt={"24px"}
          border={"1px solid #EDEDED"}
          borderRadius={"16px"}
        >
          <Flex gap={"18px"}>
            <Box
              w={"120px"}
              h={"120px"}
              bg={"#F2F2F2"}
              borderRadius={"16px"}
              p={"10px"}
            >
              <Image
                src={item.imgSrc}
                alt={item.productType}
                w={"100px"}
                h={"100px"}
                objectFit={"contain"}
              />
            </Box>
            <Stack spacing={0} justify={"center"}>
              <Text fontSize={"20px"} fontWeight={700} color={"#000000"}>
                {item.productType}
              </Text>
              <Text fontSize={"17.41px"} fontWeight={400} color={"#000000"}>
                Running
              </Text>
            </Stack>
          </Flex>
          <Flex gap={"34px"}>
            <Flex align={"center"} gap={"6px"}>
              <Text fontSize={"22px"} fontWeight={600} color={"#393939"}>
                {item.quantity}
              </Text>
              <Stack spacing={"2.86px"}>
                <Image
                  src={plusIcon}
                  w={"20px"}
                  h={"8.57px"}
                  objectFit={"contain"}
                  cursor={"pointer"}
                  onClick={() => handleIncrement(item.id)} // Increment quantity
                />
                <Image
                  src={minusIcon}
                  w={"20px"}
                  h={"8.57px"}
                  objectFit={"contain"}
                  cursor={"pointer"}
                  onClick={() => handleDecrement(item.id)} // Decrement quantity
                />
              </Stack>
            </Flex>
            <Text fontSize={"20.09px"} fontWeight={700} color={"#000000"}>
              $ {item.productPrice}
            </Text>
            <Box
              bg={"#ffffff"}
              p={0}
              onClick={() => handleRemove(item.id)} // Dispatch remove action
              cursor="pointer"
            >
              <Image
                src={trashIcon}
                w={"25px"}
                h={"25px"}
                objectFit={"contain"}
              />
            </Box>
          </Flex>
        </Flex>
      ))}
    </Container>
  );
};

export default Cart;
