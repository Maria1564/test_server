import express from "express";
import authRouter from "./routes/auth.route";

const app = express();
const PORT = 3500;

app.use(express.json());

app.use("/auth", authRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    console.log("Произошла ошибка при запуске сервера");
    return;
  }

  console.log("Сервер успешно запущен");
});
