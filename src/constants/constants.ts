import * as dotenv from "dotenv";
dotenv.config();

export const urls = {
  appBaseUrl: process.env.TEST_URL,
  inventoryPageUrl: `${process.env.TEST_URL}/inventory.html`,
};

export const numberOfCount = 10;
export const LONG_TIMEOUT = 20000;

export const user = {
  username: "standard_user",
  password: "secret_sauce"
};

