// import logo from './logo.svg';
import "./App.css";
import { Chat } from "./Pages/Chat";
import { Route, Routes } from "react-router-dom";
import { RegistrationPage } from "./Pages/Registration";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={RegistrationPage}></Route>
        <Route path="/HomePage" Component={HomePage}></Route>
        <Route path="/chats" Component={Chat} />
      </Routes>
    </div>
  );
}

export default App;
