function TeacherStudents() {
    const [students, setStudents] = React.useState([
        {
            id: 1,
            name: 'John Doe',
            class: 'Grade 11',
            email: 'john.doe@school.com',
            performance: 'Excellent',
            attendance: '95%'
        },
        {
            id: 2,
            name: 'Jane Smith',
            class: 'Grade 10',
            email: 'jane.smith@school.com',
            performance: 'Good',
            attendance: '88%'
        }
    ]);

    const [selectedClass, setSelectedClass] = React.useState('');
    const [searchTerm, setSearchTerm] = React.useState('');

    const filteredStudents = students.filter(student => {
        const matchesClass = selectedClass ? student.class === selectedClass : true;
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            student.email.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesClass && matchesSearch;
    });

    return (
        <div data-name="teacher-students">
            <div className="flex space-x-4 mb-6">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Search students..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="form-input"
                        data-name="search-input"
                    />
                </div>
                <div className="flex-1">
                    <select
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="form-input"
                        data-name="class-filter"
                    >
                        <option value="">All Classes</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11</option>
                    </select>
                </div>
            </div>

            <div className="portal-card">
                <table className="portal-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Email</th>
                            <th>Performance</th>
                            <th>Attendance</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map(student => (
                            <tr key={student.id} data-name={`student-row-${student.id}`}>
                                <td>{student.name}</td>
                                <td>{student.class}</td>
                                <td>{student.email}</td>
                                <td>
                                    <span className={`portal-badge ${
                                        student.performance === 'Excellent' ? 'badge-success' :
                                        student.performance === 'Good' ? 'badge-warning' :
                                        'badge-danger'
                                    }`}>
                                        {student.performance}
                                    </span>
                                </td>
                                <td>{student.attendance}</td>
                                <td>
                                    <button
                                        className="text-blue-600 hover:text-blue-800 mr-2"
                                        data-name={`view-student-${student.id}`}
                                    >
                                        <i className="fas fa-eye"></i>
                                    </button>
                                    <button
                                        className="text-green-600 hover:text-green-800"
                                        data-name={`message-student-${student.id}`}
                                    >
                                        <i className="fas fa-envelope"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
