

import { StarIcon } from "@chakra-ui/icons";
import {Flex} from "@chakra-ui/react";


const CartWidget = () => {
    return (
        <Flex 
        alignItems={"center"}
        arginRight={"30px"}
        justifyContent={"space-between"}
        width={"30px"}> 
        <div><StarIcon/> 10</div>
        </Flex>
    )
}

export default CartWidget;