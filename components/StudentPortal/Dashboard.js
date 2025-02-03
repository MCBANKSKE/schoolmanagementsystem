function StudentDashboard() {
    const stats = [
        { label: 'Current GPA', value: '3.8' },
        { label: 'Courses', value: '6' },
        { label: 'Attendance', value: '95%' },
        { label: 'Assignments Due', value: '3' }
    ];

    return (
        <div data-name="student-dashboard">
            <div className="portal-stats">
                {stats.map((stat, index) => (
                    <div key={index} className="portal-card text-center" data-name={`stat-${index}`}>
                        <h3 className="text-xl font-bold mb-2">{stat.value}</h3>
                        <p className="text-gray-500">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="portal-card" data-name="upcoming-assignments">
                <h3 className="text-lg font-semibold mb-4">Upcoming Assignments</h3>
                <table className="portal-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Assignment</th>
                            <th>Due Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mathematics</td>
                            <td>Linear Algebra Assignment</td>
                            <td>Mar 15, 2024</td>
                            <td>
                                <span className="portal-badge badge-warning">Pending</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Physics</td>
                            <td>Laboratory Report</td>
                            <td>Mar 18, 2024</td>
                            <td>
                                <span className="portal-badge badge-success">Submitted</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="portal-card" data-name="recent-grades">
                <h3 className="text-lg font-semibold mb-4">Recent Grades</h3>
                <table className="portal-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Assessment</th>
                            <th>Grade</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chemistry</td>
                            <td>Mid-term Exam</td>
                            <td>92%</td>
                            <td>
                                <span className="portal-badge badge-success">Excellent</span>
                            </td>
                        </tr>
                        <tr>
                            <td>English</td>
                            <td>Essay Submission</td>
                            <td>88%</td>
                            <td>
                                <span className="portal-badge badge-success">Good</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
