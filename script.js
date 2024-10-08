document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Reveal sections on scroll
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });

    // Typing effect for the tagline
    const tagline = "M.Tech. CSIS Student | Software Developer";
    const taglineElement = document.querySelector('#tagline');
    let i = 0;

    function typeWriter() {
        if (i < tagline.length) {
            taglineElement.innerHTML += tagline.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        updateDarkModeIcon();
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });

    function updateDarkModeIcon() {
        const icon = darkModeToggle.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        body.classList.add('dark-mode');
        updateDarkModeIcon();
    }

    // Skills section interactivity
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.1) rotate(5deg)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1) rotate(0deg)';
        });

        card.addEventListener('click', () => {
            const skillName = card.getAttribute('data-skill');
            showSkillDescription(skillName);
        });
    });

    function showSkillDescription(skillName) {
        const descriptions = {
            'Python': 'A versatile programming language used for web development, data analysis, AI, and more.',
            'Java': 'A popular object-oriented language used for building large-scale applications and Android development.',
            'C++': 'A powerful language used for system/application development, game development, and more.',
            'HTML': 'The standard markup language for creating web pages and web applications.',
            'CSS': 'A style sheet language used for describing the look and formatting of a document written in HTML.',
            'JavaScript': 'A programming language that enables interactive web pages and is an essential part of web applications.',
            'Node.js': "A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building scalable network applications.",
            'MongoDB': 'A NoSQL database program that uses JSON-like documents with optional schemas.',
            'MySQL': 'An open-source relational database management system.',
            'React': 'A JavaScript library for building user interfaces, particularly single-page applications.'
        };

        const description = descriptions[skillName] || 'No description available.';
        alert(`${skillName}: ${description}`);
    }

    // Project hover effect
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'scale(1.03)';
            project.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });

        project.addEventListener('mouseleave', () => {
            project.style.transform = 'scale(1)';
            project.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Animate social links
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
        link.classList.add('animate-social');
    });

    // Add scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '&uarr;';
    scrollToTopBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
