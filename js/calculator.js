document.getElementById("calcBtn").addEventListener("click", function () {

  const basePricePerM2 = 490;

  const prices = {
    fundament: 18,
    box: 28,
    windows: 13,
    engineer: 18,
    interior: 18
  };

  const names = {
    ua: {
      total: "Загальна вартість",
      error: "Введіть правильну площу!",
      fundament: "Фундамент",
      box: "Стіни та дах",
      windows: "Вікна та двері",
      engineer: "Інженерні мережі",
      interior: "Внутрішні роботи",
      yes: "Так",
      no: "Ні",
      area: "Площа"
    },
    en: {
      total: "Total cost",
      error: "Enter a valid area!",
      fundament: "Foundation",
      box: "Walls and roof",
      windows: "Windows and doors",
      engineer: "Engineering systems",
      interior: "Interior works",
      yes: "Yes",
      no: "No",
      area: "Area"
    }
  };

  let currentLang =
    document.getElementById("lang-main")?.dataset.lang || "ua";

  // Отримання активного значення
  function getSelectedValue(id) {

    const activeBtn = document.querySelector(
      `#${id} .toggle.active`
    );

    if (!activeBtn) return false;

    return activeBtn.dataset.value === "yes";
  }

  // Дані користувача
  let name = document.getElementById("user-name")?.value || "";
  let email = document.getElementById("user-email")?.value || "";
  let phone = document.getElementById("user-phone")?.value || "";

  let area = parseFloat(
    document.getElementById("area").value
  );

  // Перевірка площі
  if (isNaN(area) || area <= 0) {

    document.getElementById("result").textContent =
      names[currentLang].error;

    return;
  }

  // Вибрані опції
  const selectedOptions = {
    fundament: getSelectedValue("fundament"),
    box: getSelectedValue("box"),
    windows: getSelectedValue("windows"),
    engineer: getSelectedValue("engineer"),
    interior: getSelectedValue("interior")
  };

  let totalBase = basePricePerM2 * area;

  let totalExtra = 0;

  let grandTotal = 0;

  // Чи є хоча б одне "Так"
  const hasSelectedOptions =
    Object.values(selectedOptions).some(value => value);

  // Якщо є вибрані опції
  if (hasSelectedOptions) {

    for (const key in selectedOptions) {

      if (selectedOptions[key]) {

        totalExtra +=
          totalBase * (prices[key] / 100);
      }
    }

    grandTotal = Math.round(
      totalBase + totalExtra
    );
  }

  // Вивід результату
  document.getElementById("result").textContent =
    `${names[currentLang].total}: ${grandTotal.toLocaleString(
      currentLang === "ua" ? "uk-UA" : "en-US",
      {
        style: "currency",
        currency: "USD"
      }
    )}`;

  // Текст для email
  let emailText =
    `${names[currentLang].area}: ${area} м²\n`;

  for (const key in selectedOptions) {

    emailText +=
      `${names[currentLang][key]}: ${selectedOptions[key]
        ? names[currentLang].yes
        : names[currentLang].no
      }\n`;
  }

  emailText +=
    `${names[currentLang].total}: ${grandTotal.toLocaleString(
      currentLang === "ua" ? "uk-UA" : "en-US",
      {
        style: "currency",
        currency: "USD"
      }
    )
    }`;

  // Дані EmailJS
  let params = {
    form_name: name,
    email: email,
    namber: phone,
    result: emailText
  };

  // Відправка
  emailjs
    .send(
      "service_40h17pf",
      "template_48r4afi",
      params
    )
    .then(() => {

      console.log(
        "Дані успішно відправлено!"
      );

    })
    .catch(err => {

      console.error(
        "Помилка при відправленні:",
        err
      );

    });

});


// Логіка toggle кнопок
document.querySelectorAll(".toggle-group").forEach(group => {

  const toggles = group.querySelectorAll(".toggle");

  toggles.forEach(toggle => {

    toggle.addEventListener("click", () => {

      toggles.forEach(t =>
        t.classList.remove("active")
      );

      toggle.classList.add("active");

    });

  });

});