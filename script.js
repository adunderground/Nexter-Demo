container = document.querySelector('.container');
sidebar = document.querySelector('.sidebar');
sidebarBtn = document.querySelector('.btn-container');

document.querySelectorAll('svg.home__like').forEach((heart) => {
  heart.addEventListener('click', (e) => {
    heart.classList.toggle('home__like--liked');
  });
});

sidebarBtn.addEventListener('click', () => {
  container.classList.toggle('container--sidebarshow');
  sidebar.querySelector('.sidebar__list').classList.toggle('sidebar__list--show');
  sidebarBtn.classList.toggle('btn-container--back');
});
