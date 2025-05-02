import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router";
import useLocalStorage from "../hooks/useLocalstorage";
const API = import.meta.env.VITE_API_URL;
export default function Login() {
  const [token, setToken] = useLocalStorage("auth_token", "");
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const inputsRef = useRef([]);
  const [rez, setRez] = useState({});
  const [searchParams, setSerachParams] = useSearchParams();
  useEffect(() => {
    inputsRef.current[0]?.focus();
    return () => {
      setRez({}), setUser([]);
    };
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
  // аутентификация
  const handleSubmit = async (e) => {
    setRez({});
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
        const response = await fetch(API + "/auth", {
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
        if (response.ok) {
          setToken(data.token);
          navigate("/admin");
        }
      } catch (error) {
        console.log(error);
        setSerachParams({
          code: String(0),
        });
      }
    }
  };
  // регистрация
  const formSubmit = async (e) => {
    e.preventDefault();
    setRez({});
    try {
      const response = await fetch(API + "/login", {
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
      setRez({
        code: String(data.code) || 0,
        message: String(data.message) || "",
        status: String(data.status) || 200,
      });
      console.log(rez);
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
      setRez({
        code: String(data.code) || 0,
        message: String(data.message) || "",
        status: String(data.status) || 200,
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
      <div className="login-container">
        <h2>Добро пожаловать!</h2>
        <form onSubmit={(e) => formSubmit(e)}>
          <div className="input-group">
            <label htmlFor="email">Электронная почта</label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              name="email"
              onInput={() => setRez({})}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ваш пароль"
              onInput={() => setRez({})}
              required
            />
          </div>
          <p className="error_rez">{rez.message}</p>
          <button className="btn" type="submit">
            Войти
          </button>
        </form>
        <div className="footer-text"></div>
      </div>
    );
  }
}
