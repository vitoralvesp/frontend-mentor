const dtList = document.querySelectorAll('.questions dt');
const ddList = document.querySelectorAll('.questions dd');

function activeClass(index) {
  ddList[index].classList.toggle("display-block");
}

dtList.forEach((dt, index) => {
  dt.addEventListener('click', () => {
    dt.classList.toggle("active");
    activeClass(index);
  });
});
