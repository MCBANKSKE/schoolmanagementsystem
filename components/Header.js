function Header({ title }) {
    return (
        <header className="header" data-name="header">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold" data-name="header-title">{title}</h2>
                <div className="flex items-center space-x-4">
                    <button className="p-2" data-name="notifications-button">
                        <i className="fas fa-bell"></i>
                    </button>
                    <div className="flex items-center" data-name="user-profile">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User"
                            className="rounded-full w-8 h-8"
                        />
                        <span className="ml-2">Admin</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
