import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const endpoint = clusterApiUrl("devnet");
const connection = new Connection(endpoint, "confirmed");

const USDC_MINT = new PublicKey("Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr");
const TREASURY_MINT = new PublicKey(
  "AQiszckBeysWtwZ5YN9pMy1dDTs4jLMHxwui743ubGj2"
);

export { endpoint, connection, USDC_MINT, TREASURY_MINT };

export const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL as string || "https://rpc.ankr.com/solana";

export const COLLECTION_ADDRESS = (process.env.NEXT_PUBLIC_TOKEN_GATE_PUBKEY as string) || "5FusHaKEKjfKsmQwXNrhFcFABGGxu7iYCdbvyVSRe3Ri";

