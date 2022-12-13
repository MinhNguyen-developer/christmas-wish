import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wishes from "./components/Wishes/Wishes";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import SoundPlayer from "./components/SoundPlayer/SoundPlayer";
import Header from "./components/Header/Header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <ToastContainer position="top-right" autoClose={2000} />
        <SoundPlayer>
          <Header />
          <Routes>
            <Route element={<App />} path={"/"} />
            <Route element={<Wishes />} path={"/wishes"} />
          </Routes>
        </SoundPlayer>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
