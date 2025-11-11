# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, JavaScript, and Bootstrap 5.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices (mobile, tablet, desktop)
- **Bootstrap 5**: Utilizes Bootstrap's powerful grid system and components
- **Interactive Navigation**: Smooth scrolling and active link highlighting
- **Project Filtering**: Filter projects by category (All, Web Development, UI/UX Design, Mobile)
- **Animated Elements**: Smooth animations and transitions throughout the site
- **Contact Form**: Functional contact form with Bootstrap alerts
- **Modern UI**: Clean, professional design with gradient backgrounds
- **SEO Friendly**: Proper HTML structure and meta tags

## Technologies Used

- **HTML5**: Semantic markup for better accessibility
- **CSS3**: Custom styles with modern features (flexbox, grid, animations)
- **JavaScript (ES6+)**: Interactive features and dynamic content loading
- **Bootstrap 5.3**: Responsive framework for layout and components
- **Bootstrap Icons**: Beautiful icon set for visual elements

## Project Structure

```
portfolio-website/
│
├── index.html              # Main HTML file
├── README.md              # Project documentation
│
└── assets/
    ├── css/
    │   └── style.css      # Custom CSS styles
    │
    └── js/
        └── script.js      # JavaScript functionality
```

## Features Breakdown

### 1. Navigation Bar
- Fixed navigation that stays visible while scrolling
- Responsive mobile menu with hamburger toggle
- Active link highlighting based on current section
- Smooth scroll to sections

### 2. Hero Section
- Eye-catching gradient background
- Animated intro text
- Call-to-action button
- Scroll indicator animation

### 3. About Section
- Professional introduction
- Skill badges with hover effects
- Icon-based skill representation
- Responsive grid layout

### 4. Projects Section
- Dynamic project loading from JavaScript data
- Filter buttons to sort by category
- Project cards with hover effects
- Detailed project information including:
  - Company name
  - Role/Position
  - Date range
  - Description
  - Technology tags

### 5. Contact Section
- Contact information display
- Functional contact form
- Form validation
- Success message with Bootstrap alerts

### 6. Footer
- Copyright information
- Social media links
- Responsive layout

## Customization Guide

### Updating Personal Information

1. **Update Contact Details** (index.html):
   - Search for `your.email@example.com` and replace with your email
   - Search for `+62 123 4567 8900` and replace with your phone number
   - Update location as needed

2. **Update Projects** (assets/js/script.js):
   - Modify the `projectsData` array
   - Each project should include:
     - title
     - company
     - role
     - date
     - category (array: web, design, mobile)
     - description (array of strings)
     - tags (array of technology/skill tags)

3. **Update Social Links** (index.html):
   - Find the footer section social links
   - Replace `#` with your actual social media URLs

### Changing Colors

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lightweight: No heavy dependencies
- Fast loading: External resources loaded from CDN
- Optimized animations: Hardware-accelerated CSS transitions
- Efficient JavaScript: Event delegation and optimized DOM manipulation

## How to Use

1. **Download/Clone** the project
2. **Open** `index.html` in your web browser
3. **Customize** the content with your own information
4. **Deploy** to your preferred hosting platform (GitHub Pages, Netlify, Vercel, etc.)

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select branch and folder
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify/Vercel
1. Connect your GitHub repository
2. Deploy with one click
3. Custom domain support available

## Credits

- **Bootstrap**: https://getbootstrap.com/
- **Bootstrap Icons**: https://icons.getbootstrap.com/
- **Fonts**: System fonts for optimal performance

## License

This project is open source and available for personal and commercial use.

## Author

Created with ❤️ for showcasing web development skills.

---

**Note**: Remember to replace all placeholder content (email, phone, social links) with your actual information before deploying the website.
