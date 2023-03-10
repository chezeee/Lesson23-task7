const initGetWeather = () => {
  const btn = document.querySelector("#my-button");

  btn.addEventListener("click", () => {
    btn.setAttribute("disabled", "disabled");
    btn.textContent = "Loading...";

    setTimeout(() => {
      btn.removeAttribute("disabled");
      btn.textContent = "Get weather";
    }, 2000);
  });
};

// Sample usage - do not modify
initGetWeather();
