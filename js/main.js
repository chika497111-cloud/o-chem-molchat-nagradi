// ===== MODALS =====
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
  document.body.style.overflow = 'auto';
}

function closeOutside(event, id) {
  if (event.target.id === id) {
    closeModal(id);
  }
}

// Close modal on Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal').forEach(function(modal) {
      if (modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }
});

// ===== BURGER MENU =====
document.addEventListener('DOMContentLoaded', function() {
  var burger = document.querySelector('.burger');
  var navLinks = document.querySelector('.nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', function() {
      burger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        burger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // ===== SCROLL ANIMATIONS =====
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stagger animation for cards within sections
        var cards = entry.target.querySelectorAll('.award-card');
        cards.forEach(function(card, i) {
          setTimeout(function() {
            card.classList.add('visible');
          }, i * 80);
        });
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(function(section) {
    observer.observe(section);
  });

  // Also observe individual cards that might be outside sections
  document.querySelectorAll('.award-card').forEach(function(card) {
    // Cards will be animated by their parent section observer
  });
});
