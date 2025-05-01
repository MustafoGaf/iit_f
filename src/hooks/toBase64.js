export function getImageBase64(fileInput) {
  const file = fileInput.files[0];
  if (!file) {
    return "lll";
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const base64String = e.target.result;
    return base64String; // Возвращает base64 строку
  };
  reader.readAsDataURL(file); // Читает файл как data URL (base64)
  return file;
}
