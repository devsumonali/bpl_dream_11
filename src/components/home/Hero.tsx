import bannerMain from '/images/banner-main.png';
import backgroundGlow from '/images/bg-shadow.png';

const Hero = () => {
     return (
          <section id="home" className="bg-white px-5 pb-12 pt-3 sm:px-8 lg:px-12">
               <div
                    className="relative mx-auto flex min-h-85 max-w-330 items-center justify-center overflow-hidden rounded-[22px] bg-[#121212] px-5 py-12 text-center sm:min-h-105 lg:min-h-136.25"
                    style={{
                         backgroundImage: `url(${backgroundGlow})`,
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: 'cover',
                    }}
               >
                    <div className="relative z-10 flex max-w-4xl flex-col items-center">
                         <img
                              src={bannerMain}
                              alt="Cricket equipment"
                              className="mb-3 w-28 sm:mb-4 sm:w-36 lg:w-42"
                         />
                         <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[36px]">
                              Assemble Your Ultimate Dream 11 Cricket Team
                         </h1>
                         <p className="mt-3 text-base font-medium text-[#b7b7b7] sm:text-lg">
                              Beyond Boundaries Beyond Limits
                         </p>
                         <button
                              type="button"
                              className="mt-5 rounded-xl border-2 border-[#d8ff00] bg-[#b7dc00] px-5 py-2.5 text-base font-bold text-[#121212] shadow-[0_0_0_3px_#242424,0_0_0_5px_#d8ff00] transition-transform hover:scale-105"
                         >
                              Claim Free Credit
                         </button>
                    </div>
               </div>
          </section>
     );
};

export default Hero;
