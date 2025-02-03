function PaymentHistory({ payments }) {
    return (
        <div className="payment-card" data-name="payment-history">
            <h3 className="text-xl font-semibold mb-4">Payment History</h3>
            <table className="portal-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Receipt</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map(payment => (
                        <tr key={payment.id} data-name={`payment-row-${payment.id}`}>
                            <td>{new Date(payment.timestamp).toLocaleDateString()}</td>
                            <td>{payment.description}</td>
                            <td>${payment.amount.toFixed(2)}</td>
                            <td>
                                <span className={`payment-status status-${payment.status.toLowerCase()}`}>
                                    {payment.status}
                                </span>
                            </td>
                            <td>
                                <button
                                    onClick={() => window.open(`/receipt/${payment.id}`, '_blank')}
                                    className="text-blue-600 hover:text-blue-800"
                                    data-name={`view-receipt-${payment.id}`}
                                >
                                    <i className="fas fa-file-invoice"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
