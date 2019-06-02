import { render } from "react-dom";
import React from "react";
import App from "./components/App";
import store from "./store/StoreFactory";
import { Provider } from 'react-redux';
import "./styles.css"

render(
    <Provider store={store}>
        <App />
    </Provider>,document.getElementById("app"));