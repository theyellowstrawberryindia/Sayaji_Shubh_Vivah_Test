>
  // WhatsApp and Call button toggle
  const whatsappBtn = document.getElementById('whatsapp-btn');
  const callBtn = document.getElementById('call-btn');

  let showWhatsApp = true;

  // Initial state
  whatsappBtn.style.display = 'flex';
  callBtn.style.display = 'none';

  setInterval(() => {
    if (showWhatsApp) {
      whatsappBtn.style.display = 'none';
      callBtn.style.display = 'flex';
    } else {
      whatsappBtn.style.display = 'flex';
      callBtn.style.display = 'none';
    }
    showWhatsApp = !showWhatsApp;
  }, 5000); // 5 seconds toggle

  // Carousel buttons scroll functionality
  const track = document.querySelector('.carousel-track');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: 320, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -320, behavior: 'smooth' });
  });

