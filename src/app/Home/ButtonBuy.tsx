import React from "react";
import { Flex, Button, Text, Icon } from "pipeline-ui";
import { Link } from "react-router-dom";

type Props = {
  price: number;
  url: string;
};

export const ButtonBuy: React.FC<Props> = ({ price, url }) => {
  return (
    <Flex alignItems="center">
      <Text fontSize={4}>{price}</Text>
      <Icon name={"Algo"} ml={1} />

      <Link to={url}>
        <Button icon="ShoppingCart" ml={3}>
          Buy Now!
        </Button>
      </Link>
    </Flex>
  );
};
