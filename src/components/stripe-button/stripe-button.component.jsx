import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    // const publishableKey = 'pk_test_n0dzzZD4l5DjYAR88bYYbguN00DHKFebny';

    const onToken = token => {
        console.log(token);
        alert('Payment Succes')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='SMD Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            // stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;