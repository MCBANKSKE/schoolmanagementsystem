function Exams() {
    const [exams, setExams] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const [editingExam, setEditingExam] = React.useState(null);

    React.useEffect(() => {
        loadExams();
    }, []);

    async function loadExams() {
        try {
            const data = await fetchExams();
            setExams(data);
        } catch (error) {
            reportError(error);
        }
    }

    const handleSubmit = async (formData) => {
        try {
            if (editingExam) {
                await trickleUpdateObject('exam', editingExam.objectId, formData);
            } else {
                await createExam(formData);
            }
            setShowModal(false);
            setEditingExam(null);
            loadExams();
        } catch (error) {
            reportError(error);
        }
    };

    const handleEdit = (exam) => {
        setEditingExam(exam);
        setShowModal(true);
    };

    const handleDelete = async (examId) => {
        if (confirm('Are you sure you want to delete this exam?')) {
            try {
                await trickleDeleteObject('exam', examId);
                loadExams();
            } catch (error) {
                reportError(error);
            }
        }
    };

    return (
        <div data-name="exams-page">
            <Header title="Exams Management" />
            <div className="p-6">
                <button
                    onClick={() => setShowModal(true)}
                    className="btn-primary mb-6"
                    data-name="add-exam-button"
                >
                    <i className="fas fa-plus mr-2"></i>
                    Add New Exam
                </button>

                <ExamList
                    exams={exams}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

                {showModal && (
                    <div className="modal-overlay" data-name="exam-modal">
                        <div className="modal-content">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">
                                    {editingExam ? 'Edit Exam' : 'Add New Exam'}
                                </h2>
                                <button
                                    onClick={() => {
                                        setShowModal(false);
                                        setEditingExam(null);
                                    }}
                                    className="text-gray-500 hover:text-gray-700"
                                    data-name="close-modal-button"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            <AddExam
                                onSubmit={handleSubmit}
                                initialData={editingExam?.objectData}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
