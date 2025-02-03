function Payments() {
    const [activeTab, setActiveTab] = React.useState('pending');
    const [paymentHistory, setPaymentHistory] = React.useState([]);
    const [pendingFees, setPendingFees] = React.useState([
        {
            id: 1,
            description: 'Tuition Fee - Spring 2024',
            amount: 5000,
            dueDate: '2024-03-15'
        },
        {
            id: 2,
            description: 'Laboratory Fee',
            amount: 300,
            dueDate: '2024-03-10'
        }
    ]);

    React.useEffect(() => {
        loadPaymentHistory();
    }, []);

    const loadPaymentHistory = async () => {
        try {
            const data = await getPaymentHistory('current_student_id');
            setPaymentHistory(data);
        } catch (error) {
            reportError(error);
        }
    };

    const handlePayment = async (paymentData) => {
        try {
            const receipt = await processPayment(paymentData);
            setPaymentHistory(prev => [receipt, ...prev]);
            setPendingFees(prev => prev.filter(fee => fee.id !== paymentData.feeId));
        } catch (error) {
            reportError(error);
            throw error;
        }
    };

    return (
        <div className="space-y-6" data-name="payments-page">
            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => setActiveTab('pending')}
                    className={`px-4 py-2 rounded-lg ${
                        activeTab === 'pending'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700'
                    }`}
                    data-name="pending-tab-button"
                >
                    Pending Payments
                </button>
                <button
                    onClick={() => setActiveTab('history')}
                    className={`px-4 py-2 rounded-lg ${
                        activeTab === 'history'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700'
                    }`}
                    data-name="history-tab-button"
                >
                    Payment History
                </button>
            </div>

            {activeTab === 'pending' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <PaymentSummary fees={pendingFees} />
                        {pendingFees.length > 0 && (
                            <PaymentForm
                                onSubmit={handlePayment}
                                feeDetails={pendingFees[0]}
                            />
                        )}
                    </div>
                    <div>
                        <div className="payment-card">
                            <h3 className="text-xl font-semibold mb-4">Payment Guidelines</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>
                                    <i className="fas fa-info-circle mr-2 text-blue-600"></i>
                                    All payments are processed securely
                                </li>
                                <li>
                                    <i className="fas fa-clock mr-2 text-blue-600"></i>
                                    Payments may take 24-48 hours to process
                                </li>
                                <li>
                                    <i className="fas fa-exclamation-triangle mr-2 text-yellow-600"></i>
                                    Late payments incur additional fees
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <PaymentHistory payments={paymentHistory} />
            )}
        </div>
    );
}
