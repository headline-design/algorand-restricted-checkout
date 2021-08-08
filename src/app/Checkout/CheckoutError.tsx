import React from "react";
import { Flex, ToastMessage, Button, Box } from "pipeline-ui";
import { Link } from "react-router-dom";

type Props = {
  message: string;
  handleRetry: () => void;
};

export const CheckoutError: React.FC<Props> = ({ message, handleRetry }) => {
  return (
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
          secondaryMessage={message}
          actionText=""
        />
        <Box>
          <Link to="/">
            <Button icon="LinkIcon" mt={3}>
              Go back to the Homepage
            </Button>
          </Link>
          <Button icon="Sync" mt={3} ml={3} onClick={handleRetry}>
            Retry
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
