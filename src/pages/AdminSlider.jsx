import { useSelector } from "react-redux";
import useLocalStorage from "../hooks/useLocalstorage";
import { useState } from "react";
import Modal from "../components/Modal";
import AddSlider from "../components/Admin/AddSlider";

export default function AdminSlider() {
  const [language, setLanguage] = useLocalStorage("language", "ru");
  const [openAdd, setOpenAdd] = useState(false);
  const sliders = useSelector((state) => state.slider.data.data);
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
            <div className="edit_slider" title="Изменить">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABpElEQVR4nO2XwUoCURSGr5spfAM3LWolWJtZqLhpFwTRE+S2VaD3Du2ihU8QRFgiuY1IzY2EqSOO26IWQYSSOhNttOYFOnFNbTCzTXDvwPng7L//P3OGGUIQBEH+k248HrIY61iM3b/GYovETbwwplqU9i3GYDidtqYtETeQLRnhylnuytK0kfxgTErb0m8iWzLCuYph5ysNKJ/ndFPTPpwhpN5E1iE/Gh5ichMWpXdENuCIqL1M4DZfrvecAfhcXxQazhAmpc9ENnlIkj4kCfQz/uasECZjNn87ERnlYTi9U39rWgh+2NLLw3B+bsJ4v6zW3SEPEyH4YcsmH4IksWfJw/hxCtwUdD1M3NQ8fI/NwxJZQHlRYPOiwOZFgc2LApsXBTYvCsAPM0EANi8IwOYFAUWvD9KeR1f+BnKgOr8FumJC2tN1nTwHakoaanPwRwg55TmgK61BgN9DyCt/uLcS1E8WvuSnh5BXnpPQ1FRkfQOqqakhHqSW5+xsR56Ca5swDqErzcFN8MMuen1EdqLR1TceIrGrHh/sL8vdNoIgxNV8AvWmTRYbzpX3AAAAAElFTkSuQmCC"
                alt="edit--v1"
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
