import { Route, Routes } from "react-router-dom";
import Coins from "./components/Coins";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CoinDetails from "./components/CoinDetails";
import Error from "./components/Error";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/coins" element={<Coins />} />
        <Route exact path='/coins/:id' element={<CoinDetails />} />
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
