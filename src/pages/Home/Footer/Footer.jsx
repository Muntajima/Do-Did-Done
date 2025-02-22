import React from 'react';
import logo from '../../../assets/tasklogo.png'
const Footer = () => {
    return (
        <div>


            <footer className="bg-zinc-800 dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a className="flex items-center pl-4">
                                <img src={logo} className="h-8 me-3" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Do-Did-Done</span>
                            </a>
                            <div className="sm:flex sm:items-center sm:justify-between mt-8 ml-4">
                        
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <p className="pl-24 lg:pl-2 text-gray-300">{new Date().getFullYear()} - ©All right reserved by Muntajima Mahbub</p>
                            
                        </div>
                    </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase text-white">Resources</h2>
                                <ul className="text-gray-500 dark:text-gray-300 font-medium">
                                    <li className="mb-4">
                                        <a href="https://flowbite.com/" className="hover:underline">Drag N Drop</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindcss.com/" className="hover:underline">FireBase</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">Follow us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                        <a href="https://github.com/programming-hero-web-course2/b10a11-client-side-Muntajima" className="hover:underline ">GitHub</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://www.linkedin.com/in/muntajima-mahbub/" className="hover:underline ">LinkedIn</a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">FaceBook</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </footer>
        </div>
    );
};

export default Footer;