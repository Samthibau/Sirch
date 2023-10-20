import React, { useState } from "react";

export default function Checkout() {
  const [email, setEmail] = useState("");
  const [coin, setCoin] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const coinChange = (event) => {
    setCoin(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const data = {};

    data.email = email;
    data.coin = coin;

    const buyUrl =
      "https://sirchcoinv1-production.up.railway.app/api/v1/payments/initialize-payment";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(buyUrl, fetchConfig);
      if (response.ok) {
        const responseData = await response.json();
        setSuccessMessage(responseData.message);
        setEmail("");
        setCoin(0);
      } else {
        const errorMessage = `Error initializing payment. Status: ${response.status}`;
        setError(errorMessage);
      }
    } catch (error) {
      setError(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4" style={{ backgroundColor: "#FCF3DE" }}>
          <h1>Buy Sirch Coin</h1>
          <p>
            Current price per coin is{" "}
            <span className="orange-underline-price">$0.10</span> USD
          </p>
          <form id="buy-coin-form" onSubmit={handleSubmit}>
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
              <label htmlFor="email">Enter your email address</label>
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
              <label htmlFor="coin">How many coins do you want to buy</label>
            </div>
            {error && <div className="text-danger">{error}</div>}
            {successMessage && (
              <div className="text-success">{successMessage}</div>
            )}
            <button className="btn btn-dark">Buy Sirch Coin</button>
          </form>
        </div>
      </div>
    </div>
  );
}
