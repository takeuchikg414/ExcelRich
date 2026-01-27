// ========================================
// Navigation Functionality
// ========================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Handle scroll effect on navbar
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 90; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Scroll Animations (Smooth and Subtle)
// ========================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

// Track which elements have already been animated
const animatedElements = new Set();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting && !animatedElements.has(entry.target)) {
            // Add a subtle staggered delay based on position
            const delay = index * 80; // Reduced from typical stagger

            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) translateX(0)';
            }, delay);

            // Mark as animated so it doesn't repeat
            animatedElements.add(entry.target);
        }
    });
}, observerOptions);

// Set initial state for elements with data-aos
document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '0';

    const animationType = el.getAttribute('data-aos');
    if (animationType === 'fade-up') {
        el.style.transform = 'translateY(20px)';
    } else if (animationType === 'fade-left') {
        el.style.transform = 'translateX(20px)';
    } else if (animationType === 'fade-right') {
        el.style.transform = 'translateX(-20px)';
    }

    observer.observe(el);
});

// ========================================
// Contact Form Handling
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // In a real application, you would send this data to a server
        // For now, we'll just show a success message

        // Create success message
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.95);
            border: 2px solid #FF1493;
            padding: 40px;
            border-radius: 4px;
            z-index: 10000;
            text-align: center;
            max-width: 500px;
            animation: fadeInUp 0.5s ease;
        `;

        successMessage.innerHTML = `
            <h3 style="font-family: 'Orbitron', sans-serif; color: #FF1493; margin-bottom: 20px;">
                送信完了
            </h3>
            <p style="color: #E0E0E0; margin-bottom: 30px; line-height: 1.7;">
                お問い合わせありがとうございます。<br>
                内容を確認次第、ご連絡させていただきます。
            </p>
            <button onclick="this.parentElement.remove()" style="
                background: transparent;
                border: 2px solid #FF1493;
                color: white;
                padding: 12px 40px;
                font-family: 'Orbitron', sans-serif;
                font-weight: 700;
                letter-spacing: 0.1em;
                cursor: pointer;
                transition: all 0.3s ease;
            " onmouseover="this.style.background='#FF1493'" onmouseout="this.style.background='transparent'">
                閉じる
            </button>
        `;

        document.body.appendChild(successMessage);

        // Reset form
        contactForm.reset();

        // Auto close after 5 seconds
        setTimeout(() => {
            if (successMessage.parentElement) {
                successMessage.remove();
            }
        }, 5000);
    });
}

// ========================================
// Active Navigation Link Highlighting
// ========================================
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// ========================================
// Parallax Effect for Hero Background
// ========================================
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// ========================================
// Add glow effect on service cards hover
// ========================================
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function (e) {
        this.style.background = 'rgba(255, 20, 147, 0.05)';
    });

    card.addEventListener('mouseleave', function (e) {
        this.style.background = 'rgba(255, 255, 255, 0.02)';
    });
});

// ========================================
// Cursor glow effect (desktop only)
// ========================================
if (window.innerWidth > 768) {
    const cursorGlow = document.createElement('div');
    cursorGlow.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 20, 147, 0.15) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursorGlow);

    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });
}

// ========================================
// Performance: Lazy load images if any are added
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// Initialize on page load
// ========================================
window.addEventListener('load', () => {
    // Trigger initial animations
    document.body.classList.add('loaded');

    // Set initial active navigation
    highlightActiveSection();

    console.log('ExcelRich Website Loaded Successfully ⚡');
});

// ========================================
// Prevent animations on window resize
// ========================================
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});
