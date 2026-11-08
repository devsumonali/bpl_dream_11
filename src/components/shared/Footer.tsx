const Footer = () => {
     return (
          <footer className="bg-[#0b0f19] text-gray-300 pt-24 pb-8 relative">
               {/* Center Logo */}
               <div className="flex flex-col items-center mb-16">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2">
                         {/* এখানে আপনার লোগো ইমেজ বা আইকন দিতে পারেন */}
                         <img
                              src="/images/logo-footer.png"
                              alt="Cricket Logo"
                              className="w-16 h-16 object-contain"
                              onError={(e) => {
                                   e.currentTarget.style.display = 'none';
                              }}
                         />
                    </div>
                    <span className="text-white font-bold tracking-widest text-lg">CRICKET</span>
               </div>

               {/* Footer Main Content */}
               <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 border-b border-gray-800 pb-12">
                    {/* About Us */}
                    <div>
                         <h4 className="text-white font-semibold text-base mb-4">About Us</h4>
                         <p className="text-sm text-gray-400 leading-relaxed">
                              We are a passionate team dedicated to providing the best services to
                              our customers.
                         </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                         <h4 className="text-white font-semibold text-base mb-4">Quick Links</h4>
                         <ul className="space-y-2 text-sm text-gray-400">
                              <li>
                                   <a
                                        href="#home"
                                        className="hover:text-white transition-colors flex items-center gap-2"
                                   >
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>{' '}
                                        Home
                                   </a>
                              </li>
                              <li>
                                   <a
                                        href="#services"
                                        className="hover:text-white transition-colors flex items-center gap-2"
                                   >
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>{' '}
                                        Services
                                   </a>
                              </li>
                              <li>
                                   <a
                                        href="#about"
                                        className="hover:text-white transition-colors flex items-center gap-2"
                                   >
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>{' '}
                                        About
                                   </a>
                              </li>
                              <li>
                                   <a
                                        href="#contact"
                                        className="hover:text-white transition-colors flex items-center gap-2"
                                   >
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>{' '}
                                        Contact
                                   </a>
                              </li>
                         </ul>
                    </div>

                    {/* Subscribe Column */}
                    <div>
                         <h4 className="text-white font-semibold text-base mb-4">Subscribe</h4>
                         <p className="text-sm text-gray-400 mb-4">
                              Subscribe to our newsletter for the latest updates.
                         </p>
                         <form
                              onSubmit={(e) => e.preventDefault()}
                              className="flex items-center gap-2"
                         >
                              <input
                                   type="email"
                                   placeholder="Enter your email"
                                   className="bg-white px-3.5 py-2.5 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none w-full"
                              />
                              <button
                                   type="submit"
                                   className="bg-linear-to-r from-amber-200 via-amber-300 to-amber-400 text-gray-900 font-medium px-4 py-2.5 rounded-lg text-sm whitespace-nowrap hover:opacity-95 transition-opacity cursor-pointer"
                              >
                                   Subscribe
                              </button>
                         </form>
                    </div>
               </div>

               {/* Copyright Text */}
               <div className="text-center text-xs text-gray-500">
                    <p>@2024 Your Company All Rights Reserved.</p>
               </div>
          </footer>
     );
};

export default Footer;
