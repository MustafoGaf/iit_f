export const addSlider = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("https://apiiit.vercel.app/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        token: token,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setToken(data.token);
      console.log(">>>>>>", data);
    }
  } catch (error) {
    setToken("");
    navigate("/login");
  }
};
