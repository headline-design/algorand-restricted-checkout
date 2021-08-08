import React from "react";
import { BaseStyles, Heading, Box, Flex } from "pipeline-ui";
import { Algo } from "@pipeline-ui/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home/Home";
import { Checkout } from "./Checkout/Checkout";

function App() {
  return (
    <BaseStyles
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Router>
        <Box as="header" backgroundColor="grey" pt={2} pb={2}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Flex
              maxWidth={1400}
              margin="0 auto"
              alignItems="center"
              pl={3}
              pr={3}
            >
              <Algo color="black" size="80" />
              <Heading as="h1" ml={10}>
                Algorand Demo Store
              </Heading>
            </Flex>
          </Link>
        </Box>
        <Box height={1}></Box>
        <Flex
          as="main"
          maxWidth={1400}
          margin="0 auto"
          flexGrow={1}
          width="100%"
          flexDirection="column"
        >
          <Switch>
            <Route path="/checkout/:itemId">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Flex>
      </Router>
    </BaseStyles>
  );
}

export default App;
