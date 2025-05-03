export default function Auth() {
  return (
    <div className="login-container">
      <h2>Введите код который отправили по почта!</h2>
      <form>
        <div className="input-group">
          <label for="email">Введите код.</label>
          <input type="text" id="text" placeholder="*****" required />
        </div>
        <button className="btn" type="submit">
          Войти
        </button>
      </form>
      <div className="footer-text"></div>
    </div>
  );
}
