import express from "express";
import path from "path";
import IndexRoute from "./routes/Index";

const PUBLIC_PATH = path.join(__dirname, "../public/");
const PORT = 3737;

const app = express();

app.use(express.static(PUBLIC_PATH));

app.set("views", PUBLIC_PATH);
app.set("view engine", "ejs");

IndexRoute(app);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});