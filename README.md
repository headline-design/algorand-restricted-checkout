# Restricted Algorand checkout form based on the Pipeline UI library

The user can proceed to the checkout form only if he has enough ALGO in his wallet to pay for the selected "item".

> Disclaimer
> This is not a production ready code, it's just a Pipeline UI library usage example.
> There are many edge cases and potential issues that are not properly handled.

## Configuration .env file

Main settings are gathered inside [`./env`](./.env) file:

- `REACT_APP_RECIPIENT_ADDRESS` - address that will receive all ALGO transfers
- `REACT_APP_USE_TESTNET` - toggle that allows to switch to the ALGO mainnet (NOT RECOMMENDED)

## Configuration items list

All the items available in the application are loaded from a JSON file [`items.json`](./src/data/items.json) placed inside `/src/data/` directory.
The main modification that will affect the application is the `price` as user will not be able to see the checkout form if he doesn't have enough ALGO in his wallet to pay for the selected item.

## LICENSE

[MIT](./LICENSE)

---

author: John Grimm
