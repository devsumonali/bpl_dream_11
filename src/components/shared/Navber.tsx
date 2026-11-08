import logo from '/images/logo.png';

const Navber = ({ coin }: { coin: number }) => {
     return (
          <header className="w-full bg-white">
               <nav
                    aria-label="Main navigation"
                    className="mx-auto flex h-25 w-full  max-w-330 items-center justify-between  "
               >
                    <a href="#home" aria-label="BPL home" className="shrink-0">
                         <img
                              src={logo}
                              alt="Bangladesh Premier League"
                              className="h-13 w-auto object-contain"
                         />
                    </a>

                    <div className="flex items-center gap-5 text-base font-medium text-[#4b4b4b] sm:gap-8 md:gap-10">
                         <a className="transition-colors hover:text-[#e9522a]" href="#home">
                              Home
                         </a>
                         <a className="transition-colors hover:text-[#e9522a]" href="#fixture">
                              Fixture
                         </a>
                         <a
                              className="hidden transition-colors hover:text-[#e9522a] sm:block"
                              href="#teams"
                         >
                              Teams
                         </a>
                         <a
                              className="hidden transition-colors hover:text-[#e9522a] md:block"
                              href="#schedules"
                         >
                              Schedules
                         </a>
                         <p className="inline-flex h-10 items-center gap-1.5 rounded-[9px] border border-[#e9e9e9] px-3 text-base font-semibold text-[#252525] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors hover:border-[#f1bf31]">
                              {coin} Coin <span aria-hidden="true">🪙</span>
                         </p>
                    </div>
               </nav>
          </header>
     );
};

export default Navber;
