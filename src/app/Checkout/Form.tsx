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
let toastProvider: any = undefined;

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
    toastProvider.addMessage("Processing transaction...", {
      secondaryMessage: "Checking progress on Algo Explorer",
      actionHref: "https://algoexplorer.io/",
      actionText: "Check",
      variant: "processing",
    });
    this.setState({ status: "done", transactionId });
  };

  render() {
    const { wallet, item, pipeline } = this.props;
    const { status, transactionId } = this.state;

    return (
      <Box width="100%" maxWidth="800px">
        <ToastMessage.Provider
          ref={(node: React.ReactNode) => (toastProvider = node)}
        />
        {status === "ready" ? (
          <>
            <Text>Connected wallet address (your wallet)</Text>
            <AlgoAddress textLabels address={wallet.address} />
            <Text>Current wallet balance {wallet.balance}</Text>

            <Text mt={4}>
              Click "Send" button to pay for the{" "}
              <strong>{item.name} and finalize your order</strong>
            </Text>
            <Box mt={1}>
              <AlgoSendButton
                index={assetIndex}
                recipient={recipientAddress}
                amount={item.price * 1e3}
                note={`Order itemId: ${item.id} itemName: ${item.name}`}
                wallet={pipeline}
                returnTo={"txID"}
                context={this}
                onChange={this.handleSend}
              />
            </Box>
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
                message="Payment done"
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
