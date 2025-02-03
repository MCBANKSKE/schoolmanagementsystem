async function fetchStudents() {
    try {
        const response = await trickleListObjects('student', 100, true);
        return response.items;
    } catch (error) {
        reportError(error);
        return [];
    }
}

async function fetchExams() {
    try {
        const response = await trickleListObjects('exam', 100, true);
        return response.items;
    } catch (error) {
        reportError(error);
        return [];
    }
}

async function fetchResults() {
    try {
        const response = await trickleListObjects('result', 100, true);
        return response.items;
    } catch (error) {
        reportError(error);
        return [];
    }
}

async function createStudent(studentData) {
    try {
        return await trickleCreateObject('student', studentData);
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function createExam(examData) {
    try {
        return await trickleCreateObject('exam', examData);
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function createResult(resultData) {
    try {
        return await trickleCreateObject('result', resultData);
    } catch (error) {
        reportError(error);
        throw error;
    }
}
