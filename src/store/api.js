import { create } from "apisauce";

const api = create({
  baseURL: "http://localhost:8080/prft-bank/index.php",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-cache",
    // Pragma: "no-cache",
    // Expires: "0",
  },
});

export { api };