document.addEventListener("DOMContentLoaded", () => {
  const basePricePerM2 = 450;
  const toggles = document.querySelectorAll(".toggle");
  const resultDiv = document.getElementById("result");
  const calcBtn = document.getElementById("calcBtn");
  const areaInput = document.getElementById("area");
  const langMainBtn = document.getElementById("lang-main");
  const langButtons = document.querySelectorAll("[data-lang]");

  // поточна мова (за замовчуванням EN)
  let currentLang = langMainBtn.dataset.lang || "en";

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

  const names = {
    ua: {
      total: "Загальна вартість",
      error: "⚠️ Введіть правильну площу!",
      fundament: "Фундамент",
      box: "Стіни та дах",
      windows: "Вікна та двері",
      engineer: "Інженерні мережі",
      interior: "Внутрішні роботи"
    },
    en: {
      total: "Total cost",
      error: "⚠️ Enter a valid area!",
      fundament: "Foundation",
      box: "Walls and roof",
      windows: "Windows and doors",
      engineer: "Engineering systems",
      interior: "Interior works"
    }
  };

  toggles.forEach(toggle => {
    toggle.addEventListener("click", e => {
      const parentId = e.target.parentElement.id;
      const buttons = e.target.parentElement.querySelectorAll(".toggle");
      buttons.forEach(btn => btn.classList.remove("active"));
      e.target.classList.add("active");
      selectedOptions[parentId] = e.target.textContent.trim().toLowerCase() === "так" || e.target.textContent.trim().toLowerCase() === "yes";
    });
  });

  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      currentLang = selectedLang;
      langMainBtn.textContent = selectedLang.toUpperCase();
      langMainBtn.dataset.lang = selectedLang;
      updateResultLanguage();
    });
  });


  let lastGrandTotal = null;

  calcBtn.addEventListener("click", () => {
    const area = parseFloat(areaInput.value);

    if (isNaN(area) || area <= 0) {
      resultDiv.textContent = names[currentLang].error;
      return;
    }

    const totalBase = basePricePerM2 * area;
    let total = 0;

    for (const key in selectedOptions) {
      if (selectedOptions[key]) {
        const percent = prices[key];
        total += totalBase * (percent / 100);
      }
    }

    const grandTotal = Math.round(totalBase + total);
    lastGrandTotal = grandTotal;

    showResult(grandTotal);
  });

  function showResult(grandTotal) {
    const totalText = names[currentLang].total;
    resultDiv.innerHTML = `
      <div class="contact-section__container">
        <p><b>${totalText}: ${grandTotal.toLocaleString(currentLang === "ua" ? "uk-UA" : "en-US", { maximumFractionDigits: 2 })}$</b></p>
      </div>`;
  }

  function updateResultLanguage() {
    if (lastGrandTotal !== null) {
      showResult(lastGrandTotal);
    }
  }
});

    //  <p>Базова вартість будинку: <b>${Math.round(totalBase).toLocaleString("uk-UA")}$</b></p>
    //   ${details}
    //   <hr>