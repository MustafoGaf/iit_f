import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "../../hooks/useLocalstorage";
import { useNavigate } from "react-router";
import Loading from "../Loading";
import { getSliders } from "../../api/sliders";
const API = import.meta.env.VITE_API_URL;

export default function EditSlider({ id, onClose }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [newImage, setNewImage] = useState("");
  const [token, setToken] = useLocalStorage("auth_token", "");
  const dispatch = useDispatch();

  const sliders = useSelector((state) => state.slider.data.data).filter(
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

  const editSliderFetch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(API + "/slider/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          link: e.target["link"].value,
          image: newImage.length > 0 ? newImage : sliders[0].image,
          title_ru: e.target["title_ru"].value,
          title_en: e.target["title_en"].value,
          title_tj: e.target["title_tj"].value,
          order_number: e.target["order_number"].value,
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
        dispatch(getSliders());
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
          flexWrap: "wrap",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
        }}
        onSubmit={(e) => editSliderFetch(e)}
      >
        <div className="form-group">
          <label for="url">Ссылка на новость</label>
          <input
            type="url"
            id="url"
            name="link"
            defaultValue={sliders[0].link}
            required
          />
        </div>
        {console.log(id, sliders)}

        <div className="form-group">
          <label for="image">Изображение</label>
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
                src={sliders[0].image}
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
          <textarea
            id="description-ru"
            name="title_ru"
            defaultValue={sliders[0].title_ru}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label for="title_en">Description in English</label>
          <textarea
            id="description-en"
            name="title_en"
            defaultValue={sliders[0].title_en}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label for="description-tj">Тавсифи ба тоҷикӣ</label>
          <textarea
            id="description-tj"
            name="title_tj"
            defaultValue={sliders[0].title_tj}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label for="number">Порядковый номер</label>
          <input
            type="number"
            id="number"
            name="order_number"
            min="1"
            defaultValue={sliders[0].order_number}
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
