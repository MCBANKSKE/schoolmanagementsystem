function App() {
    const [currentPage, setCurrentPage] = React.useState('landing');
    const session = getSession();

    React.useEffect(() => {
        const path = window.location.pathname;
        if (path === '/') {
            setCurrentPage('landing');
        } else if (path === '/login') {
            setCurrentPage('login');
        } else if (session) {
            const role = session.role;
            if (path.startsWith(`/${role}`)) {
                const section = path.split('/')[2] || 'dashboard';
                setCurrentPage(`${role}-${section}`);
            } else {
                window.location.href = `/${role}/dashboard`;
            }
        } else {
            window.location.href = '/login';
        }
    }, []);

    const renderPage = () => {
        // Check authentication for protected routes
        if (currentPage !== 'landing' && currentPage !== 'login' && !session) {
            return <Login />;
        }

        // Render appropriate page based on current route
        switch (currentPage) {
            case 'landing':
                return <Landing />;
            case 'login':
                return <Login />;
            case 'admin-dashboard':
            case 'admin-users':
            case 'admin-courses':
            case 'admin-settings':
            case 'admin-profile':
                return <AdminPortal initialSection={currentPage.split('-')[1]} />;
            case 'teacher-dashboard':
            case 'teacher-students':
            case 'teacher-assignments':
            case 'teacher-attendance':
            case 'teacher-grades':
            case 'teacher-profile':
                return <TeacherPortal initialSection={currentPage.split('-')[1]} />;
            case 'student-dashboard':
            case 'student-courses':
            case 'student-grades':
            case 'student-attendance':
            case 'student-payments':
            case 'student-profile':
                return <StudentPortal initialSection={currentPage.split('-')[1]} />;
            default:
                return <Landing />;
        }
    };

    // Handle navigation
    const navigate = (path) => {
        window.history.pushState({}, '', path);
        const newPage = path === '/' ? 'landing' : path.substring(1).replace('/', '-');
        setCurrentPage(newPage);
    };

    // Attach navigation handler to window
    React.useEffect(() => {
        window.addEventListener('popstate', () => {
            const path = window.location.pathname;
            const newPage = path === '/' ? 'landing' : path.substring(1).replace('/', '-');
            setCurrentPage(newPage);
        });
    }, []);

    return (
        <div data-name="app">
            {renderPage()}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
