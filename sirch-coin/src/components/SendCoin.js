import React, { useState } from "react";

export default function SendCoin() {
  const [email, setEmail] = useState("");
  const [coin, setCoin] = useState(0);

  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const coinChange = (event) => {
    setCoin(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};

    data.email = email;
    data.coin = coin;

    const sendUrl =
      "https://sirchcoinv1-production.up.railway.app/api/v1/customers/transfer-coins";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const send = await fetch(sendUrl, fetchConfig);
    if (send.ok) {
      setEmail("");
      setCoin(0);
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Send Sirch Coin</h1>
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
              />
              <label htmlFor="email">Enter any Email</label>
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
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}
