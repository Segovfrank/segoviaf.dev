// segoviaf.dev: blocks rise in once as they reach the screen. Without script everything is simply visible.
document.documentElement.classList.add("js");

const blocks = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }),
    { rootMargin: "0px 0px 10% 0px" }
  );
  blocks.forEach((b) => io.observe(b));
} else {
  blocks.forEach((b) => b.classList.add("in"));
}
