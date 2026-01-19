// ===== Infinite Scroll Enhancement =====
let blocksLoaded = 0;
const infiniteContent = document.getElementById("infinite-content");

function loadMoreContent() {
  if (blocksLoaded >= 3) return;

  const block = document.createElement("div");
  block.className = "card";
  block.innerHTML = `
    <h3>Academic Highlight</h3>
    <p>Selected publications, research summaries, or keynote insights.</p>
  `;
  infiniteContent.appendChild(block);
  blocksLoaded++;
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 200
  ) {
    loadMoreContent();
  }
});

// ===== Scroll Reveal Logic =====
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
