import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import SendCoin from "./components/SendCoin";
import MainPage from "./MainPage";
import CoinBalance from "./components/CoinBalance";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/home" Component={MainPage} />
          <Route path="coin/send" Component={SendCoin} />
          <Route path="coin/balance" Component={CoinBalance} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
