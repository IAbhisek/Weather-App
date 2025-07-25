const button_click = () => {
  const click = document.getElementById("button");
  const city = document.getElementById("city");
  const city_name = document.getElementById("city_name");
  const city_time = document.getElementById("city_time");
  const city_temp = document.getElementById("city_temp");

  click.addEventListener("click", () => {
    const b = city.value;
    const a = city_data(b);
    city.value = "";
  });
};

async function city_data(city_value) {
  const data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=c91a14704fa54ce58a4181506252507&q=${city_value}&aqi=no`
  );
  const weather_data = await data.json();
  city_name.innerText = `${weather_data.location.name}`;
  city_time.innerText = `${weather_data.location.localtime}`;
  city_temp.innerText = `${weather_data.current.temp_c}°C`;
}
