import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainNavBar from './components/MainNavBar'
import Hero from './components/Hero'
import Section from './components/Section'

 function App() {
  return (
    <div>
      <Navbar />
      <MainNavBar />
      <Hero/>
      <Section/>
    </div>
  );
}

export default App;
