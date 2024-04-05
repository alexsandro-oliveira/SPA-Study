import { toggleSelected } from "./navSelect.js";
import { Router } from "./router.js";

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/explorer", "/pages/explorer.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.hanle();
window.route = () => router.route();

const activeMenu = document.querySelector("#menu");
activeMenu.addEventListener("click", toggleSelected);
