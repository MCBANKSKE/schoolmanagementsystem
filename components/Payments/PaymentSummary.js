function PaymentSummary({ fees }) {
    const totalAmount = fees.reduce((sum, fee) => sum + fee.amount, 0);
    const totalLateFees = fees.reduce((sum, fee) => sum + calculateLateFees(fee.dueDate, fee.amount), 0);

    return (
        <div className="payment-card" data-name="payment-summary">
            <h3 className="text-xl font-semibold mb-4">Payment Summary</h3>
            <div className="space-y-4">
                {fees.map((fee, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b" data-name={`fee-item-${index}`}>
                        <div>
                            <p className="font-medium">{fee.description}</p>
                            <p className="text-sm text-gray-500">Due: {new Date(fee.dueDate).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                            <p className="font-medium">${fee.amount.toFixed(2)}</p>
                            {calculateLateFees(fee.dueDate, fee.amount) > 0 && (
                                <p className="text-sm text-red-600">
                                    +${calculateLateFees(fee.dueDate, fee.amount).toFixed(2)} late fee
                                </p>
                            )}
                        </div>
                    </div>
                ))}

                <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                        <p className="font-medium">Subtotal</p>
                        <p className="font-medium">${totalAmount.toFixed(2)}</p>
                    </div>
                    {totalLateFees > 0 && (
                        <div className="flex justify-between items-center text-red-600">
                            <p>Late Fees</p>
                            <p>${totalLateFees.toFixed(2)}</p>
                        </div>
                    )}
                    <div className="flex justify-between items-center text-lg font-bold mt-2">
                        <p>Total</p>
                        <p>${(totalAmount + totalLateFees).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
