import React from "react";
import { Flex, Loader, Text } from "pipeline-ui";
import { useAsyncRetry } from "react-use";
import { Form } from "./Form";
import { useParams } from "react-router-dom";
import { verifyWallet, pipeline } from "./verifyWallet";
import items from "../../data/items.json";
import { CheckoutError } from "./CheckoutError";

export const Checkout: React.FC = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const item = items.find((item) => `${item.id}` === itemId);
  const state = useAsyncRetry(verifyWallet(item?.price || 0), []);

  return (
    <Flex flexGrow={1} width="100%" justifyContent="center" alignItems="center">
      {state.loading ? (
        <Flex alignItems="center">
          <Loader color="primary" size="100px" />
          <Text ml={4}>Checking available Algorand Wallet balance</Text>
        </Flex>
      ) : state.error || !state.value || !item ? (
        <CheckoutError
          message={
            state.error
              ? state.error.message
              : "Unexpected error. Please retry."
          }
          handleRetry={() => state.retry()}
        />
      ) : (
        <Form wallet={state.value} item={item} pipeline={pipeline} />
      )}
    </Flex>
  );
};
