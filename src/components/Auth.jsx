export default function Auth() {
  return (
    <div class="login-container">
      <h2>Введите код который отправили по почта!</h2>
      <form>
        <div class="input-group">
          <label for="email">Введите код.</label>
          <input
            type="text"
            id="text"
            placeholder="*****"
            required
          />
        </div>
        <button class="btn" type="submit">
          Войти
        </button>
      </form>
      <div class="footer-text"></div>
    </div>
  );
}
