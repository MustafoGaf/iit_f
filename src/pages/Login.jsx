import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router";
export default function Login() {
  const [user, setUser] = useState([]);
  const inputsRef = useRef([]);
  const [searchParams, setSerachParams] = useSearchParams();
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    searchParams.get("code");
  }, [searchParams]);
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    e.target.value = value;

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    if (user.length == 0) {
      setSerachParams({
        code: String(0),
      });
    } else {
      e.preventDefault();
      const code = inputsRef.current.map((input) => input.value).join("");
      console.log("Code submitted:", code);
      // тут отправка кода на сервер
      try {
        const response = await fetch("http://localhost:3001/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user[0].email,
            password: user[0].password,
            vcode: code,
          }),
        });

        const data = await response.json();
      } catch (error) {
        console.log(error);
        setSerachParams({
          code: String(0),
        });
      }
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target["email"].value,
          password: e.target["password"].value,
        }),
      });

      const data = await response.json();
      console.log("data = ", data);

      if (data.code) {
        setSerachParams({
          code: String(data.code),
        });
        setUser([
          {
            email: e.target["email"].value,
            password: e.target["password"].value,
          },
        ]);
      }
    } catch (error) {
      console.log(error);
      setSerachParams({
        code: String(0),
      });
    }
  };

  if (searchParams.get("code") == 1) {
    return (
      <div className="sms-container">
        <h2>Подтверждение</h2>
        <p>Введите 6-значный код, отправленный вам в SMS</p>
        <form onSubmit={handleSubmit}>
          <div className="code-inputs">
            {Array.from({ length: 6 }).map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength="1"
                inputMode="numeric"
                pattern="\d*"
                ref={(el) => (inputsRef.current[i] = el)}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                required
              />
            ))}
          </div>
          <button className="btn" type="submit">
            Подтвердить
          </button>
        </form>
        <div className="resend">
          <Link to={"/login"}>Назад</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div class="login-container">
        <h2>Добро пожаловать!</h2>
        <form onSubmit={(e) => formSubmit(e)}>
          <div class="input-group">
            <label for="email">Электронная почта</label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              name="email"
              required
            />
          </div>
          <div class="input-group">
            <label for="password">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
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
}
