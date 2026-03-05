import express from "express";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";

const app = express();
const PORT = 3500;

app.use(express.json());

app.use("/auth", authRouter);
app.use("/users", userRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    console.log("Произошла ошибка при запуске сервера");
    return;
  }

  console.log("Сервер успешно запущен");
});
