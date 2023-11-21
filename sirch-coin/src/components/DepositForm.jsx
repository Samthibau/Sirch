import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DepositForm() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [email, setEmail] = useState("");
  const [coinAmount, setCoinAmount] = useState("");
  const [totalUSD, setTotalUSD] = useState("Total USD");

  const handleAmountButtonClick = (amount) => {
    setSelectedAmount(amount);
    // Calculate corresponding coin amount based on the conversion rate
    setCoinAmount((amount / 0.1).toFixed(2));
    // Calculate total USD amount
    setTotalUSD(amount.toFixed(2));
  };

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCoinInputChange = (event) => {
    // Update the coin amount and recalculate the corresponding USD amount
    setCoinAmount(event.target.value);
    setSelectedAmount((event.target.value * 0.1).toFixed(2));
    // Calculate total USD amount
    setTotalUSD((event.target.value * 0.1).toFixed(2));
  };

  return (
    <>
      <h3 className="page-header">Buy Sirch Coins</h3>
      <div className="buy-container">
        <p className="page-text">
          Please enter an amount of USD that you'd like to spend buying Sirch
          Coins, and then press Buy.
        </p>
        <form>
          <div className="price-container">
            <div className="first-row">
              <button
                className="cash-btn"
                onClick={() => handleAmountButtonClick(20)}
              >
                $20
              </button>
              <button
                className="cash-btn"
                onClick={() => handleAmountButtonClick(40)}
              >
                $40
              </button>
              <button
                className="cash-btn"
                onClick={() => handleAmountButtonClick(100)}
              >
                $100
              </button>
              <input
                placeholder="Amount of Coin"
                required
                type="number"
                name="coin"
                id="coin"
                className="cash-input"
                value={coinAmount}
                onChange={handleCoinInputChange}
              />
            </div>
            <div className="second-row">
              <button
                className="cash-btn"
                onClick={() => handleAmountButtonClick(1000)}
              >
                $1000
              </button>
              <button
                className="cash-btn"
                onClick={() => handleAmountButtonClick(500)}
              >
                $500
              </button>
              <button
                className="cash-btn"
                onClick={() => handleAmountButtonClick(239)}
              >
                $239
              </button>
              <input
                placeholder="Your Email"
                required
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={emailChange}
                className="cash-input"
              />
            </div>
            <input
              placeholder="Total USD"
              readOnly
              type="text"
              name="totalUSD"
              id="totalUSD"
              className="total-input"
              value={totalUSD}
            />
          </div>
          <div className="bottom-btn-container">
            <Link to="/" className="big-btn-red">
              Back
            </Link>
            <button type="submit" className="big-btn-blue">
              Buy
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
