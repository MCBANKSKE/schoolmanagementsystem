function PaymentForm({ onSubmit, feeDetails }) {
    const [formData, setFormData] = React.useState({
        paymentMethod: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: ''
    });

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await onSubmit({
                ...formData,
                amount: feeDetails.amount,
                description: feeDetails.description
            });
        } catch (error) {
            setError(error.message);
            reportError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6" data-name="payment-form">
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" data-name="error-message">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                <div className="payment-method selected">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="credit"
                            checked={formData.paymentMethod === 'credit'}
                            onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                            className="mr-3"
                            data-name="payment-method-credit"
                        />
                        <div>
                            <p className="font-medium">Credit Card</p>
                            <p className="text-sm text-gray-500">Pay with your credit card</p>
                        </div>
                    </div>
                </div>

                <div className="payment-method">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="debit"
                            checked={formData.paymentMethod === 'debit'}
                            onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                            className="mr-3"
                            data-name="payment-method-debit"
                        />
                        <div>
                            <p className="font-medium">Debit Card</p>
                            <p className="text-sm text-gray-500">Pay with your debit card</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                    className="form-input"
                    placeholder="1234 5678 9012 3456"
                    required
                    data-name="card-number-input"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                    <input
                        type="text"
                        value={formData.expiryDate}
                        onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                        className="form-input"
                        placeholder="MM/YY"
                        required
                        data-name="expiry-date-input"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">CVV</label>
                    <input
                        type="text"
                        value={formData.cvv}
                        onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                        className="form-input"
                        placeholder="123"
                        required
                        data-name="cvv-input"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Name on Card</label>
                <input
                    type="text"
                    value={formData.nameOnCard}
                    onChange={(e) => setFormData({...formData, nameOnCard: e.target.value})}
                    className="form-input"
                    required
                    data-name="name-on-card-input"
                />
            </div>

            <button
                type="submit"
                className="btn-primary w-full"
                disabled={loading}
                data-name="submit-payment-button"
            >
                {loading ? (
                    <span className="flex items-center justify-center">
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Processing...
                    </span>
                ) : (
                    `Pay ${feeDetails.amount.toFixed(2)} USD`
                )}
            </button>
        </form>
    );
}
