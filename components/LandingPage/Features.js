function Features() {
    const features = [
        {
            icon: 'fas fa-user-graduate',
            title: 'Student Portal',
            description: 'Access to courses, grades, and assignments'
        },
        {
            icon: 'fas fa-chalkboard-teacher',
            title: 'Teacher Portal',
            description: 'Manage classes, grades, and student progress'
        },
        {
            icon: 'fas fa-book',
            title: 'Exam Management',
            description: 'Schedule and manage exams efficiently'
        },
        {
            icon: 'fas fa-dollar-sign',
            title: 'Fee Management',
            description: 'Handle student fees and payments'
        }
    ];

    return (
        <section id="features" className="py-20 bg-gray-50" data-name="features-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900" data-name="features-title">
                        Features
                    </h2>
                    <p className="mt-4 text-xl text-gray-600" data-name="features-subtitle">
                        Everything you need to manage your school effectively
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card bg-white p-6 rounded-lg shadow-md"
                            data-name={`feature-card-${index}`}
                        >
                            <div className="text-indigo-600 text-3xl mb-4">
                                <i className={feature.icon}></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
