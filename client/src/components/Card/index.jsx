import { Box, Image, Button, styled } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from "moment";
import style from "./style.module.css";
function Card({ Activity }) {
  return (
    <>
      {Activity && (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
          <Link to={`/product/${Activity.id}`}>
            <Image
              className={style.productImage}
              src={Activity.photos[0]}
              alt="ActPhoto"
              borderRadius={50}
            ></Image>
            <Box p="6px">
              <Box d="flex" alignItems="baseline">
                {moment(Activity.tarih[0]).format("DD/MM/YYYY")}
              </Box>
              <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                {Activity.title}
              </Box>
              <Box>{Activity.price}</Box>
            </Box>
          </Link>
          <Button colorScheme="teal">Add to Basket</Button>
        </Box>
      )}
    </>
  );
}

export default Card;
