import React, { useState } from "react";

export default function SendCoin() {
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [coin, setCoin] = useState(0);

  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const userEmailChange = (event) => {
    setUserEmail(event.target.value);
  };
  const coinChange = (event) => {
    setCoin(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};

    data.recipientEmail = email;
    data.senderEmail = userEmail;
    data.numberOfCoins = coin;

    const sendUrl =
      "https://sirchcoinv1-production.up.railway.app/api/v1/customers/transfer-coins";

    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(sendUrl, fetchConfig);
      if (response.ok) {
        setEmail("");
        setUserEmail("");
        setCoin(0);
      } else {
        console.error(
          "Failed to send coins. Server responded with",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("An error occurred during the fetch:", error);
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Send Sirch Coin</h1>
          <p> Sending is super easy. Do it now.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                placeholder="Email"
                required
                type="email"
                name="userEmail"
                id="userEmail"
                className="form-control"
                value={userEmail}
                onChange={userEmailChange}
                autoComplete="email"
              />
              <label htmlFor="userEmail">Enter your email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                placeholder="Email"
                required
                type="email"
                name="email"
                id="recipientEmail"
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
