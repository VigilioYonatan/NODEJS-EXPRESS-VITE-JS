import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { client } from "@vigilio/express-core/client";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static(path.resolve(__dirname, "..", "public")));
// ejs - template engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "..", "resources", "views"));
// middleware to use vite js
app.use(client({ file: "js/index.js" }));

app.get("/", (_req, res) => {
    return res.render("index");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Run server in port PORT: ${PORT}`);
});
