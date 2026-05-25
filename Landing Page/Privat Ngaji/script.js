AOS.init({
  duration:1000,
  once:true
});

// FAQ

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

  question.addEventListener("click", () => {

    const answer = question.nextElementSibling;

    if(answer.style.display === "block"){
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }

  });

});