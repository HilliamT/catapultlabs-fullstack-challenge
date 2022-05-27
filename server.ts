import express from "express";
import apiRouter from "./api";
import cors from "cors";

const app = express();

app.set("port", process.env.PORT || 3001);

// API Routes
app.use(cors());
app.use("/api", apiRouter);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
