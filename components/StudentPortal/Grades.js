function StudentGrades() {
    const [grades, setGrades] = React.useState([
        {
            id: 1,
            subject: 'Physics',
            assignment: 'Mid-term Exam',
            score: 92,
            maxScore: 100,
            grade: 'A',
            feedback: 'Excellent work on the theoretical concepts'
        },
        {
            id: 2,
            subject: 'Chemistry',
            assignment: 'Laboratory Report',
            score: 85,
            maxScore: 100,
            grade: 'B',
            feedback: 'Good analysis but needs more detail in methodology'
        }
    ]);

    const calculateGPA = () => {
        const gradePoints = {
            'A': 4.0,
            'B': 3.0,
            'C': 2.0,
            'D': 1.0,
            'F': 0.0
        };

        const totalPoints = grades.reduce((sum, grade) => sum + gradePoints[grade.grade], 0);
        return (totalPoints / grades.length).toFixed(2);
    };

    return (
        <div className="space-y-6" data-name="student-grades">
            <div className="portal-card text-center">
                <h3 className="text-lg font-semibold mb-2">Current GPA</h3>
                <p className="text-4xl font-bold text-blue-600">{calculateGPA()}</p>
            </div>

            <div className="portal-card">
                <h3 className="text-xl font-semibold mb-4">Grade History</h3>
                <table className="portal-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Assignment</th>
                            <th>Score</th>
                            <th>Grade</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades.map(grade => (
                            <tr key={grade.id} data-name={`grade-row-${grade.id}`}>
                                <td>{grade.subject}</td>
                                <td>{grade.assignment}</td>
                                <td>
                                    {grade.score}/{grade.maxScore}
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded-full"
                                            style={{ width: `${(grade.score / grade.maxScore) * 100}%` }}
                                        ></div>
                                    </div>
                                </td>
                                <td>
                                    <span className={`portal-badge ${
                                        grade.grade === 'A' ? 'badge-success' :
                                        grade.grade === 'B' ? 'badge-warning' :
                                        'badge-danger'
                                    }`}>
                                        {grade.grade}
                                    </span>
                                </td>
                                <td>{grade.feedback}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="portal-card">
                    <h3 className="text-lg font-semibold mb-4">Grade Distribution</h3>
                    <div className="space-y-4">
                        {['A', 'B', 'C', 'D', 'F'].map(grade => {
                            const count = grades.filter(g => g.grade === grade).length;
                            const percentage = (count / grades.length) * 100;
                            return (
                                <div key={grade} className="flex items-center">
                                    <span className="w-8">{grade}</span>
                                    <div className="flex-1 mx-4">
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded-full"
                                                style={{ width: `${percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <span>{percentage.toFixed(1)}%</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="portal-card">
                    <h3 className="text-lg font-semibold mb-4">Recent Feedback</h3>
                    <div className="space-y-4">
                        {grades.slice(0, 3).map(grade => (
                            <div key={grade.id} className="border-b pb-4">
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium">{grade.subject}</span>
                                    <span className="text-gray-500">{grade.assignment}</span>
                                </div>
                                <p className="text-gray-600">{grade.feedback}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
