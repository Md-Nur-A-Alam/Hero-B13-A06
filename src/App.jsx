
import './App.css'
import CountsSection from './Components/CountsSection/CountsSection';
import HeroSection from './Components/HeroSection/HeroSection';
import NavBar from './Components/NavBar/NavBar';
import Pricing from './Components/Pricing/Pricing';
import ToastAleart from './Components/ToastAleart/ToastAleart';

const pricingPlans = () =>{
  return fetch(pricingPlans.json).then(res => res.json());
}

function App() {
  return (
    <>
      <header>

        <NavBar></NavBar>

        <HeroSection></HeroSection>

        <CountsSection></CountsSection>



        <Pricing pricingPlans={pricingPlans}></Pricing>

      </header>

      <main>

      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
