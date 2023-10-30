import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

export default function CheckoutForm() {
  const [email, setEmail] = useState("");
  const [coin, setCoin] = useState(0);
  const [totalUSD, setTotalUSD] = useState(0);

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const coinChange = (event) => {
    const numberOfCoins = parseFloat(event.target.value);
    setCoin(numberOfCoins);
    const pricePerCoin = 0.1;
    const calculatedUSD = numberOfCoins * pricePerCoin;
    setTotalUSD(calculatedUSD);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};

    data.email = email;
    data.numberOfCoins = coin;

    const initializePaymentUrl =
      "https://sirchcoinv1-production.up.railway.app/api/v1/payments/initialize-payment";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(initializePaymentUrl, fetchConfig);
    if (response.ok) {
      setEmail("");
      setCoin(0);
      setTotalUSD(0);
    }
  };

  let stripePromise;
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe("pk_test_6rOaG7p9vtW2VyduXtVfr7JV00sqg9HpxQ");
    }

    return stripePromise;
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4" style={{ backgroundColor: "#FCF3DE" }}>
          <h1>Buy Sirch Coin</h1>
          <p> Buying is super easy.</p>
          <p>
            Current price per coin {""}
            <span className="orange-underline-price">$0.10</span>
          </p>
          <form id="create-conference-form" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                placeholder="Email"
                required
                type="email"
                name="email"
                id="email"
                className="form-control"
                value={email}
                onChange={emailChange}
                autoComplete="email"
              />
              <label htmlFor="email">Enter any email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                placeholder="Amount of Coin"
                required
                type="number"
                name="coin"
                id="coin"
                className="form-control"
                value={coin}
                onChange={coinChange}
              />
              <label htmlFor="coin">Enter Amount of Coin</label>
            </div>
            <p>
              <strong>Total USD: ${totalUSD.toFixed(2)}</strong>
            </p>
            <button className="btn btn-dark">Buy</button>
          </form>
        </div>
      </div>
    </div>
  );
}
