import "dotenv/config";
import http from "http";
import app from "./src/app.js";

const server = http.createServer(app);

const port = process.env.PORT || 8001;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
