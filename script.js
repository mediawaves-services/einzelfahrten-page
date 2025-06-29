// Smooth scrolling for navigation links
function scrollToContact() {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
        contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// FAQ Accordion functionality
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = button.querySelector('.faq-icon');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
            const otherIcon = item.querySelector('.faq-icon');
            otherIcon.textContent = '+';
        }
    });
    
    // Toggle current FAQ item
    faqItem.classList.toggle('active');
    
    if (faqItem.classList.contains('active')) {
        icon.textContent = '−';
    } else {
        icon.textContent = '+';
    }
}

// Dynamic navigation handling
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // If it's an anchor link (starts with #)
            if (href.startsWith('#')) {
                // If we're on a sub-page, navigate to index.html first
                if (currentPage !== 'index.html') {
                    e.preventDefault();
                    window.location.href = 'index.html' + href;
                }
                // If we're on index.html, just scroll to the section
                else {
                    e.preventDefault();
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        targetElement.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            }
        });
    });
}

// Load navigation component
async function loadNavigation() {
    try {
        const response = await fetch('navigation.html');
        const navigationHtml = await response.text();
        
        // Check for placeholder first
        const placeholder = document.getElementById('navigation-placeholder');
        if (placeholder) {
            placeholder.outerHTML = navigationHtml;
        } else {
            // Find the navigation placeholder or replace existing nav
            const existingNav = document.querySelector('.navbar');
            if (existingNav) {
                existingNav.outerHTML = navigationHtml;
            } else {
                // Insert at the beginning of body if no nav exists
                document.body.insertAdjacentHTML('afterbegin', navigationHtml);
            }
        }
        
        // Setup navigation after loading with a small delay to ensure DOM is ready
        setTimeout(() => {
            setupNavigation();
        }, 10);
    } catch (error) {
        console.log('Navigation already exists or could not be loaded');
    }
}

// Load footer component
async function loadFooter() {
    try {
        const response = await fetch('footer.html');
        const footerHtml = await response.text();
        
        // Check for placeholder first
        const placeholder = document.getElementById('footer-placeholder');
        if (placeholder) {
            placeholder.outerHTML = footerHtml;
        } else {
            // Find the footer placeholder or replace existing footer
            const existingFooter = document.querySelector('.footer');
            if (existingFooter) {
                existingFooter.outerHTML = footerHtml;
            } else {
                // Insert at the end of body if no footer exists
                document.body.insertAdjacentHTML('beforeend', footerHtml);
            }
        }
    } catch (error) {
        console.log('Footer already exists or could not be loaded');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load components if they don't exist
    if (!document.querySelector('.navbar')) {
        loadNavigation();
    } else {
        setupNavigation();
    }
    
    if (!document.querySelector('.footer')) {
        loadFooter();
    }
    
    // Smooth scroll for anchor links on the same page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add animation on scroll for benefit cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe benefit cards
    document.querySelectorAll('.benefit-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe feature items
    document.querySelectorAll('.feature-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(item);
    });
});

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email) {
                alert('Bitte füllen Sie alle Pflichtfelder aus.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
                return;
            }
            
            // Show success message
            alert('Vielen Dank für Ihr Interesse! Wir werden Sie benachrichtigen, sobald die App verfügbar ist.');
            
            // Reset form
            this.reset();
        });
    }
});

// Add loading animation for CTA button
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Add loading state
            this.style.pointerEvents = 'none';
            this.querySelector('.button-text').textContent = 'Wird geladen...';
            
            // Simulate loading
            setTimeout(() => {
                scrollToContact();
                
                // Reset button
                setTimeout(() => {
                    this.style.pointerEvents = 'auto';
                    this.querySelector('.button-text').textContent = 'App bald verfügbar';
                }, 1000);
            }, 500);
        });
    }
});

// Mobile menu toggle (if needed in the future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
} 