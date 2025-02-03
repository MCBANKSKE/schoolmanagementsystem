function StudentCourses() {
    const [courses, setCourses] = React.useState([
        {
            id: 1,
            name: 'Physics',
            teacher: 'Mr. Johnson',
            schedule: 'Mon, Wed 9:00 AM',
            progress: 75,
            assignments: 5,
            completed: 3
        },
        {
            id: 2,
            name: 'Chemistry',
            teacher: 'Mrs. Smith',
            schedule: 'Tue, Thu 10:30 AM',
            progress: 60,
            assignments: 4,
            completed: 2
        }
    ]);

    return (
        <div className="space-y-6" data-name="student-courses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                    <div key={course.id} className="portal-card" data-name={`course-card-${course.id}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-semibold">{course.name}</h3>
                                <p className="text-gray-500">{course.teacher}</p>
                            </div>
                            <span className="portal-badge badge-success">{course.schedule}</span>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>Progress</span>
                                <span>{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{ width: `${course.progress}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="flex justify-between text-sm">
                            <span>
                                <i className="fas fa-tasks mr-2"></i>
                                {course.completed}/{course.assignments} Assignments
                            </span>
                            <button className="text-blue-600 hover:text-blue-800">
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="portal-card">
                <h3 className="text-xl font-semibold mb-4">Course Schedule</h3>
                <div className="grid grid-cols-5 gap-4">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                        <div key={day} className="text-center">
                            <h4 className="font-medium mb-2">{day}</h4>
                            <div className="space-y-2">
                                {courses.map(course => (
                                    course.schedule.includes(day.slice(0, 3)) && (
                                        <div
                                            key={`${day}-${course.id}`}
                                            className="bg-blue-50 p-2 rounded text-sm"
                                        >
                                            <p className="font-medium">{course.name}</p>
                                            <p className="text-gray-500 text-xs">
                                                {course.schedule.split(' ')[1]}
                                            </p>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="portal-card">
                <h3 className="text-xl font-semibold mb-4">Course Materials</h3>
                <div className="space-y-4">
                    {courses.map(course => (
                        <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 rounded">
                            <div>
                                <h4 className="font-medium">{course.name}</h4>
                                <p className="text-sm text-gray-500">Latest materials and resources</p>
                            </div>
                            <button className="btn-primary">
                                Access Materials
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
