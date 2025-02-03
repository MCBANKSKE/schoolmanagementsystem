function Results() {
    const [results, setResults] = React.useState([]);
    const [students, setStudents] = React.useState([]);
    const [exams, setExams] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const [editingResult, setEditingResult] = React.useState(null);

    React.useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const [resultsData, studentsData, examsData] = await Promise.all([
                fetchResults(),
                fetchStudents(),
                fetchExams()
            ]);
            setResults(resultsData);
            setStudents(studentsData);
            setExams(examsData);
        } catch (error) {
            reportError(error);
        }
    }

    const handleSubmit = async (formData) => {
        try {
            if (editingResult) {
                await trickleUpdateObject('result', editingResult.objectId, formData);
            } else {
                await createResult(formData);
            }
            setShowModal(false);
            setEditingResult(null);
            loadData();
        } catch (error) {
            reportError(error);
        }
    };

    const handleEdit = (result) => {
        setEditingResult(result);
        setShowModal(true);
    };

    const handleDelete = async (resultId) => {
        if (confirm('Are you sure you want to delete this result?')) {
            try {
                await trickleDeleteObject('result', resultId);
                loadData();
            } catch (error) {
                reportError(error);
            }
        }
    };

    return (
        <div data-name="results-page">
            <Header title="Results Management" />
            <div className="p-6">
                <button
                    onClick={() => setShowModal(true)}
                    className="btn-primary mb-6"
                    data-name="add-result-button"
                >
                    <i className="fas fa-plus mr-2"></i>
                    Add New Result
                </button>

                <ResultList
                    results={results}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

                {showModal && (
                    <div className="modal-overlay" data-name="result-modal">
                        <div className="modal-content">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">
                                    {editingResult ? 'Edit Result' : 'Add New Result'}
                                </h2>
                                <button
                                    onClick={() => {
                                        setShowModal(false);
                                        setEditingResult(null);
                                    }}
                                    className="text-gray-500 hover:text-gray-700"
                                    data-name="close-modal-button"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            <AddResult
                                onSubmit={handleSubmit}
                                students={students}
                                exams={exams}
                                initialData={editingResult?.objectData}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
