// Projects Data
const projectsData = [
    {
        id: 1,
        title: "Biro Psikologi - Mind and Personality",
        company: "CV. INOVASI TEKNOLOGI RAYA",
        role: "WordPress Developer",
        date: "May 2025 - Aug 2025",
        category: ["web"],
        description: [
            "Developed an official website for a psychological service institution using WordPress.",
            "Integrated event management features with ZaTix as a digital partner for event registration and ticketing.",
            "Built a free MHCU self-assessment module that displays test results instantly after submission."
        ],
        tags: ["WordPress", "Event Management", "ZaTix Integration"]
    },
    {
        id: 2,
        title: "ZaTix",
        company: "CV. INOVASI TEKNOLOGI RAYA",
        role: "Frontend Developer",
        date: "May 2025 - Aug 2025",
        category: ["web"],
        description: [
            "Built a responsive event management and ticketing system, enabling users to browse events, purchase tickets, and receive QR-based e-tickets.",
            "Developed reusable UI components and implemented a streamlined checkout flow integrated with Midtrans for payments (VA, QRIS, e-wallet).",
            "Conducted UEQ testing, which showed strong user satisfaction across both web and mobile platforms, with particularly high scores in Attractiveness (>1.9), Efficiency (>1.7), and Novelty (>2.0)."
        ],
        tags: ["Frontend", "Event Management", "Midtrans", "QR Code", "UX Testing"]
    },
    {
        id: 3,
        title: "Zamanweb",
        company: "CV. INOVASI TEKNOLOGI RAYA",
        role: "UI/UX Designer",
        date: "Oct 2024 - Feb 2025",
        category: ["design", "web"],
        description: [
            "Designed a responsive website builder platform tailored for corporations.",
            "Created intuitive UI/UX and reusable components to ensure consistency and cross-device responsiveness.",
            "Increased company revenue by 20% and supported 10 client website launches through the platform."
        ],
        tags: ["UI/UX Design", "Website Builder", "Responsive Design", "Component Design"]
    },
    {
        id: 4,
        title: "Masterlaundry Website",
        company: "PT. Binatu Kreasi Amanah",
        role: "Website Developer & SEO Engineer",
        date: "Jan 2025",
        category: ["web"],
        description: [
            "Integrated SEO best practices, resulting in improved search engine rankings and boosting organic reach by 20%.",
            "Developed a user-friendly company profile website for PT. Binatu Kreasi Amanah, aimed at enhancing customer engagement and brand visibility throughout the city."
        ],
        tags: ["Web Development", "SEO", "Company Profile"]
    },
    {
        id: 5,
        title: "ASLawFirm Website",
        company: "AS Law Firm",
        role: "Website Developer & SEO Engineer",
        date: "Dec 2024",
        category: ["web"],
        description: [
            "Developed a comprehensive law firm website, enhancing online presence and user engagement, tailored specifically for legal services.",
            "Implemented SEO strategies, resulting in a 15% increase in organic search traffic and improved search engine rankings for key legal terms."
        ],
        tags: ["Web Development", "SEO", "Legal Services"]
    },
    {
        id: 6,
        title: "IHSAO Competition Website",
        company: "HIMAKSI PCR",
        role: "Frontend Developer",
        date: "Dec 2023 - Jan 2024",
        category: ["web"],
        description: [
            "Create an website of the 'IHSAO - Inter High School Accounting Olympiad' competition and qualification"
        ],
        tags: ["Frontend", "Competition Website", "Event Platform"]
    },
    {
        id: 7,
        title: "Zala Mobile",
        company: "PT TRIKARYA DAYA ENERGI",
        role: "Frontend Developer",
        date: "Sep 2023 - Dec 2023",
        category: ["mobile"],
        description: [
            "Create a multifunctional application whose main function is to make laundry pickup easier and more effectively"
        ],
        tags: ["Mobile Development", "Frontend", "Service App"]
    },
    {
        id: 8,
        title: "SIMINAH",
        company: "PT Kilang Pertamina Internasional",
        role: "UI/UX Design, Web Design",
        date: "Aug 2023 - Dec 2023",
        category: ["design", "web"],
        description: [
            "Developed the UI/UX appearance of the application 'SIMINAH - Sistem Informasi Minyak Jelantah'."
        ],
        tags: ["UI/UX Design", "Web Design", "Information System"]
    },
    {
        id: 9,
        title: "ITO XI Registration Website",
        company: "ITSA PCR",
        role: "Frontend Developer",
        date: "Sep 2023 - Oct 2023",
        category: ["web"],
        description: [
            "Create an website of the 'ITO - Information Technology Olympiad' competition registration",
            "Helped increase registration for ITO XI competition by 200+ participants"
        ],
        tags: ["Frontend", "Registration System", "Event Website"]
    },
    {
        id: 10,
        title: "Bantu Guru",
        company: "PGRI RIAU",
        role: "Frontend Mobile Developer",
        date: "Sep 2023 - Oct 2023",
        category: ["mobile"],
        description: [
            "Develop a 'Bantu Guru' application that will be useful to meet the needs of teachers throughout Indonesia"
        ],
        tags: ["Mobile Development", "Frontend", "Education"]
    }
];

