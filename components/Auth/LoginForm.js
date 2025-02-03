function LoginForm({ onSubmit }) {
    const [formData, setFormData] = React.useState({
        username: '',
        password: '',
        role: 'student'
    });

    const [error, setError] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await onSubmit(formData);
        } catch (error) {
            setError(error.message);
            reportError(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4" data-name="login-form">
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" data-name="error-message">
                    {error}
                </div>
            )}

            <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <select
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="auth-input"
                    data-name="role-select"
                >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    className="auth-input"
                    required
                    data-name="username-input"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="auth-input"
                    required
                    data-name="password-input"
                />
            </div>

            <button type="submit" className="auth-button" data-name="submit-button">
                Login
            </button>

            <p className="text-center text-sm text-gray-600">
                Default credentials for testing:<br/>
                Admin: admin/admin123<br/>
                Teacher: teacher/teacher123<br/>
                Student: student/student123
            </p>
        </form>
    );
}
