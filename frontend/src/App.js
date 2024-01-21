// import logo from './logo.svg';
import "./App.css";
import { Chat } from "./components/Chat";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/chats" Component={Chat} />
      </Routes>
    </div>
  );
}

export default App;
