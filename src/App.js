import "./App.css";
import ContanerAboutMe from "./components/ContainerAboutMe/ContanerAboutMe";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <NavBar />
      <Hero />
      <ContanerAboutMe />
    </div>
  );
}

export default App;
