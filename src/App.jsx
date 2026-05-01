import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main";
import NavBar from "./components/templates/NavBar";
import PageLoader from "./components/atoms/PageLoader";
import usePageImagesLoaded from "./hooks/usePageImagesLoaded";

function App() {
  const isLoaded = usePageImagesLoaded();

  return (
    <div className=" h-full min-h-screen bg-light-background dark:bg-dark-background">
      {!isLoaded && <PageLoader />}
      <NavBar />
      <Routes>
        <Route path="/" element={<Main /> } />
      </Routes>
    </div>
  );
}

export default App;
