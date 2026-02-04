// ========================================
// Multi-language Support
// ========================================
const translations = {
    ja: {
        // Navigation
        'nav.home': 'HOME',
        'nav.services': 'SERVICES',
        'nav.about': 'ABOUT',
        'nav.recruit': 'RECRUIT',
        'nav.contact': 'CONTACT',
        
        // Hero Section
        'hero.label': 'REAL TOKYO EXPERIENCE',
        'hero.title1': '楽しさは',
        'hero.title2': '世界共通',
        'hero.description': '東京の街を駆け抜ける、忘れられない体験を。<br>ゴーカートツアーから総合カーサービスまで、<br>安全と楽しさを世界中のお客様にお届けします。',
        'hero.btn1': 'サービスを見る',
        'hero.btn2': 'お問い合わせ',
        'hero.scroll': 'SCROLL',
        
        // Services Section
        'services.label': 'SERVICES',
        'services.title': '提供サービス',
        'services.description': 'お客様のカーライフと東京体験を、4つのサービスでトータルサポートします。',
        
        // Service Card 1 - Go-Kart
        'service1.title': 'GO-KART TOUR',
        'service1.subtitle': 'ゴーカート（レンタル・ツアー）',
        'service1.description': '秋葉原、浅草、スカイツリーなど、東京の名所を公道ゴーカートで巡る特別な体験。レンタルのみも可能です。国際免許にも対応し、世界中からのお客様をお迎えしています。',
        'service1.feature1': 'プロガイド付きツアー',
        'service1.feature2': '英語対応スタッフ',
        'service1.feature3': '写真・動画撮影サービス',
        'service1.feature4': '安全講習完備',
        
        // Service Card 2 - Car Rental
        'service2.title': 'CAR RENTAL',
        'service2.subtitle': 'レンタカーサービス',
        'service2.description': '観光からビジネスまで、用途に合わせた車両をご用意。短期から長期まで柔軟に対応し、快適なドライブをサポートします。',
        'service2.feature1': '多様な車種ラインナップ',
        'service2.feature2': '24時間サポート体制',
        'service2.feature3': '英語対応可能',
        'service2.feature4': '空港送迎オプション',
        
        // Service Card 3 - Towing
        'service3.title': 'TOWING SERVICE',
        'service3.subtitle': 'レッカー・ロードサービス',
        'service3.description': '故障や事故時の緊急対応から、車両の移動まで迅速に対応。24時間365日、お客様の安心をサポートします。',
        'service3.feature1': '24時間365日対応',
        'service3.feature2': '迅速な現場到着',
        'service3.feature3': '各種保険対応',
        'service3.feature4': 'バッテリー上がり対応',
        
        // Service Card 4 - Insurance
        'service4.title': 'INSURANCE',
        'service4.subtitle': '自動車保険代理店',
        'service4.description': 'お客様一人ひとりに最適な保険プランをご提案。事故対応から保険金請求まで、丁寧にサポートいたします。',
        'service4.feature1': 'プロの保険アドバイザー',
        'service4.feature2': '複数社比較可能',
        'service4.feature3': '事故時の手厚いサポート',
        'service4.feature4': 'オンライン相談対応',
        
        // About Section
        'about.label': 'ABOUT US',
        'about.title': '会社概要',
        'about.text1': 'ExcelRich株式会社は、東京を拠点に、ゴーカートツアーを中心とした総合カーサービスを展開しています。「楽しさは世界共通」をモットーに、国際色豊かなチームで、世界中からのお客様に安全で忘れられない体験を提供しています。',
        'about.text2': '私たちは常に安全を最優先に考え、プロフェッショナルなサービスで、東京の新しい魅力を発信し続けます。',
        'about.value1.title': '楽しさは世界共通',
        'about.value1.text': '国籍や言語を超えた体験価値の提供',
        'about.value2.title': '安全意識',
        'about.value2.text': 'お客様の安全を何よりも大切に',
        'about.info.title': '企業情報',
        'about.info.company': '会社名',
        'about.info.companyName': 'ExcelRich株式会社',
        'about.info.representative': '代表取締役',
        'about.info.representativeName': '木村正一郎',
        'about.info.founder': '創業者',
        'about.info.founderName': '石井裕明',
        'about.info.address': '所在地',
        'about.info.addressValue': '〒101-0032<br>東京都千代田区岩本町2-8-5',
        'about.info.capital': '資本金',
        'about.info.capitalValue': '1,000万円',
        'about.info.business': '事業内容',
        'about.info.businessValue': '・ゴーカートレンタル・ツアー事業<br>・レンタカー事業<br>・レッカー・ロードサービス<br>・自動車保険代理店',
        
        // Recruit Section
        'recruit.label': 'RECRUIT',
        'recruit.title': '採用情報',
        'recruit.description': '国際的な環境で、挑戦したい気持ちを大切にする仲間を募集しています。',
        'recruit.message.title': '私たちと一緒に働きませんか？',
        'recruit.message.text1': 'ExcelRichは、多様性を力に変える会社です。日本人スタッフはもちろん、世界各国からの仲間が集まり、それぞれの文化や経験を活かして働いています。',
        'recruit.message.text2': '未経験でも大丈夫。挑戦したいという気持ちがあれば、私たちが全力でサポートします。一緒に、東京から世界に笑顔を届けましょう。',
        'recruit.requirements.title': '募集要項',
        'recruit.required.title': '必須条件',
        'recruit.required.item1': '18歳以上の方',
        'recruit.required.item2': '挑戦したいという気持ちをお持ちの方',
        'recruit.required.item3': '日本語で意思疎通ができる方（外国籍の方も歓迎）',
        'recruit.welcome.title': '歓迎条件',
        'recruit.welcome.item1': '普通自動車運転免許をお持ちの方',
        'recruit.welcome.item2': '英語でのコミュニケーションができる方',
        'recruit.welcome.item3': '接客・サービス業の経験がある方',
        'recruit.desired.title': '求める人物像',
        'recruit.desired.item1': '安全意識が高く、責任感のある方',
        'recruit.desired.item2': 'チームワークを大切にできる方',
        'recruit.desired.item3': '多様な文化を尊重し、楽しめる方',
        'recruit.desired.item4': 'お客様に笑顔を届けることが好きな方',
        'recruit.note.title': '外国人の方も積極採用中！',
        'recruit.note.text': '日本語で意思疎通ができれば、国籍は問いません。多様なバックグラウンドを持つ仲間が活躍しています。',
        'recruit.btn': '応募・お問い合わせ',
        
        // Contact Section
        'contact.label': 'CONTACT',
        'contact.title': 'お問い合わせ',
        'contact.description': 'サービスに関するご質問、採用についてなど、お気軽にお問い合わせください。',
        'contact.address.title': '所在地',
        'contact.address.value': '〒101-0032<br>東京都千代田区岩本町2-8-5',
        'contact.email.title': 'メールアドレス',
        'contact.hours.title': '営業時間',
        'contact.hours.value': '9:00 - 18:00（年中無休）<br>※レッカーサービスは24時間対応',
        'contact.languages.title': '対応言語',
        'contact.form.name': 'お名前 *',
        'contact.form.email': 'メールアドレス *',
        'contact.form.subject': 'お問い合わせ種別 *',
        'contact.form.subjectPlaceholder': '選択してください',
        'contact.form.subject1': 'ゴーカートツアーについて',
        'contact.form.subject2': 'レンタカーについて',
        'contact.form.subject3': 'レッカーサービスについて',
        'contact.form.subject4': '保険について',
        'contact.form.subject5': '採用について',
        'contact.form.subject6': 'その他',
        'contact.form.message': 'メッセージ *',
        'contact.form.submit': '送信する',
        
        // Footer
        'footer.tagline': '楽しさは世界共通',
        'footer.copyright': '© 2025 ExcelRich株式会社 All Rights Reserved.'
    },
    en: {
        // Navigation
        'nav.home': 'HOME',
        'nav.services': 'SERVICES',
        'nav.about': 'ABOUT',
        'nav.recruit': 'RECRUIT',
        'nav.contact': 'CONTACT',
        
        // Hero Section
        'hero.label': 'REAL TOKYO EXPERIENCE',
        'hero.title1': 'Fun is',
        'hero.title2': 'Universal',
        'hero.description': 'An unforgettable experience through the streets of Tokyo.<br>From go-kart tours to comprehensive car services,<br>we deliver safety and fun to customers worldwide.',
        'hero.btn1': 'View Services',
        'hero.btn2': 'Contact Us',
        'hero.scroll': 'SCROLL',
        
        // Services Section
        'services.label': 'SERVICES',
        'services.title': 'Our Services',
        'services.description': 'We provide total support for your car life and Tokyo experience with 4 services.',
        
        // Service Card 1 - Go-Kart
        'service1.title': 'GO-KART TOUR',
        'service1.subtitle': 'Go-Kart Rental & Tours',
        'service1.description': 'Experience Tokyo\'s famous spots like Akihabara, Asakusa, and Sky Tree on a public road go-kart. Rental only is also available. International licenses accepted, welcoming customers from around the world.',
        'service1.feature1': 'Professional guided tours',
        'service1.feature2': 'English-speaking staff',
        'service1.feature3': 'Photo & video service',
        'service1.feature4': 'Safety briefing included',
        
        // Service Card 2 - Car Rental
        'service2.title': 'CAR RENTAL',
        'service2.subtitle': 'Car Rental Service',
        'service2.description': 'From sightseeing to business, we provide vehicles suited to your needs. Flexible support from short to long-term rentals for a comfortable drive.',
        'service2.feature1': 'Diverse vehicle lineup',
        'service2.feature2': '24-hour support system',
        'service2.feature3': 'English support available',
        'service2.feature4': 'Airport transfer option',
        
        // Service Card 3 - Towing
        'service3.title': 'TOWING SERVICE',
        'service3.subtitle': 'Towing & Roadside Service',
        'service3.description': 'Quick response from emergency breakdown and accident support to vehicle transport. 24/7/365 support for your peace of mind.',
        'service3.feature1': '24/7/365 service',
        'service3.feature2': 'Rapid on-site arrival',
        'service3.feature3': 'Various insurance support',
        'service3.feature4': 'Dead battery assistance',
        
        // Service Card 4 - Insurance
        'service4.title': 'INSURANCE',
        'service4.subtitle': 'Auto Insurance Agency',
        'service4.description': 'We propose the optimal insurance plan for each customer. Careful support from accident response to insurance claims.',
        'service4.feature1': 'Professional insurance advisors',
        'service4.feature2': 'Multi-company comparison',
        'service4.feature3': 'Thorough accident support',
        'service4.feature4': 'Online consultation',
        
        // About Section
        'about.label': 'ABOUT US',
        'about.title': 'Company Overview',
        'about.text1': 'Based in Tokyo, ExcelRich Co., Ltd. operates comprehensive car services centered on go-kart tours. With the motto "Fun is Universal," our internationally diverse team provides safe and unforgettable experiences to customers from around the world.',
        'about.text2': 'We always prioritize safety and continue to showcase Tokyo\'s new appeal with professional services.',
        'about.value1.title': 'Fun is Universal',
        'about.value1.text': 'Providing experiential value beyond nationality and language',
        'about.value2.title': 'Safety Consciousness',
        'about.value2.text': 'Customer safety is our top priority',
        'about.info.title': 'Company Information',
        'about.info.company': 'Company Name',
        'about.info.companyName': 'ExcelRich Co., Ltd.',
        'about.info.representative': 'President & CEO',
        'about.info.representativeName': 'Shoichiro Kimura',
        'about.info.founder': 'Founder',
        'about.info.founderName': 'Hiroaki Ishii',
        'about.info.address': 'Address',
        'about.info.addressValue': '〒101-0032<br>2-8-5 Iwamotocho, Chiyoda-ku, Tokyo',
        'about.info.capital': 'Capital',
        'about.info.capitalValue': '10,000,000 JPY',
        'about.info.business': 'Business',
        'about.info.businessValue': '・Go-kart rental & tour business<br>・Car rental business<br>・Towing & roadside service<br>・Auto insurance agency',
        
        // Recruit Section
        'recruit.label': 'RECRUIT',
        'recruit.title': 'Recruitment',
        'recruit.description': 'We are looking for colleagues who value the spirit of challenge in an international environment.',
        'recruit.message.title': 'Join Our Team!',
        'recruit.message.text1': 'ExcelRich is a company that turns diversity into strength. Not only Japanese staff, but also colleagues from around the world gather and work utilizing their respective cultures and experiences.',
        'recruit.message.text2': 'No experience necessary. If you have the desire to challenge yourself, we will support you with all our strength. Let\'s deliver smiles to the world from Tokyo together.',
        'recruit.requirements.title': 'Job Requirements',
        'recruit.required.title': 'Required',
        'recruit.required.item1': '18 years of age or older',
        'recruit.required.item2': 'Desire to challenge yourself',
        'recruit.required.item3': 'Able to communicate in Japanese (foreign nationals welcome)',
        'recruit.welcome.title': 'Preferred',
        'recruit.welcome.item1': 'Valid driver\'s license',
        'recruit.welcome.item2': 'English communication skills',
        'recruit.welcome.item3': 'Customer service experience',
        'recruit.desired.title': 'Desired Qualities',
        'recruit.desired.item1': 'High safety awareness and responsibility',
        'recruit.desired.item2': 'Values teamwork',
        'recruit.desired.item3': 'Respects and enjoys diverse cultures',
        'recruit.desired.item4': 'Loves delivering smiles to customers',
        'recruit.note.title': 'Actively recruiting international staff!',
        'recruit.note.text': 'Nationality is not an issue if you can communicate in Japanese. Colleagues with diverse backgrounds are active here.',
        'recruit.btn': 'Apply / Contact',
        
        // Contact Section
        'contact.label': 'CONTACT',
        'contact.title': 'Contact Us',
        'contact.description': 'Feel free to contact us about our services, recruitment, and more.',
        'contact.address.title': 'Address',
        'contact.address.value': '〒101-0032<br>2-8-5 Iwamotocho, Chiyoda-ku, Tokyo',
        'contact.email.title': 'Email',
        'contact.hours.title': 'Business Hours',
        'contact.hours.value': '9:00 - 18:00 (Open year-round)<br>※Towing service available 24/7',
        'contact.languages.title': 'Languages',
        'contact.form.name': 'Name *',
        'contact.form.email': 'Email *',
        'contact.form.subject': 'Inquiry Type *',
        'contact.form.subjectPlaceholder': 'Please select',
        'contact.form.subject1': 'About Go-Kart Tour',
        'contact.form.subject2': 'About Car Rental',
        'contact.form.subject3': 'About Towing Service',
        'contact.form.subject4': 'About Insurance',
        'contact.form.subject5': 'About Recruitment',
        'contact.form.subject6': 'Other',
        'contact.form.message': 'Message *',
        'contact.form.submit': 'Submit',
        
        // Footer
        'footer.tagline': 'Fun is Universal',
        'footer.copyright': '© 2025 ExcelRich Co., Ltd. All Rights Reserved.'
    }
};

// Get current language from localStorage or default to Japanese
let currentLang = localStorage.getItem('language') || 'ja';

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Language switcher event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        changeLanguage(lang);
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage(currentLang);
});

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
// ========================================
// Add glow effect on service cards hover
// ========================================
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.background = 'rgba(255, 20, 147, 0.12)';
    });
    
    card.addEventListener('mouseleave', function(e) {
        this.style.background = 'rgba(255, 255, 255, 0.05)';
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
