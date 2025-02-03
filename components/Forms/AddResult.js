function AddResult({ onSubmit, students, exams, initialData = null }) {
    const [formData, setFormData] = React.useState(
        initialData || {
            studentId: '',
            examId: '',
            score: '',
            grade: ''
        }
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onSubmit(formData);
            setFormData({
                studentId: '',
                examId: '',
                score: '',
                grade: ''
            });
        } catch (error) {
            reportError(error);
        }
    };

    const calculateGrade = (score) => {
        if (score >= 90) return 'A';
        if (score >= 80) return 'B';
        if (score >= 70) return 'C';
        if (score >= 60) return 'D';
        return 'F';
    };

    const handleScoreChange = (e) => {
        const score = e.target.value;
        setFormData({
            ...formData,
            score,
            grade: calculateGrade(score)
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4" data-name="add-result-form">
            <div>
                <label className="block text-sm font-medium text-gray-700">Student</label>
                <select
                    value={formData.studentId}
                    onChange={(e) => setFormData({...formData, studentId: e.target.value})}
                    className="form-input"
                    required
                    data-name="result-student-input"
                >
                    <option value="">Select Student</option>
                    {students.map((student) => (
                        <option key={student.objectId} value={student.objectId}>
                            {student.objectData.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Exam</label>
                <select
                    value={formData.examId}
                    onChange={(e) => setFormData({...formData, examId: e.target.value})}
                    className="form-input"
                    required
                    data-name="result-exam-input"
                >
                    <option value="">Select Exam</option>
                    {exams.map((exam) => (
                        <option key={exam.objectId} value={exam.objectId}>
                            {exam.objectData.subject}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Score</label>
                <input
                    type="number"
                    value={formData.score}
                    onChange={handleScoreChange}
                    className="form-input"
                    required
                    min="0"
                    max="100"
                    data-name="result-score-input"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Grade</label>
                <input
                    type="text"
                    value={formData.grade}
                    className="form-input"
                    readOnly
                    data-name="result-grade-input"
                />
            </div>
            <button type="submit" className="btn-primary w-full" data-name="submit-result-button">
                {initialData ? 'Update Result' : 'Add Result'}
            </button>
        </form>
    );
}
