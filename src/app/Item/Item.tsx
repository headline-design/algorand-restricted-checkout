import React from "react";
import { Card, Image, Heading, Box, Pill, Flex, Icon, Text } from "pipeline-ui";
import { ButtonBuy } from "./ButtonBuy/ButtonBuy";

type Props = {
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
};

export const Item: React.FC<Props> = ({ name, price, image, isNew }) => {
  return (
    <Box p={3} width={[1, 0.5, 0.33, 0.25]}>
      <Card p={4}>
        {isNew && (
          <Box position="absolute" right={2} top={2}>
            <Pill color="green">New!</Pill>
          </Box>
        )}
        <Image alt={name} src={image} mb={3} />
        <Heading as="h2" mb={3}>
          {name}
        </Heading>
        <Flex alignItems="center" mb={3}>
          <Icon name={"Algo"} mr={2} />
          <Text>Pay using your Algorand Wallet</Text>
        </Flex>
        <ButtonBuy price={price} />
      </Card>
    </Box>
  );
};
