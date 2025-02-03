function PaymentReceipt({ payment }) {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="receipt" data-name="payment-receipt">
            <div className="receipt-header">
                <h2 className="text-2xl font-bold mb-2">Payment Receipt</h2>
                <p className="text-gray-500">#{payment.id}</p>
            </div>

            <div className="space-y-4">
                <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{new Date(payment.timestamp).toLocaleString()}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Payment Method</p>
                    <p className="font-medium">{payment.paymentMethod}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Description</p>
                    <p className="font-medium">{payment.description}</p>
                </div>

                <div className="receipt-item">
                    <span>Amount Paid</span>
                    <span>${payment.amount.toFixed(2)}</span>
                </div>

                {payment.lateFee > 0 && (
                    <div className="receipt-item text-red-600">
                        <span>Late Fee</span>
                        <span>${payment.lateFee.toFixed(2)}</span>
                    </div>
                )}

                <div className="receipt-total">
                    <div className="receipt-item">
                        <span>Total</span>
                        <span>${((payment.amount || 0) + (payment.lateFee || 0)).toFixed(2)}</span>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <span className={`payment-status status-${payment.status.toLowerCase()}`}>
                        {payment.status}
                    </span>
                </div>
            </div>

            <div className="mt-8 text-center">
                <button
                    onClick={handlePrint}
                    className="btn-primary"
                    data-name="print-receipt-button"
                >
                    <i className="fas fa-print mr-2"></i>
                    Print Receipt
                </button>
            </div>
        </div>
    );
}
