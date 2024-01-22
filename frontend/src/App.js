// import logo from './logo.svg';
import "./App.css";
import { Chat } from "./Pages/Chat";
import { Route, Routes } from "react-router-dom";
import { RegistrationPage } from "./Pages/Registration";
import HomePage from "./Pages/HomePage";
import { ProfilePage } from "./Pages/ProfilePage";
import { WelcomePage } from "./Pages/WelcomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/RegistrationPage" Component={RegistrationPage}></Route>
        <Route path="/HomePage" Component={HomePage}></Route>
        <Route path="/chats" Component={Chat} />
        <Route path="/" Component={WelcomePage} />
        {/* <Route path= "/" Component={ProfilePage}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
