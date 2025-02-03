function Profile({ user }) {
    const [isEditing, setIsEditing] = React.useState(false);
    const [formData, setFormData] = React.useState({
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Update profile logic here
            setIsEditing(false);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="portal-card" data-name="profile-section">
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">Profile Information</h2>
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-blue-600 hover:text-blue-700"
                    data-name="edit-profile-button"
                >
                    <i className={`fas ${isEditing ? 'fa-times' : 'fa-edit'}`}></i>
                    <span className="ml-2">{isEditing ? 'Cancel' : 'Edit'}</span>
                </button>
            </div>

            {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4" data-name="profile-form">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="form-input"
                            required
                            data-name="profile-name-input"
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
                            data-name="profile-email-input"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="form-input"
                            data-name="profile-phone-input"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <textarea
                            value={formData.address}
                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                            className="form-input"
                            rows="3"
                            data-name="profile-address-input"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-primary" data-name="save-profile-button">
                        Save Changes
                    </button>
                </form>
            ) : (
                <div className="space-y-6" data-name="profile-info">
                    <img
                        src="https://via.placeholder.com/150"
                        alt={user.name}
                        className="profile-avatar"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-500">Name</p>
                            <p className="font-medium">{user.name}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium">{user.email}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="font-medium">{user.phone}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Address</p>
                            <p className="font-medium">{user.address}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
