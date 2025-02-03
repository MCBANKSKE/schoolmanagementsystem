async function processPayment(paymentData) {
    try {
        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const receipt = {
            id: Date.now(),
            ...paymentData,
            status: 'paid',
            timestamp: new Date().toISOString()
        };

        // Save payment record
        await trickleCreateObject('payment', receipt);
        
        return receipt;
    } catch (error) {
        reportError(error);
        throw new Error('Payment processing failed');
    }
}

async function getPaymentHistory(studentId) {
    try {
        const response = await trickleListObjects(`payment:${studentId}`, 100, true);
        return response.items;
    } catch (error) {
        reportError(error);
        return [];
    }
}

async function generateReceipt(paymentId) {
    try {
        const payment = await trickleGetObject('payment', paymentId);
        return payment;
    } catch (error) {
        reportError(error);
        throw new Error('Failed to generate receipt');
    }
}

function calculateLateFees(dueDate, amount) {
    const today = new Date();
    const due = new Date(dueDate);
    
    if (today > due) {
        const daysLate = Math.floor((today - due) / (1000 * 60 * 60 * 24));
        return Math.min(amount * 0.1, daysLate * (amount * 0.001)); // Max 10% late fee
    }
    
    return 0;
}
