import React from "react";
import {
  Box,
  Flex,
  ToastMessage,
  Button,
  Text,
  AlgoSendButton,
  AlgoAddress,
} from "pipeline-ui";
import { Props as ItemProps } from "../Home/Item";
import { Link } from "react-router-dom";

const recipientAddress = process.env.REACT_APP_RECIPIENT_ADDRESS;

const assetIndex = 0; // 0 for ALGO

const convertToMilliAlgo = (price: number) => price * 1e6;

type Props = {
  wallet: {
    address: string;
    balance: number;
  };
  item: ItemProps;
  pipeline: any;
};
export class Form extends React.Component<Props> {
  state = {
    status: "ready",
    transactionId: "",
  };

  handleSend = (transactionId: string) => {
    this.setState({ status: "done", transactionId });
  };

  render() {
    const { wallet, item, pipeline } = this.props;
    const { status, transactionId } = this.state;
    const priceInMilliAlgo = convertToMilliAlgo(item.price);

    return (
      <Box width="100%" maxWidth="800px">
        {status === "ready" ? (
          <>
            <Text>Connected wallet address (your wallet)</Text>
            <AlgoAddress textLabels address={wallet.address} />
            <Text>Current wallet balance {wallet.balance}</Text>

            <Text mt={4} textAlign="right">
              Click "Send" button to pay <strong>{item.price} ALGO</strong> for
              the <strong>{item.name}</strong> and finalize your order
            </Text>
            <Flex mt={1} justifyContent="space-between">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  icon="LinkIcon"
                  mainColor="secondary"
                  contrastColor="darkgrey"
                  border="1px solid"
                >
                  Go back to the Homepage
                </Button>
              </Link>
              <AlgoSendButton
                index={assetIndex}
                recipient={recipientAddress}
                amount={priceInMilliAlgo}
                note={`Order itemId: ${item.id} itemName: ${item.name}`}
                wallet={pipeline}
                returnTo={"txID"}
                context={this}
                onChange={this.handleSend}
              />
            </Flex>
          </>
        ) : (
          <Flex justifyContent="center" width="100%">
            <Flex
              width="100%"
              maxWidth="600px"
              alignItems="flex-end"
              flexDirection="column"
            >
              <ToastMessage.Success
                width="100%"
                message="Payment sent"
                secondaryMessage={`Transaction ID: ${transactionId}`}
                actionText=""
              />
              <Link to="/">
                <Button icon="LinkIcon" mt={3}>
                  Go back to the Homepage
                </Button>
              </Link>
            </Flex>
          </Flex>
        )}
      </Box>
    );
  }
}
