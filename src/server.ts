import express from "express";

const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, (err) => {
  if (err) {
    console.log("Произошла ошибка при запуске сервера");
    return;
  }

  console.log("Сервер успешно запущен");
});
