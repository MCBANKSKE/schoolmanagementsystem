function UserManagement() {
    const [users, setUsers] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState(null);
    const [formData, setFormData] = React.useState({
        username: '',
        password: '',
        role: 'student',
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    React.useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = () => {
        const allUsers = listUsers();
        setUsers(allUsers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedUser) {
                await updateUserProfile(selectedUser.id, formData);
            } else {
                await createUser(formData);
            }
            setShowModal(false);
            setSelectedUser(null);
            setFormData({
                username: '',
                password: '',
                role: 'student',
                name: '',
                email: '',
                phone: '',
                address: ''
            });
            loadUsers();
        } catch (error) {
            reportError(error);
            alert('Error saving user: ' + error.message);
        }
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setFormData({
            username: user.username,
            role: user.role,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address
        });
        setShowModal(true);
    };

    const handleDelete = async (userId) => {
        if (confirm('Are you sure you want to delete this user?')) {
            try {
                await deleteUser(userId);
                loadUsers();
            } catch (error) {
                reportError(error);
                alert('Error deleting user: ' + error.message);
            }
        }
    };

    return (
        <div data-name="user-management">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">User Management</h2>
                <button
                    onClick={() => setShowModal(true)}
                    className="btn-primary"
                    data-name="add-user-button"
                >
                    <i className="fas fa-plus mr-2"></i>
                    Add New User
                </button>
            </div>

            <div className="portal-card">
                <table className="portal-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} data-name={`user-row-${user.id}`}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <span className={`portal-badge ${
                                        user.role === 'admin' ? 'badge-danger' :
                                        user.role === 'teacher' ? 'badge-warning' :
                                        'badge-success'
                                    }`}>
                                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                    </span>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button
                                        onClick={() => handleEdit(user)}
                                        className="text-blue-600 hover:text-blue-800 mr-2"
                                        data-name={`edit-user-${user.id}`}
                                    >
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="text-red-600 hover:text-red-800"
                                        data-name={`delete-user-${user.id}`}
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="modal-overlay" data-name="user-modal">
                    <div className="modal-content">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">
                                {selectedUser ? 'Edit User' : 'Add New User'}
                            </h2>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setSelectedUser(null);
                                    setFormData({
                                        username: '',
                                        password: '',
                                        role: 'student',
                                        name: '',
                                        email: '',
                                        phone: '',
                                        address: ''
                                    });
                                }}
                                className="text-gray-500 hover:text-gray-700"
                                data-name="close-modal-button"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Username</label>
                                <input
                                    type="text"
                                    value={formData.username}
                                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                                    className="form-input"
                                    required
                                    data-name="username-input"
                                />
                            </div>
                            {!selectedUser && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                                        className="form-input"
                                        required={!selectedUser}
                                        data-name="password-input"
                                    />
                                </div>
                            )}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Role</label>
                                <select
                                    value={formData.role}
                                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                                    className="form-input"
                                    required
                                    data-name="role-input"
                                >
                                    <option value="student">Student</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="form-input"
                                    required
                                    data-name="name-input"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="form-input"
                                    required
                                    data-name="email-input"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    className="form-input"
                                    data-name="phone-input"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <textarea
                                    value={formData.address}
                                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                                    className="form-input"
                                    rows="3"
                                    data-name="address-input"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn-primary w-full"
                                data-name="submit-user-button"
                            >
                                {selectedUser ? 'Update User' : 'Create User'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
