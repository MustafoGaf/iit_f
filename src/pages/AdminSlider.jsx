import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "../hooks/useLocalstorage";
import { useState } from "react";
import Modal from "../components/Modal";
import AddSlider from "../components/Admin/AddSlider";
import { getSliders } from "../api/sliders";
import { useNavigate } from "react-router";
const API = import.meta.env.VITE_API_URL;

export default function AdminSlider() {
  const [language, setLanguage] = useLocalStorage("language", "ru");
  const [openAdd, setOpenAdd] = useState(false);
  const sliders = useSelector((state) => state.slider.data.data);
  const [token, setToken] = useLocalStorage("auth_token", "");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteSlider = async (id) => {
    try {
      const response = await fetch(API + "/slider/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        console.log(">>>>>>", data, response.status);
        dispatch(getSliders());
      }
    } catch (error) {
      if (false) {
        setToken("");
        navigate("/login");
      }
      console.log(error);
    }
  };
  if (!sliders) {
    return (
      <>
        {openAdd && <AddSlider />}
        <div class="container_add">
          <button
            class="add-button"
            title="Добавить новость"
            onClick={() => setOpen(true)}
          >
            +
          </button>
          <h1>Добавить новое запис</h1>
        </div>
      </>
    );
  }
  return (
    <>
      {sliders.map((slider) => (
        <>
          <section class="slide" key={slider.id}>
            <div class="slider_1">
              <img src={slider.image} alt="Slider" />
              <div class="descriptions">
                <h3>{slider["title_" + language]}</h3>
              </div>
            </div>
            <div
              className="edit_slider"
              title="Удалить"
              onClick={() => deleteSlider(slider.id)}
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFWUlEQVR4nO2d328UVRTH75OJ/geEds6922I797bEbimrhGJJV1tCItX+gIo0kbTRhhp/1AdtE8HtgyU8mEiNPGviD9L4jj7qA2jUJxIh+iCJPGAKLitEfRlzdndqC1tmbtN27pw9n+Qk7WZo5tzv3ntnPptZhGAYhmEYhmEYhmEYhmEYhqGO1vohUPo0KHMdlAki6ndQZh7/TdLnTRZQZj5GEKvKk+a9pM+bLFB51wdek9kTdWxjRu8NZ8rWnF0dAtV3/WYdz3AgbgBgfJD6k5ibc7DFdR2U/higrVXUAwD+AVD6jgMDHzy49B0pTZ+gzPbm9gZP6VvY8Gu5fHB5cDwoHp1yqi4Pjgev5vKVKzSlb+E5C6qAMuex0eO7nkx84IsRhedYnS3nBUW8jN+LDbY0tQc/D7k3M4r31NXhicBv2lkJBXS/SCtNTaYRpF70pLlda21+v+eZxAe7GLPwXNe42bztKf2llO0twvkwlFm6r4HEN2izqrr9ruVBx59Xvhb+HvP8l5zeY3Bm4Im+0LGvPOWTfocXN3E5O5rd5/4eEy5TlMMorgilunwVhavUZyD6T+EquNHhSeJ0phzK1eGJ4Plsd2XJknpRuApeddTa1AnX0vaMv0O4DF514EaHa6sDAxZsRpV7k3rR+TBq4Ul9rbyvTJ8JSu+cS2VdmT4TBvGbSDueMj9iM5dOFBIf2NI66+LUXDg7fhBpB6T5Gpu5MDGb+MCW1lkXxmfCDfwrkXY8pT/DZr4YeyPxgS2tsz4fez1csj4VaQekOYvNnBuZjGz85uxC8G7+uWBXSzboas0Ghfxg+bWkjg/ro5HJcMn6QKQdUOYUNnN64Hhk44X84LJ2CfVEoXcosePDmj/0YngTeFKkHU/qV7CZt/tHIxvvas2uuqHEn/G1pI4P663+0UogSk+JtAMZPYrNvLx/ILJxUOa+u2J8Lanjw3pp/0BlyQJzRKSdRtX2FDZzZM+BxAPpXqHdbQI5/ER/dYb4eZF2PK81i830d/YkHkixhpeKE0hfZ091hvgdIu1kMtrDZnIml9pAciZXPg4/gBNpZ9u2zkewmZbmnaldslqaK5+tNzQ8/rCgACh9Fxu6MbOQuk39xszZ6j2IviuoEFcwgoMzhJRYtBWM4OAeQkos2gpGcDAQUmLRVjCCg0sWKbFoKxjBwU2dlFi0FYzgYCCkxKKtYAQHAyElFm0FIzgYCCmxaCsYwcFASIlFW8EIDgZCSizaCkZwMBBSYtFWMIKDgZATizaCERwLhKRYtBGM4FggJMViiKfMT1GCERwLJBSLKEcFNeIIRnAsEJJi0UYwgmOBkBSLNoIRHAuEpFi0EYzgWCAkxaKNYIQNGGD8zGOj/j5JsWgjGGEDAsHaqL9PUizaCEZwLBCSYtFGMIJjgZAUizaCERwLhKRYtBGM4FggZMViXMEIDl1lkRaLcQUjOHQfQlos3isYv5uacz6QSycKdMViXMEIDgVCWizGFYxdNZ4B3G35zOBGHU9aLMYVjIXeoeVvEgq/cWcu/4CnajfxeNJiMa5gvDm7UB40fCfjOxcHK+q58806nrRYXM8j0qWEi7RYDPGUHsYmx7oPJj7gpYg6tvdgGMiwoAp+nzo2qR/tCP6Y/TDxQS+tUXjj6u94rBxIKr8TywaQ+nts9M2+w4kPfGmNmn56JLwHuSiog/8ZiyfNP+HS9e3kqciHQUtbNCu+mTz5/1Ilzd9K6d2iHgBoexak/qt6WeleSVOS0j8k6gkpfQBpFkDpXz2p/006BA/PQepf8L4DPypIenwYhmEYhmEYhmEYhmEYhmEYhmEYRmwF/wHBGZeWya7mywAAAABJRU5ErkJggg=="
                alt="filled-trash"
              />
            </div>
          </section>
        </>
      ))}
      <div class="container_add">
        <button
          class="add-button"
          title="Добавить новость"
          onClick={() => setOpenAdd(!openAdd)}
        >
          {openAdd ? "X" : "+"}
        </button>
        <h1>{openAdd ? "Закыть окно добавление" : "Добавить новое запис"}</h1>
      </div>
      {openAdd && <AddSlider />}
    </>
  );
}
