function Sidebar() {
    const menuItems = [
        { icon: 'fas fa-tachometer-alt', text: 'Dashboard', path: '/' },
        { icon: 'fas fa-user-graduate', text: 'Students', path: '/students' },
        { icon: 'fas fa-book', text: 'Exams', path: '/exams' },
        { icon: 'fas fa-chart-bar', text: 'Results', path: '/results' }
    ];

    return (
        <div className="sidebar" data-name="sidebar">
            <div className="p-4">
                <h1 className="text-xl font-bold mb-8">School Management</h1>
                <nav>
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.path}
                            className="flex items-center p-2 hover:bg-gray-700 rounded"
                            data-name={`sidebar-link-${item.text.toLowerCase()}`}
                        >
                            <i className={`${item.icon} w-6`}></i>
                            <span>{item.text}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}
