import "./style.css";

import app from "./app";
import initRouter from "./route/router";
import { catchEvent, handleAudio } from "./components/Footer";



// mọi người khai báo async func để xử lý bất đồng bộ

const render = async () => {
  document.querySelector("#app").innerHTML = await app();
};

await render();

await initRouter();

await catchEvent();

await handleAudio();

