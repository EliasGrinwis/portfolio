import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
