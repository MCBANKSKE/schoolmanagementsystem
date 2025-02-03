function TeacherAttendance() {
    const [selectedClass, setSelectedClass] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().split('T')[0]);
    const [attendanceData, setAttendanceData] = React.useState([
        { id: 1, name: 'John Doe', status: 'present' },
        { id: 2, name: 'Jane Smith', status: 'absent' },
        { id: 3, name: 'Mike Johnson', status: 'late' }
    ]);

    const classes = [
        { id: 1, name: 'Grade 10 Physics' },
        { id: 2, name: 'Grade 11 Physics' },
        { id: 3, name: 'Grade 12 Physics' }
    ];

    const handleStatusChange = (studentId, newStatus) => {
        setAttendanceData(prevData =>
            prevData.map(student =>
                student.id === studentId ? { ...student, status: newStatus } : student
            )
        );
    };

    const handleSubmit = async () => {
        try {
            // Save attendance data
            alert('Attendance saved successfully');
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="space-y-6" data-name="teacher-attendance">
            <div className="flex space-x-4 mb-6">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
                    <select
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="form-input"
                        data-name="class-select"
                    >
                        <option value="">Select a class</option>
                        {classes.map(cls => (
                            <option key={cls.id} value={cls.id}>{cls.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="form-input"
                        data-name="date-input"
                    />
                </div>
            </div>

            <div className="portal-card">
                <table className="portal-table">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceData.map(student => (
                            <tr key={student.id} data-name={`student-row-${student.id}`}>
                                <td>{student.name}</td>
                                <td>
                                    <span className={`portal-badge ${
                                        student.status === 'present' ? 'badge-success' :
                                        student.status === 'absent' ? 'badge-danger' :
                                        'badge-warning'
                                    }`}>
                                        {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                                    </span>
                                </td>
                                <td>
                                    <select
                                        value={student.status}
                                        onChange={(e) => handleStatusChange(student.id, e.target.value)}
                                        className="form-input"
                                        data-name={`status-select-${student.id}`}
                                    >
                                        <option value="present">Present</option>
                                        <option value="absent">Absent</option>
                                        <option value="late">Late</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-end">
                <button
                    onClick={handleSubmit}
                    className="btn-primary"
                    data-name="save-attendance-button"
                >
                    Save Attendance
                </button>
            </div>
        </div>
    );
}
