const Newsletter = () => {
     return (
          <div className="relative z-10  px-4 mt-10">
               <div className=" w-full max-w-330 mx-auto bg-linear-to-r from-blue-100 via-white to-amber-100 border border-white/80 rounded-2xl p-8 sm:p-12 shadow-xl text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                         Subscribe to our Newsletter
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 mb-6">
                         Get the latest updates and news right in your inbox!
                    </p>

                    <form
                         onSubmit={(e) => e.preventDefault()}
                         className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto"
                    >
                         <input
                              type="email"
                              placeholder="Enter your email"
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                              required
                         />
                         <button
                              type="submit"
                              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-gray-900 bg-linear-to-r from-amber-200 via-amber-300 to-amber-400 hover:opacity-95 transition-opacity shadow-md text-sm whitespace-nowrap cursor-pointer"
                         >
                              Subscribe
                         </button>
                    </form>
               </div>
          </div>
     );
};

export default Newsletter;
