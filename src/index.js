import ReactDom from "react-dom";

import App from "./Components/App";

const root = document.querySelector(".root");
const app = App();

ReactDom.render(app, root);