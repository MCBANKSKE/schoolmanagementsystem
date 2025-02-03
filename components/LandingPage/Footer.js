function Footer() {
    return (
        <footer className="footer py-12" data-name="footer">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">SchoolMS</h3>
                        <p className="text-gray-400">
                            Making school management easier and more efficient.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                            <li><a href="/login" className="text-gray-400 hover:text-white">Login</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><i className="fas fa-envelope mr-2"></i> contact@schoolms.com</li>
                            <li><i className="fas fa-phone mr-2"></i> +1 234 567 890</li>
                            <li><i className="fas fa-map-marker-alt mr-2"></i> 123 School Street, City</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 SchoolMS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
