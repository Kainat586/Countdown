let countdownInterval;

function startCountdown() {
  const name = document.getElementById('eventName').value.trim();
  const date = document.getElementById('eventDate').value;
  const time = document.getElementById('eventTime').value;

  if (!name || !date || !time) {
    alert("⛔ Please enter all fields!");
    return;
  }

  const targetDate = new Date(`${date}T${time}:00`);

  if (targetDate <= new Date()) {
    alert("⚠️ Please enter a future date and time.");
    return;
  }

  document.getElementById('eventTitle').innerText = `Countdown to: ${name}`;
  document.getElementById('countdownSection').style.display = 'block';

  clearInterval(countdownInterval); // clear any existing countdown
  countdownInterval = setInterval(() => updateCountdown(targetDate), 1000);
  updateCountdown(targetDate);
}

function updateCountdown(targetDate) {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance <= 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdownSection').innerHTML = `<h2>🎉 ${document.getElementById('eventName').value} has started!</h2>`;
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}
