import { EnvType } from "./types/envType";

const env: EnvType = {
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || "",
};
export default env;
