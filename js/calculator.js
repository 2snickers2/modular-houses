document.addEventListener("DOMContentLoaded", () => {
  const basePricePerM2 = 450; 
  const toggles = document.querySelectorAll(".toggle");
  const resultDiv = document.getElementById("result");
  const calcBtn = document.getElementById("calcBtn");
  const areaInput = document.getElementById("area");

  // Відсотки по етапах
  const prices = {
    fundament: 18,
    box: 28,
    windows: 13,
    engineer: 18,
    interior: 18,
  };

  const selectedOptions = {
    fundament: false,
    box: false,
    windows: false,
    engineer: false,
    interior: false,
  };

  toggles.forEach(toggle => {
    toggle.addEventListener("click", e => {
      const parentId = e.target.parentElement.id;
      const buttons = e.target.parentElement.querySelectorAll(".toggle");

      buttons.forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");

      selectedOptions[parentId] = e.target.textContent === "Так";
    });
  });

  calcBtn.addEventListener("click", () => {
    const area = parseFloat(areaInput.value);

    if (isNaN(area) || area <= 0) {
      resultDiv.textContent = "⚠️ Введіть правильну площу!";
      return;
    }

    const totalBase = basePricePerM2 * area;
    let total = 0;
    let details = "";

    for (const key in selectedOptions) {
      if (selectedOptions[key]) {
        const percent = prices[key];
        const stepCost = Math.round(totalBase * (percent / 100));
        total += stepCost;

        const names = {
          fundament: "Фундамент",
          box: "Стіни та дах",
          windows: "Вікна та двері",
          engineer: "Інженерні мережі",
          interior: "Внутрішні роботи",
        };

        details += `${names[key]} — ${percent}%: <b>${stepCost.toLocaleString("uk-UA", { maximumFractionDigits: 2 })}$</b><br>`;
      }
    }

      const grandTotal = Math.round(totalBase + total);
    
   resultDiv.innerHTML = `
      <p><b>Загальна вартість: ${grandTotal.toLocaleString("uk-UA", { maximumFractionDigits: 2 })}</b></p>
      `;
  });
});
    //  <p>Базова вартість будинку: <b>${Math.round(totalBase).toLocaleString("uk-UA")}$</b></p>
    //   ${details}
    //   <hr>