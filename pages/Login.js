function Login() {
    const handleLogin = async (formData) => {
        try {
            const session = await login(formData.username, formData.password);
            if (session.role !== formData.role) {
                throw new Error('Invalid role for this user');
            }
            window.location.href = `/${session.role}/dashboard`;
        } catch (error) {
            reportError(error);
            throw error;
        }
    };

    return (
        <div className="auth-container flex items-center justify-center" data-name="login-page">
            <div className="auth-card">
                <h2 className="text-2xl font-bold text-center mb-6">Login to SchoolMS</h2>
                <LoginForm onSubmit={handleLogin} />
            </div>
        </div>
    );
}
