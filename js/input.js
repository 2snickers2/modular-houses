document.querySelectorAll('.custom-select').forEach(select => {
  const selected = select.querySelector('.select-selected');
  const items = select.querySelector('.select-items');

  selected.addEventListener('click', () => {
    selected.classList.toggle('active');
    items.style.display = items.style.display === 'flex' ? 'none' : 'flex';
  });

  items.querySelectorAll('div').forEach(option => {
    option.addEventListener('click', () => {
      selected.textContent = option.textContent;
      items.style.display = 'none';
      selected.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!select.contains(e.target)) {
      items.style.display = 'none';
      selected.classList.remove('active');
    }
  });
});