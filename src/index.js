import ReactDOM from "react-dom";

import App from "./Components/App";

const container = document.querySelector(".root");
const app = App();
const root = ReactDOM.createRoot(container);

root.render(app);