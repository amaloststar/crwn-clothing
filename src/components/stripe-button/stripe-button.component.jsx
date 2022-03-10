import React from "react";
import StripeCheckout from "react-stripe-checkout";


const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Kbe3NCNrXLr5FXHYghhbW8ABXX36vAB8Vrkyf4cWOzjbgEWC0wm4tmgiyVhcNHwfLOwGRg9qqffO1s7zvyMrUU200ErJfaLgl';
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i.CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;