function Dashboard() {
    const [stats, setStats] = React.useState({
        students: 0,
        exams: 0,
        results: 0
    });

    React.useEffect(() => {
        async function fetchStats() {
            try {
                const [students, exams, results] = await Promise.all([
                    fetchStudents(),
                    fetchExams(),
                    fetchResults()
                ]);
                
                setStats({
                    students: students.length,
                    exams: exams.length,
                    results: results.length
                });
            } catch (error) {
                reportError(error);
            }
        }
        
        fetchStats();
    }, []);

    return (
        <div data-name="dashboard">
            <Header title="Dashboard" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="card" data-name="students-stat">
                    <h3 className="text-lg font-semibold mb-2">Total Students</h3>
                    <p className="text-3xl">{stats.students}</p>
                </div>
                <div className="card" data-name="exams-stat">
                    <h3 className="text-lg font-semibold mb-2">Total Exams</h3>
                    <p className="text-3xl">{stats.exams}</p>
                </div>
                <div className="card" data-name="results-stat">
                    <h3 className="text-lg font-semibold mb-2">Results Published</h3>
                    <p className="text-3xl">{stats.results}</p>
                </div>
            </div>
        </div>
    );
}
