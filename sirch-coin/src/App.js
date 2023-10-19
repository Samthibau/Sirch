import { BrowserRouter } from "react-router-dom";
import NavBar from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}
