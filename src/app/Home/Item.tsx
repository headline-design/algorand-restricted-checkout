import React from "react";
import { Card, Image, Heading, Box, Pill, Text } from "pipeline-ui";
import { ButtonBuy } from "./ButtonBuy";

export type Props = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isNew?: boolean;
};

export const Item: React.FC<Props> = ({
  id,
  name,
  description,
  price,
  image,
  isNew,
}) => {
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
        <Box mb={3}>
          <Text>{description}</Text>
        </Box>
        <ButtonBuy price={price} url={`/checkout/${id}`} />
      </Card>
    </Box>
  );
};
