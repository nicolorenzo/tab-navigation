const tabs = document.querySelectorAll('.tab a');

const contents = document.querySelectorAll('.content div');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    handleTabs(index);
  });
});

function handleTabs(index) {
  contents.forEach((content) => {
    content.classList.remove('active');
  });
  contents[index].classList.add('active');
}
