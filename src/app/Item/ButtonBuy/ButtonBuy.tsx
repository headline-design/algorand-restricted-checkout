import React from "react";
import { Box, Button, Pipeline } from "pipeline-ui";

const algo = Pipeline.init();
Pipeline.main = false;

type Props = {
  price: number;
};

const handleBuy = async () => {
  let address = "";
  let balance = 0;
  try {
    address = await Pipeline.connect(algo);
  } catch (error) {
    console.error(error.message);
    return;
  }
  try {
    balance = await Pipeline.balance(address);
    console.log(balance);
  } catch (error) {
    console.error(error.message);
    return;
  }
  if (balance > 20) {
    // redirect to checkout
    console.log("OK");
  }
};

export const ButtonBuy: React.FC<Props> = ({ price }) => {
  return (
    <Box>
      <Button icon="ShoppingCart" onClick={handleBuy}>
        Buy Now!
      </Button>
    </Box>
  );
};
