function PortalHeader({ title, user }) {
    return (
        <header className="portal-header flex justify-between items-center" data-name="portal-header">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-900" data-name="notifications-button">
                    <i className="fas fa-bell"></i>
                </button>
                <div className="flex items-center space-x-3" data-name="user-info">
                    <img
                        src="https://via.placeholder.com/40"
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.role}</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
