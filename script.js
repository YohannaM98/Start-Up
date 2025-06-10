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


