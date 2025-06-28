import { useEffect, useState } from 'react';

import AboutUs from './aboutUs';
import Advantages from './advantages';
import BestSellers from './bestSellers';
import Contacts from './contacts';
import Instagram from './instagram';
import Intro from './intro';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 650);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <>
      <Intro />
      <Advantages />
      <Instagram />
      {!isMobile && <BestSellers />}
      <AboutUs />
      <Contacts />
    </>
  );
};

export default Home;
