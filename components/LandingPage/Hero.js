function Hero() {
    return (
        <div className="hero-section flex items-center justify-center" data-name="hero-section">
            <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4" data-name="hero-title">
                    Welcome to SchoolMS
                </h1>
                <p className="text-xl md:text-2xl mb-8" data-name="hero-subtitle">
                    A comprehensive school management system
                </p>
                <div className="space-x-4">
                    <a
                        href="/login"
                        className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700"
                        data-name="hero-login-button"
                    >
                        Get Started
                    </a>
                    <a
                        href="#features"
                        className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100"
                        data-name="hero-features-button"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
}
