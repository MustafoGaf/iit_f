import { useState } from "react";
import { addSlider } from "../../api/admin";
import { getImageBase64 } from "../../hooks/toBase64";
import "../../styles/addSlider.css";
import useLocalStorage from "../../hooks/useLocalstorage";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getSliders } from "../../api/sliders";
import Loading from "../Loading";

const API = import.meta.env.VITE_API_URL;
export default function AddSlider({ onClose }) {
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
  const addSliderFetch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(API + "/slider", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          link: e.target["link"].value,
          image: imageBase64,
          title_ru: e.target["title_ru"].value,
          title_en: e.target["title_en"].value,
          title_tj: e.target["title_tj"].value,
          order_number: 1,
        }),
      });

      const data = await response.json();
      setLoading(false);
      onClose();
      if (response.ok) {
        dispatch(getSliders());
      }
    } catch (error) {
      setLoading(false);
      onClose();
      if (response.status == 403) {
        setToken("");
        navigate("/login");
      }
      console.log(error);
    }
  };

  return (
    <div className="container_add_slider">
      {loading && <Loading />}

      <h1>Добавить новость</h1>
      <form id="newsForm" onSubmit={(e) => addSliderFetch(e)}>
        <div className="form-group">
          <label for="url">Ссылка на новость</label>
          <input type="url" id="url" name="link" required />
        </div>

        <div className="form-group">
          <label for="image">Изображение</label>
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
          <label for="description-ru">Описание на русском</label>
          <textarea id="description-ru" name="title_ru" required></textarea>
        </div>

        <div className="form-group">
          <label for="title_en">Description in English</label>
          <textarea id="description-en" name="title_en" required></textarea>
        </div>

        <div className="form-group">
          <label for="description-tj">Тавсифи ба тоҷикӣ</label>
          <textarea id="description-tj" name="title_tj" required></textarea>
        </div>

        <div className="form-group">
          <label for="number">Порядковый номер</label>
          <input
            type="number"
            id="number"
            name="order_number"
            min="1"
            required
          />
        </div>

        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}
