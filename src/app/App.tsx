import React from "react";
import { BaseStyles, Heading, Box, Flex } from "pipeline-ui";
import { Algo } from "@pipeline-ui/icons";
import { Item } from "./Item/Item";
import items from "../data/items.json";

function App() {
  return (
    <BaseStyles>
      <Box as="header" backgroundColor="grey" pt={2} pb={2}>
        <Flex maxWidth={1400} margin="0 auto" alignItems="center" pl={3} pr={3}>
          <Algo color="black" size="80" />
          <Heading as="h1" ml={10}>
            Algorand Demo Store
          </Heading>
        </Flex>
      </Box>
      <Box height={1}></Box>
      <Box maxWidth={1400} margin="0 auto">
        <Flex as="main" flexWrap="wrap">
          {items.map((item) => (
            <Item {...item} key={item.name} />
          ))}
        </Flex>
      </Box>
    </BaseStyles>
  );
}

export default App;
