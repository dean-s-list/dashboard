import type {
  CategoryEnum,
  PaymentTypeEnum,
  PackagesEnum,
  TransactionEnum,
} from "@/constants";

import type { Database } from "./supabase";
import type { PublicKey, Transaction, SendOptions } from "@solana/web3.js";

export type DeliverableItem = {
  id: number;
  value: number;
  name: string;
  due_date: string;
  category: CategoryEnum;
};

export type TeamMemberItem = {
  id: number;
  avatar: string;
  name: string;
  roles: string;
};

export type PaymentsItem = {
  id: number;
  type: PaymentTypeEnum;
  packageType: PackagesEnum;
  transaction: TransactionEnum;
  description: string;
  amount: number;
  date: string;
  time: string;
};

export type CurrentUser = {
  account_enum: number;
  avatar_url: string;
  full_name: string;
  id: string;
  updated_at?: string | null;
  username?: string | null;
  wallets?: string | null;
  discord_id?: string | null;
  twitter_id?: string | null;
  github_id?: string | null;
};

export type Profiles = Database["public"]["Tables"]["profiles"]["Row"];
export type Feedbacks = Database["public"]["Tables"]["feedbacks"]["Row"];
export type Deliverables = Database["public"]["Tables"]["deliverables"]["Row"];
export type Projects = Database["public"]["Tables"]["projects"]["Row"];
export type Links = Database["public"]["Tables"]["links"]["Row"];
export type Documents = Database["public"]["Tables"]["documents"]["Row"];
export type Admin = Database["public"]["Tables"]["admins"]["Row"];
export type Comments = Database["public"]["Tables"]["comments"]["Row"];
export type Stars = Database["public"]["Tables"]["stars"]["Row"];
export type Team =
  Database["public"]["Functions"]["get_profiles_with_feedback"]["Returns"];

type DisplayEncoding = "utf8" | "hex";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

type PhantomEvent = "connect" | "disconnect" | "accountChanged";

type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signAndSendTransaction"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";

export interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signAndSendTransaction: (
    transaction: Transaction,
    opts?: SendOptions
  ) => Promise<{ signature: string; publicKey: PublicKey }>;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}
