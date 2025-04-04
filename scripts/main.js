// Main application functionality
document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const passwordInput = document.getElementById(targetId);
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    // Login/Signup form toggle
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginTab && signupTab) {
        loginTab.addEventListener('click', function(e) {
            e.preventDefault();
            loginTab.classList.add('text-blue-600', 'border-blue-600');
            loginTab.classList.remove('text-gray-500');
            signupTab.classList.add('text-gray-500');
            signupTab.classList.remove('text-blue-600', 'border-blue-600');
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
        });

        signupTab.addEventListener('click', function(e) {
            e.preventDefault();
            signupTab.classList.add('text-blue-600', 'border-blue-600');
            signupTab.classList.remove('text-gray-500');
            loginTab.classList.add('text-gray-500');
            loginTab.classList.remove('text-blue-600', 'border-blue-600');
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        });
    }

    // Form validation and submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // Simple validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }

            // Store user data in localStorage (for demo purposes)
            localStorage.setItem('currentUser', JSON.stringify({
                email: email,
                name: email.split('@')[0] // Use email prefix as name
            }));

            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;
            
            // Validation
            if (!name || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            // Store user data in localStorage (for demo purposes)
            localStorage.setItem('currentUser', JSON.stringify({
                name: name,
                email: email
            }));

            // Store user credentials (insecure for demo only)
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        });
    }

    // Dashboard functionality
    if (window.location.pathname.includes('dashboard.html')) {
        // Load user data
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.name) {
            document.getElementById('username').textContent = currentUser.name;
        } else {
            // Redirect to login if not authenticated
            window.location.href = 'login-signup.html';
        }

        // Load course progress from localStorage
        const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
        
        // Update progress bars if they exist
        const progressBars = {
            'word': 30,
            'excel': 10,
            'powerpoint': 0
        };

        for (const [course, defaultProgress] of Object.entries(progressBars)) {
            const progressFill = document.querySelector(`.progress-fill[data-course="${course}"]`);
            if (progressFill) {
                const userProgress = progress[course] || defaultProgress;
                progressFill.style.width = `${userProgress}%`;
                progressFill.previousElementSibling.textContent = `${userProgress}% Complete`;
            }
        }
    }

    // Check authentication on protected pages
    const protectedPages = ['dashboard.html', 'courses/word.html', 'courses/excel.html', 'courses/powerpoint.html'];
    if (protectedPages.some(page => window.location.pathname.includes(page))) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            window.location.href = 'login-signup.html';
        }
    }
});

// Course completion tracking
function updateCourseProgress(course, module, score) {
    const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
    if (!progress[course]) {
        progress[course] = 0;
    }
    
    // Simple progress calculation (for demo)
    progress[course] = Math.min(progress[course] + 10, 100);
    localStorage.setItem('courseProgress', JSON.stringify(progress));
    
    return progress[course];
}