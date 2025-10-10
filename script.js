// Countdown-funktion
function countdown(id, targetDate) {
  const element = document.getElementById(id);

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      element.textContent = "Dagen är här! 🎉";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    element.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  update();
  setInterval(update, 1000);
}

// Sätt datumen här
const nextTrip = new Date("2025-12-20T10:00:00");  // Ändra!
const nextProject = new Date("2026-02-01T12:00:00");  // Ändra!

countdown("trip-countdown", nextTrip);
countdown("project-countdown", nextProject);
