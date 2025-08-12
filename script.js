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
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    autoplay: {
      delay: 4000,   // 4 seconds
      disableOnInteraction: false,  // keep autoplay running after user interaction
    },
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
 const form = document.getElementById('legacyForm');
  const url = 'YOUR_WEB_APP_URL_HERE'; // replace with your Apps Script web app URL

  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      agreed: form.agreed.checked ? "Yes" : "No",
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(data => {
      alert('Thank you! Your details have been submitted.');
      form.reset();
    })
    .catch(err => {
      alert('Oops! Something went wrong.');
      console.error(err);
    });
  });