document.querySelectorAll(".wrapper").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".target").forEach((item) => {
        item.classList.remove("change");
      });
    });
  });