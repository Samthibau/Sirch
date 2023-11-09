export default function MainPage() {
  return (
    <>
      <h3 className="page-header">Avaliable Transactions</h3>
      <div className="button-container">
        <a href="coin/send">Send Money</a>

        <a href="checkout">Deposit</a>

        <a href="coin/balance">Balance Inquiry</a>

        <a href="/#">Transfer History</a>

        <a href="/#">Preferences</a>

        <a href="/#">Help</a>
      </div>
    </>
  );
}
