import { useState } from "react";
import { addSlider } from "../../api/admin";
import { getImageBase64 } from "../../hooks/toBase64";
import "../../styles/addSlider.css";
import useLocalStorage from "../../hooks/useLocalstorage";
import { useNavigate } from "react-router";

export default function AddSlider() {
  const [token, setToken] = useLocalStorage("auth_token", "");
  const navigate = useNavigate();
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

    try {
      const response = await fetch("https://apiiit.vercel.app/slider", {
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
      if (response.ok) {
        console.log(">>>>>>", data, response.status);
      }
    } catch (error) {
      if (response.status == 403) {
        setToken("");
        navigate("/login");
      }
      console.log(error);
    }
  };

  return (
    <div class="container_add_slider">
      <h1>Добавить новость</h1>
      <form id="newsForm" onSubmit={(e) => addSliderFetch(e)}>
        <div class="form-group">
          <label for="url">Ссылка на новость</label>
          <input type="url" id="url" name="link" required />
        </div>

        <div class="form-group">
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

        <div class="form-group">
          <label for="description-ru">Описание на русском</label>
          <textarea id="description-ru" name="title_ru" required></textarea>
        </div>

        <div class="form-group">
          <label for="title_en">Description in English</label>
          <textarea id="description-en" name="title_en" required></textarea>
        </div>

        <div class="form-group">
          <label for="description-tj">Тавсифи ба тоҷикӣ</label>
          <textarea id="description-tj" name="title_tj" required></textarea>
        </div>

        <div class="form-group">
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
