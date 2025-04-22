export default function Login() {
  return (
    <div className="login-container">
      <h2>Добро пожаловать!</h2>
      <form>
        <div className="input-group">
          <label htmlFor="email">Электронная почта</label>
          <input
            type="email"
            id="email"
            placeholder="example@mail.com"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            placeholder="Ваш пароль"
            required
          />
        </div>
        <button className="btn" type="submit">
          Войти
        </button>
      </form>
      <div className="footer-text"></div>
    </div>
  );
}
