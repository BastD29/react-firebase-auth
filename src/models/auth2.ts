import { UserType } from "./user";

type AuthType = {
  user: UserType | undefined;
  loading: boolean;
};

export type { AuthType };
