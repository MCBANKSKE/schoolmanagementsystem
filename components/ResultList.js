function ResultList({ results, onEdit, onDelete }) {
    return (
        <div className="table-container" data-name="result-list">
            <div className="table-header">
                <h3 className="text-lg font-semibold">Results List</h3>
            </div>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Student</th>
                        <th>Exam</th>
                        <th>Score</th>
                        <th>Grade</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) => (
                        <tr key={result.objectId} data-name={`result-row-${result.objectId}`}>
                            <td>{result.objectId}</td>
                            <td>{result.objectData.studentName}</td>
                            <td>{result.objectData.examName}</td>
                            <td>{result.objectData.score}</td>
                            <td>{result.objectData.grade}</td>
                            <td>
                                <button 
                                    onClick={() => onEdit(result)} 
                                    className="text-blue-600 hover:text-blue-800 mr-2"
                                    data-name={`edit-result-${result.objectId}`}
                                >
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button 
                                    onClick={() => onDelete(result.objectId)} 
                                    className="text-red-600 hover:text-red-800"
                                    data-name={`delete-result-${result.objectId}`}
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
