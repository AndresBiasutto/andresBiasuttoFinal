import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main";
import NavBar from "./components/templates/NavBar";

function App() {


  return (
    <div className=" h-full min-h-screen bg-light-background dark:bg-dark-background">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main /> } />
      </Routes>
    </div>
  );
}

export default App;
