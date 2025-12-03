import Navigo from "navigo";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Library from "../pages/Library";
import ChannelDetail from "../pages/ChannelDetail";
import {clickToPlayMusic} from "../pages/Home";

const router = new Navigo("/", {
  hash: false,
  linksSelector: "a",
});

const initRouter = async () => {
  const page = document.querySelector("#js-body");
  router
    .on("/", async () => {
      page.innerHTML = await Home();
      await clickToPlayMusic()
    })
    .on("/explore", () => {
      page.innerHTML = Explore();
    })
    .on("/library", () => {
      page.innerHTML = Library();
    })
    .on("/channel/:slug", async () => {
      page.innerHTML = await ChannelDetail();
    })
    .resolve();
};

export default initRouter;
