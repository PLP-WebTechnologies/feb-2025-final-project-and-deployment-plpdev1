// Main JavaScript file for TechInsight Blog

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const newsletterForm = document.getElementById('newsletter-form');
const subscriptionMessage = document.getElementById('subscription-message');

// Posts data (normally this would come from a database or API)
const posts = [
    {
        id: 1,
        title: 'The Future of AI in 2025 and Beyond',
        category: 'Artificial Intelligence',
        date: 'May 10, 2025',
        author: 'Sarah Johnson',
        comments: 8,
        image: 'images/ai-trends.jpg',
        content: `
            <p>Artificial Intelligence continues to evolve at an unprecedented pace, transforming industries and reshaping our daily lives. The year 2025 has already witnessed several groundbreaking advancements that hint at an even more AI-integrated future.</p>
            
            <p>One of the most significant developments has been the emergence of truly contextual AI systems. Unlike their predecessors, these new models can maintain extended conversations with a deeper understanding of context, making human-AI interactions feel more natural and productive. This advancement is particularly evident in customer service, healthcare diagnostics, and educational applications.</p>
            
            <p>Another exciting frontier is the democratization of AI development. The tools and frameworks available today allow developers with minimal machine learning expertise to create sophisticated AI applications. This accessibility has sparked innovation across sectors that previously lacked the resources to implement AI solutions.</p>
            
            <p>From a technical perspective, the integration of neuromorphic computing principles has enabled AI systems to process information in ways that more closely resemble the human brain. This approach has dramatically reduced energy consumption while improving performance, addressing one of the longstanding concerns about AI scalability.</p>
            
            <p>Ethical considerations remain at the forefront of AI development. The establishment of international standards for algorithmic transparency and accountability represents a significant step toward responsible AI. However, challenges persist in areas such as data privacy, bias mitigation, and ensuring equitable access to AI benefits.</p>
            
            <p>Looking ahead, we can expect AI to become even more embedded in critical infrastructure, with enhanced capabilities in predictive maintenance, resource optimization, and autonomous operation. The convergence of AI with other emerging technologies, such as quantum computing and advanced robotics, promises to unlock entirely new possibilities.</p>
            
            <p>For businesses and individuals alike, staying informed about these developments is no longer optional but essential. As AI continues to evolve, so too must our understanding of its potential and limitations. The most successful organizations will be those that thoughtfully integrate AI into their operations while maintaining a human-centered approach.</p>`,
        tags: ['artificial intelligence', 'technology trends', 'machine learning', 'future tech']
    },
    {
        id: 2,
        title: 'Modern Web Development Frameworks in 2025',
        category: 'Web Development',
        date: 'May 7, 2025',
        author: 'Michael Chen',
        comments: 12,
        image: 'images/web-dev.jpg',
        content: `
            <p>The landscape of web development frameworks has undergone significant evolution in 2025, with several platforms emerging as clear leaders while others have pivoted to address specific niche requirements. This diversification offers developers more tailored options but also presents challenges in choosing the right tool for each project.</p>
            
            <p>React continues to dominate the frontend ecosystem, having successfully navigated the transition to server components and streamlined state management. Its mature ecosystem and strong community support make it a reliable choice for projects of all sizes. The introduction of AI-assisted development tools specifically designed for React has further cemented its position by reducing boilerplate code and accelerating development cycles.</p>
            
            <p>Meanwhile, Vue.js has carved out a substantial market share by emphasizing developer experience and maintaining an approachable learning curve. The framework's composition API has proven particularly valuable for organizing complex application logic, while its integration with build tools offers impressive performance optimizations out of the box.</p>
            
            <p>On the backend, Node.js has evolved to address previous scalability concerns, with improved memory management and native support for TypeScript enhancing its appeal for enterprise applications. The Deno runtime has also gained traction by prioritizing security and modern JavaScript features, though it remains more popular for greenfield projects than legacy system replacements.</p>
            
            <p>Full-stack frameworks have seen renewed interest, with Next.js leading the charge through its comprehensive feature set and performance-focused architecture. The ability to seamlessly switch between server-side rendering, static generation, and client-side rendering within a single application has proven invaluable for teams building complex web applications.</p>
            
            <p>We've also witnessed the rise of specialized frameworks targeting specific use cases. Frameworks optimized for e-commerce, content management, and real-time applications have gained popularity by offering pre-built components and workflows that align with domain-specific best practices.</p>
            
            <p>Looking forward, we can expect the lines between traditional websites and web applications to continue blurring. The frameworks that will thrive are those that embrace this convergence while maintaining performance and accessibility as core principles rather than afterthoughts.</p>`,
        tags: ['web development', 'javascript', 'frameworks', 'frontend', 'backend']
    },
    {
        id: 3,
        title: 'Essential Cybersecurity Practices for Remote Teams',
        category: 'Cybersecurity',
        date: 'May 3, 2025',
        author: 'Elena Rodriguez',
        comments: 5,
        image: 'images/cybersecurity.jpg',
        content: `
            <p>As remote work continues to be the norm for many organizations in 2025, cybersecurity has become more critical than ever. The distributed nature of teams introduces unique vulnerabilities that malicious actors are increasingly targeting. This article outlines essential cybersecurity practices that organizations should implement to protect their digital assets and sensitive information in a remote work environment.</p>
            
            <p>Multi-factor authentication (MFA) remains the first line of defense against unauthorized access. Recent advancements in biometric verification and hardware tokens have made MFA both more secure and user-friendly. Organizations should require MFA for all remote access to company resources, with particular emphasis on email accounts, VPNs, and cloud services that store sensitive information.</p>
            
            <p>Secure communication channels are equally important. End-to-end encrypted messaging and video conferencing tools should be standard for all business communications. Teams should avoid discussing sensitive matters on platforms that don't provide adequate encryption or that have questionable data handling practices.</p>
            
            <p>Virtual Private Networks (VPNs) have evolved significantly in recent years. Modern enterprise VPN solutions now offer advanced features like split tunneling, which directs only specific traffic through the secure connection, and continuous verification, which periodically reassesses the security of connected devices. These features balance security with performance, making VPNs more practical for day-to-day use.</p>
            
            <p>Regular security training has proven to be one of the most effective defenses against social engineering attacks. Interactive, scenario-based training programs that simulate real-world threats have shown better retention rates than traditional approaches. These programs should be updated frequently to address emerging attack vectors and be mandatory for all team members, regardless of their role or seniority.</p>
            
            <p>Device management policies need to be clearly defined and consistently enforced. Organizations should establish minimum security requirements for personal devices used for work purposes, including automatic updates, disk encryption, and antimalware protection. When feasible, company-provided devices with pre-configured security settings offer greater control and consistency.</p>
            
            <p>Incident response planning is often overlooked but becomes even more crucial in a remote context. Teams should know exactly what steps to take if they suspect a security breach, including whom to contact and what immediate actions to perform. Regular tabletop exercises can help identify gaps in the response protocol before an actual incident occurs.</p>
            
            <p>By implementing these practices, organizations can significantly reduce their cybersecurity risk while maintaining the flexibility and benefits that remote work provides. The key is to view security not as a one-time implementation but as an ongoing process that requires continuous evaluation and adjustment.</p>`,
        tags: ['cybersecurity', 'remote work', 'data protection', 'information security', 'VPN']
    }
];

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when menu item is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Newsletter form submission
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        // In a real application, you would send this to a server
        
        // Simulate a successful subscription
        subscriptionMessage.innerHTML = `<p style="color: var(--secondary-color);">Thank you! ${email} has been added to our newsletter.</p>`;
        newsletterForm.reset();
        
        // Clear the message after 5 seconds
        setTimeout(() => {
            subscriptionMessage.innerHTML = '';
        }, 5000);
    });
}

