
Built by https://www.blackbox.ai

---

```markdown
# Digital Learning Platform

## Project Overview
The Digital Learning Platform is an interactive web application designed to facilitate online learning for individuals looking to master computer essentials. The platform offers a user-friendly interface for users to register, log in, and access various courses such as Microsoft Word, Excel, and PowerPoint. Each course includes a dashboard to track learning progress and recent activity.

## Installation
To run the Digital Learning Platform locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/digital-learning-platform.git
   cd digital-learning-platform
   ```

2. **Open the `index.html` file in your web browser** to view the home page and navigate through the application.

3. The platform uses CDN links for Tailwind CSS and Font Awesome, so no additional package installations are necessary.

## Usage
1. **Navigation**:
   - Go to the home page (`index.html`) to explore the available courses.
   - Use the navigation bar to access the login/signup page (`login-signup.html`).
   - After logging in, you will be redirected to the dashboard (`dashboard.html`), where you can view your progress and recent activities.

2. **Login/Signup**:
   - Use the tabs in the login/signup page to either log in or create a new account.
   - After signing up, you'll be able to log in with your credentials.

3. **Course Access**:
   - Click on any course card from the home page to get detailed information about that course.

## Features
- Interactive carousel on the homepage showcasing key highlights.
- Course overview with detailed progress tracking.
- User-friendly forms for login and registration with password visibility toggles.
- Responsive design using Tailwind CSS for an optimized viewing experience on various devices.
- Simple activity tracking for a personalized learning experience.

## Dependencies
This project utilizes the following dependencies:
- Tailwind CSS: A utility-first CSS framework for styling.
- Font Awesome: An icon set to enhance UI/UX.
  
The dependencies are linked directly via CDN in the HTML files.

## Project Structure
The project structure is as follows:
```
digital-learning-platform/
├── index.html          # Home page with course listings and carousel
├── login-signup.html   # Login and signup page
├── dashboard.html      # User dashboard showing course progress and activities
└── courses/            # Directory containing individual course pages
    ├── word.html      # Microsoft Word course page
    ├── excel.html     # Microsoft Excel course page
    └── powerpoint.html # Microsoft PowerPoint course page
```

Feel free to explore and modify the code as per your learning needs!
```