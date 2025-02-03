function TeacherDashboard() {
    const stats = [
        { label: 'Total Students', value: '120' },
        { label: 'Classes', value: '4' },
        { label: 'Average Performance', value: '85%' },
        { label: 'Pending Grades', value: '15' }
    ];

    return (
        <div data-name="teacher-dashboard">
            <div className="portal-stats">
                {stats.map((stat, index) => (
                    <div key={index} className="portal-card text-center" data-name={`stat-${index}`}>
                        <h3 className="text-xl font-bold mb-2">{stat.value}</h3>
                        <p className="text-gray-500">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="portal-card" data-name="class-schedule">
                <h3 className="text-lg font-semibold mb-4">Today's Schedule</h3>
                <table className="portal-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Class</th>
                            <th>Room</th>
                            <th>Students</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>09:00 AM</td>
                            <td>Physics - Grade 11</td>
                            <td>Room 301</td>
                            <td>32 students</td>
                        </tr>
                        <tr>
                            <td>11:00 AM</td>
                            <td>Physics - Grade 10</td>
                            <td>Room 302</td>
                            <td>28 students</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="portal-card" data-name="pending-tasks">
                <h3 className="text-lg font-semibold mb-4">Pending Tasks</h3>
                <table className="portal-table">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Class</th>
                            <th>Due Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Grade Mid-term Papers</td>
                            <td>Grade 11 Physics</td>
                            <td>Mar 15, 2024</td>
                            <td>
                                <span className="portal-badge badge-warning">Pending</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Submit Monthly Report</td>
                            <td>All Classes</td>
                            <td>Mar 20, 2024</td>
                            <td>
                                <span className="portal-badge badge-danger">Overdue</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
