function TeacherPortal({ initialSection = 'dashboard' }) {
    const [currentSection, setCurrentSection] = React.useState(initialSection);
    const session = getSession();

    if (!session || session.role !== 'teacher') {
        window.location.href = '/login';
        return null;
    }

    const renderSection = () => {
        switch (currentSection) {
            case 'dashboard':
                return <TeacherDashboard />;
            case 'students':
                return <TeacherStudents />;
            case 'assignments':
                return <TeacherAssignments />;
            case 'attendance':
                return <TeacherAttendance />;
            case 'profile':
                return <Profile user={session} />;
            default:
                return <TeacherDashboard />;
        }
    };

    return (
        <div className="portal-container" data-name="teacher-portal">
            <PortalSidebar
                role="teacher"
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
