import { Pipeline } from "pipeline-ui";

export const pipeline = Pipeline.init();

// Force testnet
Pipeline.main = false;

export const verifyWallet = (price: number) => async () => {
  let address = "";
  let balance = 0;
  try {
    address = await Pipeline.connect(pipeline);
  } catch (error) {
    // this is never reached even in case of an error
    console.error("connection error: ", error.message);
  }
  if (!address) {
    throw new Error("Connection error or wallet window closed");
  }
  try {
    const balanceResponse = await Pipeline.balance(address);
    // this is required because balanceResponse is a string e.g. "19.899 Algos"
    balance = parseFloat(balanceResponse);
    console.log(balance);
  } catch (error) {
    // this is never reached even in case of an error
    console.error("balance error: ", error.message);
  }
  if (!balance || balance < price) {
    throw new Error(
      `You must have at least ${price} Algos. Top up your wallet.`,
    );
  }
  return { address, balance };
};
