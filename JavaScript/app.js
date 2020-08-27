const cardContent = document.querySelectorAll(".answer-content ");
const conteinerCard = document.querySelectorAll(".container-card");
const pregunta1 = document.getElementById("pregunta1");
const pregunta2 = document.getElementById("pregunta2");

conteinerCard.forEach((card) => {
  card.addEventListener("click", () => {
    cardContent.forEach((cards) => {
      cards.classList.add("open");
    });
  });
});
