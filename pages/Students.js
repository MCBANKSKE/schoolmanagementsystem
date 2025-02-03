function Students() {
    const [students, setStudents] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const [editingStudent, setEditingStudent] = React.useState(null);

    React.useEffect(() => {
        loadStudents();
    }, []);

    async function loadStudents() {
        try {
            const data = await fetchStudents();
            setStudents(data);
        } catch (error) {
            reportError(error);
        }
    }

    const handleSubmit = async (formData) => {
        try {
            if (editingStudent) {
                await trickleUpdateObject('student', editingStudent.objectId, formData);
            } else {
                await createStudent(formData);
            }
            setShowModal(false);
            setEditingStudent(null);
            loadStudents();
        } catch (error) {
            reportError(error);
        }
    };

    const handleEdit = (student) => {
        setEditingStudent(student);
        setShowModal(true);
    };

    const handleDelete = async (studentId) => {
        if (confirm('Are you sure you want to delete this student?')) {
            try {
                await trickleDeleteObject('student', studentId);
                loadStudents();
            } catch (error) {
                reportError(error);
            }
        }
    };

    return (
        <div data-name="students-page">
            <Header title="Students Management" />
            <div className="p-6">
                <button
                    onClick={() => setShowModal(true)}
                    className="btn-primary mb-6"
                    data-name="add-student-button"
                >
                    <i className="fas fa-plus mr-2"></i>
                    Add New Student
                </button>

                <StudentList
                    students={students}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

                {showModal && (
                    <div className="modal-overlay" data-name="student-modal">
                        <div className="modal-content">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">
                                    {editingStudent ? 'Edit Student' : 'Add New Student'}
                                </h2>
                                <button
                                    onClick={() => {
                                        setShowModal(false);
                                        setEditingStudent(null);
                                    }}
                                    className="text-gray-500 hover:text-gray-700"
                                    data-name="close-modal-button"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            <AddStudent
                                onSubmit={handleSubmit}
                                initialData={editingStudent?.objectData}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
