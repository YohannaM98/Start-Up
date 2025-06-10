document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("scroll-container");
  const dots = document.querySelectorAll(".dot");

  container.addEventListener("scroll", () => {
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    const index = Math.round(scrollLeft / width);

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  });
});
const questions = document.querySelectorAll('.faq-question');

questions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;

    // Collapse all others
    document.querySelectorAll('.faq-answer').forEach((el) => {
      if (el !== answer) el.classList.remove('open');
    });

    // Toggle current one
    answer.classList.toggle('open');
  });
});
<script>
  // Show button when page is scrolled down 100px
  window.onscroll = function() {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };





