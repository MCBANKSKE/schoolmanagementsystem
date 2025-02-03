function TeacherAssignments() {
    const [assignments, setAssignments] = React.useState([
        {
            id: 1,
            title: 'Linear Algebra Assignment',
            class: 'Grade 11 Physics',
            dueDate: '2024-03-15',
            status: 'active',
            submissions: 15
        },
        {
            id: 2,
            title: 'Laboratory Report',
            class: 'Grade 10 Physics',
            dueDate: '2024-03-18',
            status: 'completed',
            submissions: 28
        }
    ]);

    const [showModal, setShowModal] = React.useState(false);
    const [formData, setFormData] = React.useState({
        title: '',
        class: '',
        dueDate: '',
        description: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Save assignment logic
            setAssignments(prev => [...prev, { ...formData, id: Date.now(), status: 'active', submissions: 0 }]);
            setShowModal(false);
            setFormData({ title: '', class: '', dueDate: '', description: '' });
        } catch (error) {
            reportError(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            if (confirm('Are you sure you want to delete this assignment?')) {
                setAssignments(prev => prev.filter(a => a.id !== id));
            }
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="teacher-assignments">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Assignments</h2>
                <button
                    onClick={() => setShowModal(true)}
                    className="btn-primary"
                    data-name="add-assignment-button"
                >
                    <i className="fas fa-plus mr-2"></i>
                    Add Assignment
                </button>
            </div>

            <div className="portal-card">
                <table className="portal-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Class</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Submissions</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.map(assignment => (
                            <tr key={assignment.id} data-name={`assignment-row-${assignment.id}`}>
                                <td>{assignment.title}</td>
                                <td>{assignment.class}</td>
                                <td>{new Date(assignment.dueDate).toLocaleDateString()}</td>
                                <td>
                                    <span className={`portal-badge ${
                                        assignment.status === 'active' ? 'badge-success' : 'badge-warning'
                                    }`}>
                                        {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                                    </span>
                                </td>
                                <td>{assignment.submissions}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(assignment.id)}
                                        className="text-red-600 hover:text-red-800"
                                        data-name={`delete-assignment-${assignment.id}`}
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="modal-overlay" data-name="assignment-modal">
                    <div className="modal-content">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Add New Assignment</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-500 hover:text-gray-700"
                                data-name="close-modal-button"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                                    className="form-input"
                                    required
                                    data-name="assignment-title-input"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Class</label>
                                <select
                                    value={formData.class}
                                    onChange={(e) => setFormData({...formData, class: e.target.value})}
                                    className="form-input"
                                    required
                                    data-name="assignment-class-input"
                                >
                                    <option value="">Select a class</option>
                                    <option value="Grade 10 Physics">Grade 10 Physics</option>
                                    <option value="Grade 11 Physics">Grade 11 Physics</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Due Date</label>
                                <input
                                    type="date"
                                    value={formData.dueDate}
                                    onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                                    className="form-input"
                                    required
                                    data-name="assignment-date-input"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    className="form-input"
                                    rows="4"
                                    data-name="assignment-description-input"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full" data-name="submit-assignment-button">
                                Create Assignment
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
