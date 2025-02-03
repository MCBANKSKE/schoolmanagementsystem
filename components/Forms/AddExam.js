function AddExam({ onSubmit, initialData = null }) {
    const [formData, setFormData] = React.useState(
        initialData || {
            subject: '',
            date: '',
            duration: '',
            totalMarks: '',
            status: 'Pending'
        }
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onSubmit(formData);
            setFormData({
                subject: '',
                date: '',
                duration: '',
                totalMarks: '',
                status: 'Pending'
            });
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4" data-name="add-exam-form">
            <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="form-input"
                    required
                    data-name="exam-subject-input"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="form-input"
                    required
                    data-name="exam-date-input"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
                <input
                    type="number"
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    className="form-input"
                    required
                    data-name="exam-duration-input"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Total Marks</label>
                <input
                    type="number"
                    value={formData.totalMarks}
                    onChange={(e) => setFormData({...formData, totalMarks: e.target.value})}
                    className="form-input"
                    required
                    data-name="exam-marks-input"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="form-input"
                    data-name="exam-status-input"
                >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <button type="submit" className="btn-primary w-full" data-name="submit-exam-button">
                {initialData ? 'Update Exam' : 'Add Exam'}
            </button>
        </form>
    );
}
