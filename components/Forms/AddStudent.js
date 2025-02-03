function AddStudent({ onSubmit, initialData = null }) {
    const [formData, setFormData] = React.useState(
        initialData || {
            name: '',
            class: '',
            email: '',
            phone: '',
            address: ''
        }
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onSubmit(formData);
            setFormData({
                name: '',
                class: '',
                email: '',
                phone: '',
                address: ''
            });
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4" data-name="add-student-form">
            <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="form-input"
                    required
                    data-name="student-name-input"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Class</label>
                <input
                    type="text"
                    value={formData.class}
                    onChange={(e) => setFormData({...formData, class: e.target.value})}
                    className="form-input"
                    required
                    data-name="student-class-input"
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
                    data-name="student-email-input"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="form-input"
                    data-name="student-phone-input"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="form-input"
                    rows="3"
                    data-name="student-address-input"
                ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full" data-name="submit-student-button">
                {initialData ? 'Update Student' : 'Add Student'}
            </button>
        </form>
    );
}
