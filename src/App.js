import "./App.css";
import ContanerAboutMe from "./components/ContainerAboutMe/ContanerAboutMe";
import ContainerSkills from "./components/ContainerSkills/ContainerSkills";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Header />
      <Hero />
      <ContanerAboutMe />
      <ContainerSkills />
    </div>
  );
}

export default App;
