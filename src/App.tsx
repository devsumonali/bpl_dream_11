import Hero from './components/home/Hero';
import Newsletter from './components/home/NewsLetter';
import Players from './components/home/Players';
import Footer from './components/shared/Footer';
import Navber from './components/shared/Navber';
import { useState } from 'react';

function App() {
     const [coin, setCoin] = useState(5000);
     return (
          <main>
               <Navber coin={coin} />
               <Hero />
               <Players coin={coin} setCoin={setCoin} />
               <Newsletter />
               <Footer />
          </main>
     );
}

export default App;
