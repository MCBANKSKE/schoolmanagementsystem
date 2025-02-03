function StudentPortal({ initialSection = 'dashboard' }) {
    const [currentSection, setCurrentSection] = React.useState(initialSection);
    const session = getSession();

    if (!session || session.role !== 'student') {
        window.location.href = '/login';
        return null;
    }

    const renderSection = () => {
        switch (currentSection) {
            case 'dashboard':
                return <StudentDashboard />;
            case 'courses':
                return <StudentCourses />;
            case 'grades':
                return <StudentGrades />;
            case 'attendance':
                return <StudentAttendance />;
            case 'payments':
                return <Payments />;
            case 'profile':
                return <Profile user={session} />;
            default:
                return <StudentDashboard />;
        }
    };

    return (
        <div className="portal-container" data-name="student-portal">
            <PortalSidebar
                role="student"
                currentSection={currentSection}
                onSectionChange={setCurrentSection}
            />
            <div className="portal-main">
                <PortalHeader
                    title={currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
                    user={session}
                />
                {renderSection()}
            </div>
        </div>
    );
}
