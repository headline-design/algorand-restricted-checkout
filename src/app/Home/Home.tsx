import React from "react";
import { Flex } from "pipeline-ui";
import { Item } from "./Item";
import items from "../../data/items.json";

export const Home: React.FC = () => {
  return (
    <Flex flexWrap="wrap">
      {items.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </Flex>
  );
};
