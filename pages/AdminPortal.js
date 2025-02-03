function AdminPortal({ initialSection = 'dashboard' }) {
    const [currentSection, setCurrentSection] = React.useState(initialSection);
    const session = getSession();

    if (!session || session.role !== 'admin') {
        window.location.href = '/login';
        return null;
    }

    const renderSection = () => {
        switch (currentSection) {
            case 'dashboard':
                return <AdminDashboard />;
            case 'users':
                return <UserManagement />;
            case 'profile':
                return <Profile user={session} />;
            default:
                return <AdminDashboard />;
        }
    };

    return (
        <div className="portal-container" data-name="admin-portal">
            <PortalSidebar
                role="admin"
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
