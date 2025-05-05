const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const keFahrenheitBtn = document.getElementById("keFahrenheit");
const keCelsiusBtn = document.getElementById("keCelsius");
const hasil = document.getElementById("hasil");

keFahrenheitBtn.addEventListener("click", function() {
  const celsius = parseFloat(celsiusInput.value);
  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9/5) + 32;
    hasil.textContent = `${celsius}°C = ${fahrenheit}°F`;
  } else {
    hasil.textContent = "Masukkan angka yang valid untuk Celsius!";
  }
});

keCelsiusBtn.addEventListener("click", function() {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  if (!isNaN(fahrenheit)) {
    const celsius = (fahrenheit - 32) * 5/9;
    hasil.textContent = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
  } else {
    hasil.textContent = "Masukkan angka yang valid untuk Fahrenheit!";
  }
});
