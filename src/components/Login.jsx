export default function Login() {
  return (
    <div class="login-container">
      <h2>Добро пожаловать!</h2>
      <form>
        <div class="input-group">
          <label for="email">Электронная почта</label>
          <input
            type="email"
            id="email"
            placeholder="example@mail.com"
            required
          />
        </div>
        <div class="input-group">
          <label for="password">Пароль</label>
          <input
            type="password"
            id="password"
            placeholder="Ваш пароль"
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
