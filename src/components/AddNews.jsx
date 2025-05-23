import { use } from "react";
import useLocalStorage from "../hooks/useLocalstorage";
import { useNavigate } from "react-router";
const API = import.meta.env.VITE_API_URL;
export default function AddNews() {
  const [token, setToken] = useLocalStorage("auth_token", "");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(API + "/addnews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: e.target["title"].value,
        description: e.target["description"].value,
        date: e.target["date"].value,
        image: e.target["image-url"].value,
      }),
    });
  };
  return (
    <div className="container">
      <h1>Добавить новость</h1>
      <form className="news-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label for="title">Заголовок новости</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Введите заголовок"
            required
          />
        </div>

        <div className="form-group">
          <label for="description">Описание новости</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            placeholder="Введите описание новости"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label for="date">Дата</label>
          <input type="date" id="date" name="date" required />
        </div>

        <div className="form-group">
          <label for="image-url">Ссылка на изображение</label>
          <input
            type="url"
            id="image-url"
            name="image-url"
            placeholder="Введите URL изображения"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Добавить новость
        </button>
      </form>
    </div>
  );
}
