function AdminDashboard() {
    const [stats, setStats] = React.useState({
        totalStudents: 0,
        totalTeachers: 0,
        totalCourses: 0,
        totalPayments: 0
    });

    React.useEffect(() => {
        loadStats();
    }, []);

    const loadStats = () => {
        const users = listUsers();
        setStats({
            totalStudents: users.filter(u => u.role === 'student').length,
            totalTeachers: users.filter(u => u.role === 'teacher').length,
            totalCourses: 10, // Example data
            totalPayments: 25 // Example data
        });
    };

    return (
        <div data-name="admin-dashboard">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="portal-card text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                        <i className="fas fa-user-graduate"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Total Students</h3>
                    <p className="text-3xl">{stats.totalStudents}</p>
                </div>
                <div className="portal-card text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                        <i className="fas fa-chalkboard-teacher"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Total Teachers</h3>
                    <p className="text-3xl">{stats.totalTeachers}</p>
                </div>
                <div className="portal-card text-center">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">
                        <i className="fas fa-book"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Total Courses</h3>
                    <p className="text-3xl">{stats.totalCourses}</p>
                </div>
                <div className="portal-card text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">
                        <i className="fas fa-dollar-sign"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Total Payments</h3>
                    <p className="text-3xl">{stats.totalPayments}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="portal-card">
                    <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <i className="fas fa-user-plus text-blue-600"></i>
                            </div>
                            <div>
                                <p className="font-medium">New Student Registration</p>
                                <p className="text-sm text-gray-500">2 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-green-100 p-3 rounded-full">
                                <i className="fas fa-dollar-sign text-green-600"></i>
                            </div>
                            <div>
                                <p className="font-medium">Payment Received</p>
                                <p className="text-sm text-gray-500">5 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-yellow-100 p-3 rounded-full">
                                <i className="fas fa-book text-yellow-600"></i>
                            </div>
                            <div>
                                <p className="font-medium">New Course Added</p>
                                <p className="text-sm text-gray-500">1 day ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portal-card">
                    <h3 className="text-xl font-semibold mb-4">System Overview</h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>Storage Used</span>
                                <span>75%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>CPU Usage</span>
                                <span>45%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>Memory Usage</span>
                                <span>60%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
