function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className="navbar fixed w-full top-0 z-50" data-name="landing-navbar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" className="text-xl font-bold" data-name="logo">
                            SchoolMS
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#features" className="text-gray-700 hover:text-gray-900" data-name="features-link">
                            Features
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-gray-900" data-name="contact-link">
                            Contact
                        </a>
                        <a 
                            href="/login"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                            data-name="login-button"
                        >
                            Login
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700"
                            data-name="mobile-menu-button"
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden" data-name="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a
                                href="#features"
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                                data-name="mobile-features-link"
                            >
                                Features
                            </a>
                            <a
                                href="#contact"
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                                data-name="mobile-contact-link"
                            >
                                Contact
                            </a>
                            <a
                                href="/login"
                                className="block px-3 py-2 bg-indigo-600 text-white rounded-md"
                                data-name="mobile-login-button"
                            >
                                Login
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
