// type UserType = {
//   firstname: string;
//   lastname: string;
//   email: string;
//   password: string;
// };

// export type { UserType };

import { User as FirebaseUser } from "firebase/auth";

type UserType = FirebaseUser;

export type { UserType };
