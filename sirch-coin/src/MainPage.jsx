export default function MainPage() {
  return (
    <>
      <h1>Welcome to Sirch Coin</h1>
      <p>
        Current price <span className="orange-underline-price">$0.10</span>{" "}
        Value $1.00
      </p>
      <a href="/coin/buy" className="buy--btn">
        Buy Sirch Coin
      </a>
    </>
  );
}
