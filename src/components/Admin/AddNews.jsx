import { useState } from "react";
import "../../styles/addNews.css";
import Loading from "../Loading";
import useLocalStorage from "../../hooks/useLocalstorage";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getNews } from "../../api/sliders";
const API = import.meta.env.VITE_API_URL;

export default function AddNews({ onClose }) {
  const [token, setToken] = useLocalStorage("auth_token", "");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const [imageBase64, setImageBase64] = useState("");
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Получаем выбранный файл
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result); // Сохраняем строку base64 в состояние
      };
      reader.readAsDataURL(file); // Читаем файл как Data URL (base64)
    }
  };
  const addNewsFetch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(API + "/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          image: imageBase64,
          title_ru: e.target["title_ru"].value,
          title_en: e.target["title_en"].value,
          title_tj: e.target["title_tj"].value,
          desc_ru: e.target["desc_ru"].value,
          desc_en: e.target["desc_en"].value,
          desc_tj: e.target["desc_tj"].value,
          created_at: e.target["created_at"].value,
          order_number: e.target["order_number"].value,
          is_active: e.target["is_active"].checked,
        }),
      });
      if (response.status == 403) {
        setToken("");
        navigate("/login");
      }
      const data = await response.json();

      setLoading(false);
      onClose();
      if (response.ok) {
        dispatch(getNews());
      }
    } catch (error) {
      setLoading(false);
      onClose();

      console.log(error);
    }
  };

  return (
    <form className="form-container" onSubmit={(e) => addNewsFetch(e)}>
      {loading && <Loading />}
      <h2>Добавить новость</h2>
      <div className="form-group">
        <label htmlFor="image">Изображение</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />
        <br />
        <div>
          {imageBase64 && (
            <img
              src={imageBase64}
              alt=""
              style={{
                height: "200px",
                width: "300px",
                "object-fit": "contain",
              }}
            />
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="title_ru">Заголовок (RU)</label>
        <input type="text" id="title_ru" name="title_ru" required />
      </div>

      <div className="form-group">
        <label htmlFor="title_en">Заголовок (EN)</label>
        <input type="text" id="title_en" name="title_en" required />
      </div>

      <div className="form-group">
        <label htmlFor="title_tj">Заголовок (TJ)</label>
        <input type="text" id="title_tj" name="title_tj" required />
      </div>
      <div className="form-group">
        <label htmlFor="created_at">Дата публикаця</label>
        <input
          type="datetime-local"
          id="created_at"
          name="created_at"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="desc_ru">Описание (RU)</label>
        <textarea id="desc_ru" name="desc_ru" required></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="desc_en">Описание (EN)</label>
        <textarea id="desc_en" name="desc_en" required></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="desc_tj">Описание (TJ)</label>
        <textarea id="desc_tj" name="desc_tj" required></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="order_number">Порядковый номер</label>
        <input
          type="number"
          id="order_number"
          name="order_number"
          min="1"
          defaultValue={1}
          required
        />
      </div>

      <div className="form-group checkbox">
        <input type="checkbox" id="is_active" name="is_active" />
        <label htmlFor="is_active">Активна</label>
      </div>

      <div className="form-group">
        <button type="submit">Сохранить</button>
      </div>
    </form>
  );
}
