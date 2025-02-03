function ExamList({ exams, onEdit, onDelete }) {
    return (
        <div className="table-container" data-name="exam-list">
            <div className="table-header">
                <h3 className="text-lg font-semibold">Exams List</h3>
            </div>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exams.map((exam) => (
                        <tr key={exam.objectId} data-name={`exam-row-${exam.objectId}`}>
                            <td>{exam.objectId}</td>
                            <td>{exam.objectData.subject}</td>
                            <td>{new Date(exam.objectData.date).toLocaleDateString()}</td>
                            <td>{exam.objectData.duration} mins</td>
                            <td>
                                <span className={`status-badge ${exam.objectData.status === 'Completed' ? 'status-success' : 'status-pending'}`}>
                                    {exam.objectData.status}
                                </span>
                            </td>
                            <td>
                                <button 
                                    onClick={() => onEdit(exam)} 
                                    className="text-blue-600 hover:text-blue-800 mr-2"
                                    data-name={`edit-exam-${exam.objectId}`}
                                >
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button 
                                    onClick={() => onDelete(exam.objectId)} 
                                    className="text-red-600 hover:text-red-800"
                                    data-name={`delete-exam-${exam.objectId}`}
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
