// ratingButtons (todos os botões que apresentam valores de 1 à 5)
// submitButton (botão de confirmação do valor selecionado)
const ratingButtons = document.querySelectorAll(".button");
const submitButton = document.querySelector(".submit-button");

// buttonsEssencials (conjunto das principais funções dos botões)
function buttonsEssencials(index) {
  // activeClass (função responsável por adicionar a classe active no botão selecionado)
  function activeClass() {
    ratingButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    ratingButtons[index].classList.add("active");

    return ratingButtons[index];
  }
  activeClass();

  // buttonSelectedValue (armazena o valor do botão na constante value)
  function buttonSelectedValue() {
    const buttonSelected = ratingButtons[index];
    const value = buttonSelected.dataset.id;
    // console.log(value);
    return value;
  }

  // thankyou message
  function thankYouMessage() {
    if (ratingButtons[index].classList.contains("active")) {
      submitButton.addEventListener('click', () => {
        const dataDisplay = document.querySelector("[data-display");
        const dataMessage = document.querySelector("[data-message");

        setTimeout(() => {
          dataMessage.classList.remove("display-none");
          dataDisplay.classList.add("display-none");

          const paragraph = document.querySelector(".message");
          paragraph.innerText = `You selected ${buttonSelectedValue()} out of ${ratingButtons.length}`;
        }, 1000);
      });
    }
  }
  thankYouMessage();
}

ratingButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    buttonsEssencials(index);
  });
});
