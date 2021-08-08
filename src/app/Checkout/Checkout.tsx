import React from "react";
import { Flex, Loader, Text, ToastMessage, Button } from "pipeline-ui";
import { useAsyncRetry } from "react-use";
import { Form } from "./Form";
import { useParams } from "react-router-dom";
import { verifyWallet, pipeline } from "./verifyWallet";
import items from "../../data/items.json";

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
      ) : state.error ? (
        <Flex justifyContent="center" width="100%">
          <Flex
            width="100%"
            maxWidth="500px"
            alignItems="flex-end"
            flexDirection="column"
          >
            <ToastMessage.Failure
              width="100%"
              message="Error"
              secondaryMessage={state.error.message}
              actionText=""
            />
            <Button icon="Sync" mt={3} onClick={() => state.retry()}>
              Retry
            </Button>
          </Flex>
        </Flex>
      ) : !state.value || !item ? (
        <Flex justifyContent="center" width="100%">
          <Flex
            width="100%"
            maxWidth="500px"
            alignItems="flex-end"
            flexDirection="column"
          >
            <ToastMessage.Failure
              width="100%"
              message="Error"
              secondaryMessage="Unexpected error. Please retry."
              actionText=""
            />
            <Button icon="Sync" mt={3} onClick={() => state.retry()}>
              Retry
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Form wallet={state.value} item={item} pipeline={pipeline} />
      )}
    </Flex>
  );
};
