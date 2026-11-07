import Hero from './components/home/Hero';
import Players from './components/home/Players';
import Navber from './components/shared/Navber';
import { useState } from 'react';

function App() {
     const [coin, setCoin] = useState(5000);
     return (
          <main>
               <Navber coin={coin} />
               <Hero />
               <Players coin={coin} setCoin={setCoin} />
          </main>
     );
}

export default App;