// Blog post page functionality
function loadPost() {
    const postContent = document.getElementById('post-content');
    if (!postContent) return;
    
    // Get post ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    
    if (!postId) {
        postContent.innerHTML = '<p>Post not found</p>';
        return;
    }
    
    // Find the post by ID
    const post = posts.find(p => p.id === postId);
    
    if (!post) {
        postContent.innerHTML = '<p>Post not found</p>';
        return;
    }
    
    // Update the page with post data
    document.title = `${post.title} - TechInsight Blog`;
    
    // Update post header
    document.querySelector('.post-header img').src = post.image;
    document.querySelector('.post-header img').alt = post.title;
    document.querySelector('.post-header-content h1').textContent = post.title;
    document.querySelector('.category-info').textContent = post.category;
    document.querySelector('.date-info').textContent = post.date;
    document.querySelector('.author-info').textContent = post.author;
    document.querySelector('.comments-info').textContent = `${post.comments} Comments`;
    
    // Update post body
    document.querySelector('.post-body-content').innerHTML = post.content;
    
    // Update tags
    const tagsContainer = document.querySelector('.tags');
    tagsContainer.innerHTML = '';
    post.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
    
    // Set up post navigation (prev/next)
    setupPostNavigation(postId);
}

// Set up post navigation links
function setupPostNavigation(currentPostId) {
    const navPrevious = document.querySelector('.nav-previous');
    const navNext = document.querySelector('.nav-next');
    
    // Find previous and next posts
    const currentIndex = posts.findIndex(p => p.id === currentPostId);
    const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
    const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
    
    // Update navigation links
    if (prevPost) {
        navPrevious.innerHTML = `<a href="post.html?id=${prevPost.id}"><i class="fas fa-arrow-left"></i> ${prevPost.title}</a>`;
    } else {
        navPrevious.style.visibility = 'hidden';
    }
    
    if (nextPost) {
        navNext.innerHTML = `<a href="post.html?id=${nextPost.id}">${nextPost.title} <i class="fas fa-arrow-right"></i></a>`;
    } else {
        navNext.style.visibility = 'hidden';
    }
}

