import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Results from './components/Results';
import Method from './components/Method';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Results />
        <Method />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
