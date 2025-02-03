function StudentList({ students, onEdit, onDelete }) {
    return (
        <div className="table-container" data-name="student-list">
            <div className="table-header">
                <h3 className="text-lg font-semibold">Students List</h3>
            </div>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.objectId} data-name={`student-row-${student.objectId}`}>
                            <td>{student.objectId}</td>
                            <td>{student.objectData.name}</td>
                            <td>{student.objectData.class}</td>
                            <td>{student.objectData.email}</td>
                            <td>
                                <button 
                                    onClick={() => onEdit(student)} 
                                    className="text-blue-600 hover:text-blue-800 mr-2"
                                    data-name={`edit-student-${student.objectId}`}
                                >
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button 
                                    onClick={() => onDelete(student.objectId)} 
                                    className="text-red-600 hover:text-red-800"
                                    data-name={`delete-student-${student.objectId}`}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
