 const whatsappBtn = document.getElementById('whatsapp-btn');
  const callBtn = document.getElementById('call-btns');

  let showWhatsApp = true;

  // Initial state
  whatsappBtn.style.display = 'flex';
  callBtn.style.display = 'none';
  document.getElementById('whatsapp-btn').onclick = function() {
    window.location.href = 'tel:7314006666';
  };
  document.getElementById('call-btns').onclick = function() {
    window.location.href = 'tel:7314006666';
  };
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





  document.addEventListener('DOMContentLoaded', function () {
  const citySelect = document.getElementById('cityFilter');
  const cards = document.querySelectorAll('.wedding-card-item');

  function filterCards() {
    const selectedCity = citySelect.value.toLowerCase();

    cards.forEach(card => {
      const cardCity = card.getAttribute('data-city').toLowerCase();

      const cityMatch = !selectedCity || cardCity === selectedCity;

      if (cityMatch) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  citySelect.addEventListener('change', filterCards);

  // Optional: show all on load
  citySelect.value = '';
  filterCards(); // show all initially
});




//for the terms and condition in section 2
document.querySelector('form').addEventListener('submit', function(e) {
  const checkbox = document.querySelector('input[name="agreed"]');
  if (!checkbox.checked) {
    e.preventDefault();
    alert('You must agree to the Terms & Conditions before continuing.');
  }
});
