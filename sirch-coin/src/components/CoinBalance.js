import React, { useState } from "react";

export default function CoinBalance() {
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState("");

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const fetchBalance = async (event) => {
    event.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required to fetch the balance.");
      return;
    }

    const fetchUrl =
      "https://sirchcoinv1-production.up.railway.app/api/v1/customers/balance";
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(fetchUrl, fetchConfig);

      if (response.ok) {
        const result = await response.json();
        setBalance(result.balance);
      } else {
        const errorMessage = `Error fetching balance. Status: ${response.status}`;
        setError(errorMessage);
      }
    } catch (error) {
      setError(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Sirch Coin Balance</h1>
          <form id="create-conference-form" onSubmit={fetchBalance}>
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
              <label htmlFor="email">Enter your Email:</label>
            </div>
            <button className="btn btn-primary" type="submit">
              Get Balance
            </button>
          </form>
          {error && <p className="text-danger">{error}</p>}
          {balance !== null && <h4>Your Balance: {balance}</h4>}
        </div>
      </div>
    </div>
  );
}
