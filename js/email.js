function getSelectedValue(id) {
  const toggles = document.querySelectorAll(`#${id} .toggle`);
  let selected = '';
  toggles.forEach(t => {
    if (t.classList.contains('active')) {
      selected = t.textContent.trim();
    }
  });
  return selected;
}

document.querySelectorAll('.toggle-group .toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.querySelectorAll('.toggle').forEach(t => t.classList.remove('active'));
    toggle.classList.add('active');
  });
});

document.getElementById("calcBtn").addEventListener("click", function() {
  let name = document.getElementById('user-name').value;
  let email = document.getElementById('user-email').value;
  let phone = document.getElementById('user-phone').value;

  let area = document.getElementById('area').value;
  let fundament = getSelectedValue('fundament');
  let box = getSelectedValue('box');
  let windows = getSelectedValue('windows');
  let engineer = getSelectedValue('engineer');
  let interior = getSelectedValue('interior');
  let result = document.getElementById('result').textContent.trim();


  let params = {
    form_name: name,
    email: email,
    namber: phone,
    area: area,
    fundament: fundament,
    box: box,
    windows: windows,
    engineer: engineer,
    interior: interior,
    result: result
  };
  emailjs.send("service_40h17pf","template_48r4afi", params)
      .then(() => console.log("Дані успішно відправлено!"))
      .catch(err => console.error("Помилка при відправленні:", err));

});