// Blog page functionality
function loadBlogPosts() {
    const postsContainer = document.getElementById('blog-posts');
    if (!postsContainer) return;
    
    // Render all posts
    posts.forEach(post => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
    });
    
    // Setup filter functionality
    setupFilters();
}

// Create post element
function createPostElement(post) {
    const article = document.createElement('article');
    article.className = 'post-card';
    article.dataset.category = post.category.toLowerCase();
    
    article.innerHTML = `
        <div class="post-image">
            <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="post-content">
            <div class="post-meta">
                <span class="category">${post.category}</span>
                <span class="date">${post.date}</span>
            </div>
            <h3>${post.title}</h3>
            <p>${post.content.substring(0, 150).replace(/<\/?p>/g, '')}...</p>
            <a href="post.html?id=${post.id}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
    `;
    
    return article;
}

// Setup category filters
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-posts');
    
    // Category filter
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.dataset.filter;
            filterPosts(category, searchInput ? searchInput.value : '');
        });
    });
    
    // Search filter
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const activeCategory = document.querySelector('.filter-btn.active').dataset.filter;
            filterPosts(activeCategory, searchInput.value);
        });
    }
}

// Filter posts by category and search term
function filterPosts(category, searchTerm = '') {
    const postCards = document.querySelectorAll('.post-card');
    
    postCards.forEach(card => {
        const matchesCategory = category === 'all' || card.dataset.category === category;
        const matchesSearch = searchTerm === '' || card.textContent.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (matchesCategory && matchesSearch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Contact form functionality
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this to a server
        
        // Show success message
        const formMessage = document.getElementById('form-message');
        formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        formMessage.style.color = 'var(--secondary-color)';
        
        // Reset the form
        contactForm.reset();
        
        // Clear the message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
    });
}

// Scroll to top button
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize appropriate functions based on the current page
document.addEventListener('DOMContentLoaded', () => {
    // Check what page we're on and run appropriate functions
    if (document.querySelector('.single-post')) {
        loadPost();
    } else if (document.getElementById('blog-posts')) {
        loadBlogPosts();
    }
    
    // Add a class to the current page link in the navigation
    highlightCurrentPageLink();
});

// Highlight the current page in the navigation
function highlightCurrentPageLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}