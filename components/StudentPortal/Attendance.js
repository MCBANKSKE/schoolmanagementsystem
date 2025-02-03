function StudentAttendance() {
    const [attendanceData, setAttendanceData] = React.useState([
        {
            id: 1,
            date: '2024-03-01',
            subject: 'Physics',
            status: 'present',
            teacher: 'Mr. Johnson'
        },
        {
            id: 2,
            date: '2024-03-02',
            subject: 'Chemistry',
            status: 'absent',
            teacher: 'Mrs. Smith'
        },
        {
            id: 3,
            date: '2024-03-03',
            subject: 'Mathematics',
            status: 'present',
            teacher: 'Ms. Davis'
        }
    ]);

    const attendanceStats = {
        total: attendanceData.length,
        present: attendanceData.filter(a => a.status === 'present').length,
        absent: attendanceData.filter(a => a.status === 'absent').length,
        percentage: Math.round((attendanceData.filter(a => a.status === 'present').length / attendanceData.length) * 100)
    };

    return (
        <div className="space-y-6" data-name="student-attendance">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="portal-card text-center">
                    <h3 className="text-lg font-semibold mb-2">Total Classes</h3>
                    <p className="text-3xl font-bold">{attendanceStats.total}</p>
                </div>
                <div className="portal-card text-center">
                    <h3 className="text-lg font-semibold mb-2">Present</h3>
                    <p className="text-3xl font-bold text-green-600">{attendanceStats.present}</p>
                </div>
                <div className="portal-card text-center">
                    <h3 className="text-lg font-semibold mb-2">Absent</h3>
                    <p className="text-3xl font-bold text-red-600">{attendanceStats.absent}</p>
                </div>
                <div className="portal-card text-center">
                    <h3 className="text-lg font-semibold mb-2">Attendance Rate</h3>
                    <p className="text-3xl font-bold text-blue-600">{attendanceStats.percentage}%</p>
                </div>
            </div>

            <div className="portal-card">
                <h3 className="text-xl font-semibold mb-4">Attendance History</h3>
                <table className="portal-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Subject</th>
                            <th>Status</th>
                            <th>Teacher</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceData.map(record => (
                            <tr key={record.id} data-name={`attendance-row-${record.id}`}>
                                <td>{new Date(record.date).toLocaleDateString()}</td>
                                <td>{record.subject}</td>
                                <td>
                                    <span className={`portal-badge ${
                                        record.status === 'present' ? 'badge-success' : 'badge-danger'
                                    }`}>
                                        {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                                    </span>
                                </td>
                                <td>{record.teacher}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
