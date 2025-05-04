import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "../../hooks/useLocalstorage";
import { useNavigate } from "react-router";
import Loading from "../Loading";
import { getNews } from "../../api/sliders";
const API = import.meta.env.VITE_API_URL;

export default function EditNews({ id, onClose }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [newImage, setNewImage] = useState("");
  const [token, setToken] = useLocalStorage("auth_token", "");
  const dispatch = useDispatch();

  const news = useSelector((state) => state.news.data.data).filter(
    (s) => s.id == id
  );
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Получаем выбранный файл
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result); // Сохраняем строку base64 в состояние
      };
      reader.readAsDataURL(file); // Читаем файл как Data URL (base64)
    }
  };

  const editNewsFetch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(API + "/news/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          image: newImage.length > 0 ? newImage : news[0].image,
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
      console.log(response);
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
      console.log(error.status);
    }
  };
  useEffect(() => {
    return () => {
      setLoading(false);
      setNewImage("");
    };
  }, []);
  return (
    <div className="container_add_slider">
      {loading && <Loading />}
      <h1>Изменить новость</h1>
      <form
        id="newsForm editSlider"
        style={{
          alignContent: "center",
          justifyContent: "center",
          flexWrap: "column",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
        onSubmit={(e) => editNewsFetch(e)}
      >
        <div className="form-group">
          <label htmlFor="image">Изображение</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <br />
          <div>
            {newImage.length > 0 ? (
              <>
                <img
                  src={newImage}
                  alt=""
                  style={{
                    height: "200px",
                    width: "300px",
                    "object-fit": "contain",
                  }}
                />
                <button onClick={() => setNewImage("")}>X</button>
              </>
            ) : (
              <img
                src={news[0].image}
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
          <label htmlFor="description-ru">Заголовок (RU)</label>
          <textarea
            id="description-ru"
            name="title_ru"
            defaultValue={news[0].title_ru}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="title_en">Заголовок (EN)</label>
          <textarea
            id="description-en"
            name="title_en"
            defaultValue={news[0].title_en}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="description-tj">Заголовок (TJ)</label>
          <textarea
            id="description-tj"
            name="title_tj"
            defaultValue={news[0].title_tj}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="description-ru">Дата публикаця</label>
          <input
            type="datetime-local"
            id="created_at"
            name="created_at"
            defaultValue={new Date(news[0].created_at)
              .toISOString()
              .slice(0, 16)}
            required
          />
        </div>
        {/* des */}
        <div className="form-group">
          <label htmlFor="desc_ru">Описание (RU)</label>
          <textarea
            id="desc_ru"
            name="desc_ru"
            defaultValue={news[0].desc_ru}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="desc_en">Описание (EN)</label>
          <textarea
            id="desc_en"
            name="desc_en"
            defaultValue={news[0].desc_en}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="desc_tj">Описание (TJ)</label>
          <textarea
            id="desc_tj"
            name="desc_tj"
            defaultValue={news[0].desc_tj}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="number">Порядковый номер</label>
          <input
            type="number"
            id="number"
            name="order_number"
            min="1"
            defaultValue={news[0].order_number}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Активна</label>
          <input
            type="checkbox"
            id="is_active"
            name="is_active"
            defaultChecked={news[0].is_active}
            required
          />
        </div>
        <br />
        <div>
          <button type="submit">Сохранить</button>
        </div>
      </form>
    </div>
  );
}
