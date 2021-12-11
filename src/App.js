import logo from "./logo.svg";
import "./App.css";
import Navagation from "./Components/Home/Navagation/Navagation";
import Hero from "./Components/Home/Hero/Hero";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Components/Testimonials/Testimonials";
import MyProject from "./Components/MyProject/MyProject/MyProject";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <About></About>
      <MyProject />
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default App;