// DOM Elements
const backToTopBtn = document.getElementById('backToTop');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectsGrid = document.getElementById('projectsGrid');
const contactForm = document.getElementById('contactForm');

// Back to Top Button Visibility
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// Back to Top Functionality
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Create Project Card HTML with Bootstrap
function createProjectCard(project) {
    const descriptionHTML = project.description.length > 1 
        ? `<ul class="mb-0">${project.description.map(item => `<li class="mb-2">${item}</li>`).join('')}</ul>`
        : `<p class="mb-0">${project.description[0]}</p>`;

    const tagsHTML = project.tags.map(tag => `<span class="project-badge">${tag}</span>`).join('');

    return `
        <div class="col" data-category="${project.category.join(' ')}">
            <div class="card project-card shadow-sm h-100">
                <div class="project-header">
                    <h3 class="h5 mb-2">${project.title}</h3>
                    <p class="mb-0 small opacity-75">
                        <i class="bi bi-calendar-event me-1"></i>${project.date}
                    </p>
                </div>
                <div class="card-body">
                    <p class="project-company mb-1">${project.company}</p>
                    <p class="project-role mb-3">${project.role}</p>
                    <div class="project-description text-muted small">
                        ${descriptionHTML}
                    </div>
                    <div class="mt-3">
                        ${tagsHTML}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Load Projects
function loadProjects(filter = 'all') {
    const existingCards = projectsGrid.querySelectorAll('.col');
    
    // Fade out existing cards
    existingCards.forEach(card => {
        card.style.animation = 'fadeOut 0.3s ease';
    });
    
    setTimeout(() => {
        projectsGrid.innerHTML = '';
        
        projectsData.forEach((project, index) => {
            if (filter === 'all' || project.category.includes(filter)) {
                projectsGrid.innerHTML += createProjectCard(project);
            }
        });

        // Add staggered animation to new cards
        const newCards = projectsGrid.querySelectorAll('.col');
        newCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.animation = 'fadeIn 0.5s ease forwards';
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }, 300);
}

// Filter Projects
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get filter value
        const filter = btn.getAttribute('data-filter');
        
        // Load filtered projects
        loadProjects(filter);
    });
});

// Contact Form Submission with Bootstrap Toast
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create success alert
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3';
    alertDiv.style.zIndex = '9999';
    alertDiv.innerHTML = `
        <i class="bi bi-check-circle-fill me-2"></i>
        <strong>Success!</strong> Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Auto remove alert after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
    
    // Reset form
    contactForm.reset();
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (!section.classList.contains('hero')) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        }
    });

    // Load initial projects
    loadProjects();
    
    // Add loading animation to skills
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.animation = 'fadeIn 0.5s ease forwards';
        badge.style.animationDelay = `${index * 0.05}s`;
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.scrollY;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
