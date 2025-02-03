const defaultUsers = {
    admin: { 
        id: 'admin1',
        username: 'admin',
        password: 'admin123',
        role: 'admin',
        name: 'System Admin',
        email: 'admin@school.com',
        phone: '+1 234 567 890',
        address: '789 Admin Street, City'
    },
    teacher: { 
        id: 'teacher1',
        username: 'teacher',
        password: 'teacher123',
        role: 'teacher',
        name: 'Jane Smith',
        email: 'jane.smith@school.com',
        phone: '+1 234 567 890',
        address: '456 Teacher Avenue, City',
        subjects: ['Physics', 'Mathematics']
    },
    student: { 
        id: 'student1',
        username: 'student',
        password: 'student123',
        role: 'student',
        name: 'John Doe',
        email: 'john.doe@school.com',
        phone: '+1 234 567 890',
        address: '123 Student Street, City',
        class: 'Grade 11',
        rollNumber: 'A123'
    }
};

// Get users from localStorage or use defaults
function getUsers() {
    try {
        const users = JSON.parse(localStorage.getItem('users'));
        return users || defaultUsers;
    } catch (error) {
        reportError(error);
        return defaultUsers;
    }
}

// Save users to localStorage
function saveUsers(users) {
    try {
        localStorage.setItem('users', JSON.stringify(users));
    } catch (error) {
        reportError(error);
    }
}

function login(username, password) {
    try {
        const users = getUsers();
        const user = Object.values(users).find(
            u => u.username === username && u.password === password
        );

        if (user) {
            const sessionData = {
                id: user.id,
                username: user.username,
                role: user.role,
                name: user.name,
                email: user.email,
                token: btoa(`${user.username}:${user.role}:${Date.now()}`),
                expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
            };
            
            localStorage.setItem('session', JSON.stringify(sessionData));
            return sessionData;
        }
        
        throw new Error('Invalid credentials');
    } catch (error) {
        reportError(error);
        throw error;
    }
}

function logout() {
    try {
        localStorage.removeItem('session');
        window.location.href = '/login';
    } catch (error) {
        reportError(error);
    }
}

function getSession() {
    try {
        const session = JSON.parse(localStorage.getItem('session'));
        
        if (!session) {
            return null;
        }

        if (Date.now() > session.expiresAt) {
            logout();
            return null;
        }

        return session;
    } catch (error) {
        reportError(error);
        return null;
    }
}

function isAuthenticated() {
    return getSession() !== null;
}

function getUserProfile(userId) {
    try {
        const users = getUsers();
        return users[userId] || null;
    } catch (error) {
        reportError(error);
        return null;
    }
}

function updateUserProfile(userId, profileData) {
    try {
        const users = getUsers();
        if (users[userId]) {
            users[userId] = { ...users[userId], ...profileData };
            saveUsers(users);
            return users[userId];
        }
        throw new Error('User not found');
    } catch (error) {
        reportError(error);
        throw error;
    }
}

function createUser(userData) {
    try {
        const users = getUsers();
        const userId = `${userData.role}${Date.now()}`;
        users[userId] = { ...userData, id: userId };
        saveUsers(users);
        return users[userId];
    } catch (error) {
        reportError(error);
        throw error;
    }
}

function deleteUser(userId) {
    try {
        const users = getUsers();
        if (users[userId]) {
            delete users[userId];
            saveUsers(users);
            return true;
        }
        throw new Error('User not found');
    } catch (error) {
        reportError(error);
        throw error;
    }
}

function listUsers(role = null) {
    try {
        const users = getUsers();
        return Object.values(users).filter(user => !role || user.role === role);
    } catch (error) {
        reportError(error);
        return [];
    }
}
