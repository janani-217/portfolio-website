import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SignalDivider from "./components/SignalDivider";

function App() {
  return (
    <div className="min-h-screen bg-base text-ink">
      <Navbar />
      <main>
        <Hero />
        <SignalDivider />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <SignalDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
