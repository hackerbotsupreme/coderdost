import ShippingForm from './ShippingForm3.jsx';

export default function ProductPage({ productId, referrer, theme }) {
    function handleSubmit(orderDetails) {
        post('/product/' + productId + '/buy', {
            referrer,
            orderDetails,
        });
    }

    return (
        <div className={theme}>
            <ShippingForm onSubmit={handleSubmit} />
        </div>
    );
}

function post(url, data) {
    // Imagine this sends a request...
    console.log('POST /' + url);
    console.log(data);
}
