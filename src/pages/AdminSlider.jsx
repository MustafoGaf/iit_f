import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "../hooks/useLocalstorage";
import { useState } from "react";
import Modal from "../components/Modal";
import AddSlider from "../components/Admin/AddSlider";
import { getSliders } from "../api/sliders";
import { useNavigate } from "react-router";
import Loading from "../components/Loading";
import EditSlider from "../components/Admin/EditSlider";
const API = import.meta.env.VITE_API_URL;

export default function AdminSlider() {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(0);

  const [language, setLanguage] = useLocalStorage("language", "ru");
  const [openAdd, setOpenAdd] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const sliders = useSelector((state) => state.slider.data.data);
  const [token, setToken] = useLocalStorage("auth_token", "");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteSlider = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(API + "/slider/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        dispatch(getSliders());
      }
    } catch (error) {
      setLoading(false);

      if (false) {
        setToken("");
        navigate("/login");
      }
      console.log(error);
    }
  };

  const editSlider = (id) => {
    setId(id);
    setOpenModal(true);
  };

  if (!sliders) {
    return (
      <>
        {openAdd && <AddSlider onClose={() => setOpenAdd(false)} />}
        <div className="container_add">
          <button
            className="add-button"
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
          <section className="slide" key={slider.id}>
            <div className="slider_1">
              <img src={slider.image} alt="Slider" />
              <div className="descriptions">
                <h3>{slider["title_" + language]}</h3>
              </div>
            </div>
            <div className="edit_slider">
              <div title="Изменить" onClick={() => editSlider(slider.id)}>
                <img
                  src="data:image/png;base64,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"
                  alt="create-new"
                />
              </div>
              <div title="Удалить" onClick={() => deleteSlider(slider.id)}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFWUlEQVR4nO2d328UVRTH75OJ/geEds6922I797bEbimrhGJJV1tCItX+gIo0kbTRhhp/1AdtE8HtgyU8mEiNPGviD9L4jj7qA2jUJxIh+iCJPGAKLitEfRlzdndqC1tmbtN27pw9n+Qk7WZo5tzv3ntnPptZhGAYhmEYhmEYhmEYhmEYhqGO1vohUPo0KHMdlAki6ndQZh7/TdLnTRZQZj5GEKvKk+a9pM+bLFB51wdek9kTdWxjRu8NZ8rWnF0dAtV3/WYdz3AgbgBgfJD6k5ibc7DFdR2U/higrVXUAwD+AVD6jgMDHzy49B0pTZ+gzPbm9gZP6VvY8Gu5fHB5cDwoHp1yqi4Pjgev5vKVKzSlb+E5C6qAMuex0eO7nkx84IsRhedYnS3nBUW8jN+LDbY0tQc/D7k3M4r31NXhicBv2lkJBXS/SCtNTaYRpF70pLlda21+v+eZxAe7GLPwXNe42bztKf2llO0twvkwlFm6r4HEN2izqrr9ruVBx59Xvhb+HvP8l5zeY3Bm4Im+0LGvPOWTfocXN3E5O5rd5/4eEy5TlMMorgilunwVhavUZyD6T+EquNHhSeJ0phzK1eGJ4Plsd2XJknpRuApeddTa1AnX0vaMv0O4DF514EaHa6sDAxZsRpV7k3rR+TBq4Ul9rbyvTJ8JSu+cS2VdmT4TBvGbSDueMj9iM5dOFBIf2NI66+LUXDg7fhBpB6T5Gpu5MDGb+MCW1lkXxmfCDfwrkXY8pT/DZr4YeyPxgS2tsz4fez1csj4VaQekOYvNnBuZjGz85uxC8G7+uWBXSzboas0Ghfxg+bWkjg/ro5HJcMn6QKQdUOYUNnN64Hhk44X84LJ2CfVEoXcosePDmj/0YngTeFKkHU/qV7CZt/tHIxvvas2uuqHEn/G1pI4P663+0UogSk+JtAMZPYrNvLx/ILJxUOa+u2J8Lanjw3pp/0BlyQJzRKSdRtX2FDZzZM+BxAPpXqHdbQI5/ER/dYb4eZF2PK81i830d/YkHkixhpeKE0hfZ091hvgdIu1kMtrDZnIml9pAciZXPg4/gBNpZ9u2zkewmZbmnaldslqaK5+tNzQ8/rCgACh9Fxu6MbOQuk39xszZ6j2IviuoEFcwgoMzhJRYtBWM4OAeQkos2gpGcDAQUmLRVjCCg0sWKbFoKxjBwU2dlFi0FYzgYCCkxKKtYAQHAyElFm0FIzgYCCmxaCsYwcFASIlFW8EIDgZCSizaCkZwMBBSYtFWMIKDgZATizaCERwLhKRYtBGM4FggJMViiKfMT1GCERwLJBSLKEcFNeIIRnAsEJJi0UYwgmOBkBSLNoIRHAuEpFi0EYzgWCAkxaKNYIQNGGD8zGOj/j5JsWgjGGEDAsHaqL9PUizaCEZwLBCSYtFGMIJjgZAUizaCERwLhKRYtBGM4FggZMViXMEIDl1lkRaLcQUjOHQfQlos3isYv5uacz6QSycKdMViXMEIDgVCWizGFYxdNZ4B3G35zOBGHU9aLMYVjIXeoeVvEgq/cWcu/4CnajfxeNJiMa5gvDm7UB40fCfjOxcHK+q58806nrRYXM8j0qWEi7RYDPGUHsYmx7oPJj7gpYg6tvdgGMiwoAp+nzo2qR/tCP6Y/TDxQS+tUXjj6u94rBxIKr8TywaQ+nts9M2+w4kPfGmNmn56JLwHuSiog/8ZiyfNP+HS9e3kqciHQUtbNCu+mTz5/1Ilzd9K6d2iHgBoexak/qt6WeleSVOS0j8k6gkpfQBpFkDpXz2p/006BA/PQepf8L4DPypIenwYhmEYhmEYhmEYhmEYhmEYhmEYRmwF/wHBGZeWya7mywAAAABJRU5ErkJggg=="
                  alt="filled-trash"
                />
              </div>
            </div>
          </section>
        </>
      ))}
      {loading && <Loading />}
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <EditSlider id={id} onClose={() => setOpenModal(false)} />
      </Modal>
      <div className="container_add">
        <button
          className="add-button"
          title="Добавить новость"
          onClick={() => setOpenAdd(!openAdd)}
        >
          {openAdd ? "X" : "+"}
        </button>
        <h1>{openAdd ? "Закыть окно добавление" : "Добавить новое запис"}</h1>
      </div>
      {openAdd && <AddSlider onClose={() => setOpenAdd(false)} />}
    </>
  );
}
