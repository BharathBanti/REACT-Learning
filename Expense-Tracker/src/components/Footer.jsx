function Footer({totalSpend, totalTransactions}) {
  return (
    <footer className="footer-bar" aria-label="Expense summary">
      <p className="footer-bar__item">
        Total Spend: <span>${totalSpend}</span>
      </p>
      <p className="footer-bar__item">
        Budget: <span>$8987</span>
      </p>
      <p className="footer-bar__item">
        Balance: <span>$3422</span>
      </p>
      <p className="footer-bar__item">
        Total Transactions: <span>{totalTransactions}</span>
      </p>
    </footer>
  );
}

export default Footer;
