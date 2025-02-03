function PortalSidebar({ role, currentSection, onSectionChange }) {
    const adminMenuItems = [
        { icon: 'fas fa-tachometer-alt', text: 'Dashboard', path: '/admin/dashboard' },
        { icon: 'fas fa-users', text: 'Users', path: '/admin/users' },
        { icon: 'fas fa-book', text: 'Courses', path: '/admin/courses' },
        { icon: 'fas fa-cog', text: 'Settings', path: '/admin/settings' },
        { icon: 'fas fa-user', text: 'Profile', path: '/admin/profile' }
    ];

    const teacherMenuItems = [
        { icon: 'fas fa-home', text: 'Dashboard', path: '/teacher/dashboard' },
        { icon: 'fas fa-users', text: 'Students', path: '/teacher/students' },
        { icon: 'fas fa-tasks', text: 'Assignments', path: '/teacher/assignments' },
        { icon: 'fas fa-calendar-check', text: 'Attendance', path: '/teacher/attendance' },
        { icon: 'fas fa-chart-bar', text: 'Grades', path: '/teacher/grades' },
        { icon: 'fas fa-user', text: 'Profile', path: '/teacher/profile' }
    ];

    const studentMenuItems = [
        { icon: 'fas fa-home', text: 'Dashboard', path: '/student/dashboard' },
        { icon: 'fas fa-book', text: 'Courses', path: '/student/courses' },
        { icon: 'fas fa-chart-line', text: 'Grades', path: '/student/grades' },
        { icon: 'fas fa-calendar-check', text: 'Attendance', path: '/student/attendance' },
        { icon: 'fas fa-dollar-sign', text: 'Payments', path: '/student/payments' },
        { icon: 'fas fa-user', text: 'Profile', path: '/student/profile' }
    ];

    const getMenuItems = () => {
        switch (role) {
            case 'admin':
                return adminMenuItems;
            case 'teacher':
                return teacherMenuItems;
            case 'student':
                return studentMenuItems;
            default:
                return [];
        }
    };

    const handleLogout = () => {
        if (confirm('Are you sure you want to logout?')) {
            logout();
        }
    };

    const handleNavigation = (e, path) => {
        e.preventDefault();
        const section = path.split('/')[2] || 'dashboard';
        onSectionChange(section);
        window.history.pushState({}, '', path);
    };

    const menuItems = getMenuItems();

    return (
        <div className="portal-sidebar" data-name="portal-sidebar">
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">SchoolMS</h1>
                <p className="text-gray-400">
                    {role.charAt(0).toUpperCase() + role.slice(1)} Portal
                </p>
            </div>

            <nav className="space-y-2">
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.path}
                        onClick={(e) => handleNavigation(e, item.path)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded hover:bg-gray-700 ${
                            currentSection === item.text.toLowerCase() ? 'bg-gray-700' : ''
                        }`}
                        data-name={`sidebar-${item.text.toLowerCase()}`}
                    >
                        <i className={item.icon}></i>
                        <span>{item.text}</span>
                    </a>
                ))}
            </nav>

            <div className="absolute bottom-0 left-0 w-full p-4">
                <button
                    onClick={handleLogout}
                    className="flex items-center space-x-3 px-4 py-3 w-full rounded hover:bg-gray-700 text-red-400"
                    data-name="logout-button"
                >
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
}
