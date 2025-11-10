import algosdk from "algosdk";

export const getAlgorandClient = () => {
  const server = process.env.ALGOD_SERVER || "";
  const port = process.env.ALGOD_PORT || "";
  const token = process.env.ALGOD_TOKEN || "";
  
  return new algosdk.Algodv2(token, server, port);
};
