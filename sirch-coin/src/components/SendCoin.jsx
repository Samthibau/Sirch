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
    console.log(data);

    data.recipientEmail = email;
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
    const response = await fetch(sendUrl, fetchConfig);
    if (response.ok) {
      setEmail("");
      setCoin(0);
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4" style={{ backgroundColor: "#FCF3DE" }}>
          <h1>Send Sirch Coin</h1>
          <p> Sending is super easy. Do it now.</p>
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
            <button className="btn btn-dark">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
