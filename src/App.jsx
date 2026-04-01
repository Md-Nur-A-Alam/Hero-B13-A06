
import { Suspense, useState } from 'react';
import './App.css'
import CountsSection from './Components/CountsSection/CountsSection';
import DigitalTools from './Components/DigitalTools/DigitalTools';
import HeroSection from './Components/HeroSection/HeroSection';
import NavBar from './Components/NavBar/NavBar';
import Pricing from './Components/Pricing/Pricing';
import ToastAleart from './Components/UI/ToastAleart/ToastAleart';
import StepsSection from './Components/StepsSection/StepsSection';
import Footer from './Components/UI/Footer/Footer';

const fetchPricingPlans = fetch('./pricingPlans.json').then(res => res.json());
const fetchDigitalProducts = fetch('./digitalProducts.json').then(res => res.json());


function App() {

  const [add2Cart, setAdd2Cart] = useState([]);
  // console.log(add2Cart.length);
  return (
    <>
      <header>

        <NavBar add2Cart={add2Cart.length}></NavBar>

        <HeroSection></HeroSection>

        <CountsSection></CountsSection>


        <Suspense fallback={<div className='w-fit mx-auto'><span className="loading loading-spinner text-warning w-15"></span></div>}>

          <DigitalTools fetchDigitalProducts={fetchDigitalProducts} add2Cart={add2Cart} setAdd2Cart={setAdd2Cart}></DigitalTools>

        </Suspense>


        <StepsSection></StepsSection>


        <Suspense fallback={<div className='w-fit mx-auto'><span className="loading loading-spinner text-warning w-15"></span></div>}>

          <Pricing fetchPricingPlans={fetchPricingPlans}></Pricing>

        </Suspense>

      </header>

      <main>

      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
