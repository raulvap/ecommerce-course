// Lesson 155: STRIPE INTEGRATION
import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
   //Stripe needs the price in USD-cents
   const priceForStripe = price * 100;

   //Publishable Key from stripe-web-page
   const publishableKey =
      "pk_test_51IfxWbGBFKzQA2LfP9F9botOEdFrHSDKyOpYjqkNzp0qKrU0rBIparzJORFS4PvCri93iI30NxoEmTMdOBZX0JyV00gNQrfJvJ";

   // cheackout the documentation for STRIPE and for StripCheckout from "react-stripe-checkout"

   //With the token you wil pass this to the backend and make the charges
   const onToken = (token) => {
      console.log(token);
      alert("Payment Succesful!");
   };

   return (
      <StripeCheckout
         label="Pay now"
         name="E-commerce Demo"
         billingAddress
         shippingAddress
         image="https://svgshare.com/i/CUz.svg"
         description={`Your total is $ ${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publishableKey}
      />
   );
};

export default StripeCheckoutButton;
