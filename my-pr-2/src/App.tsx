import About from "./about";
import Featured from "./feature";
import Hero from "./hero";
import Navbar from "./navbar";
import CompanyStats from "./Floating";
import HowItWorks from "./Works";
import Explore from "./explore";
import Footer from "./Footer";

function App() {
  return <>
    <Navbar />
    <Hero />
    <About />
    <Featured />
    <CompanyStats />
    <HowItWorks />
    <Explore />
    <Footer />
  </>
}

export default App;