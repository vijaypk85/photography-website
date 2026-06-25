# 📸 Moments Captured - Photography & Event Management Website

A professional, responsive website for photography and event management services. This website is built with HTML, CSS, and JavaScript - no dependencies or frameworks required. Perfect for a photography business to showcase their portfolio and attract clients.

## ✨ Features

- **Responsive Design** - Works perfectly on mobile, tablet, and desktop devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Portfolio Gallery** - Showcase photos by event type (weddings, birthdays, housewarmings, etc.)
- **Services Page** - Detailed service offerings with pricing
- **Contact Form** - Easy inquiry form for potential clients (integrated with Formspree)
- **Testimonials** - Client reviews and ratings
- **SEO Optimized** - Meta tags and semantic HTML for better search visibility
- **Fast Performance** - Lightweight, no external dependencies
- **Dark Mode Ready** - CSS variables for easy theme customization

## 📋 Table of Contents

1. [Quick Start - Running Locally](#quick-start---running-locally)
2. [Project Structure](#project-structure)
3. [GitHub Setup](#github-setup)
4. [Deployment](#deployment)
5. [Customization](#customization)
6. [Contact Form Setup](#contact-form-setup)

---

## 🚀 Quick Start - Running Locally

### Prerequisites

You need:
- A code editor (VS Code, Sublime Text, or any text editor)
- Git installed on your computer
- A GitHub account
- A local web server (Python, Node.js, or any simple server)

### Step 1: Clone or Download the Project

**Option A: Using Git (Recommended)**

```bash
# Open terminal/command prompt and run:
git clone https://github.com/YOUR_USERNAME/photography-website.git
cd photography-website
```

**Option B: Manual Download**

1. Download the files as a ZIP
2. Extract to a folder on your computer
3. Open that folder in your code editor

### Step 2: Start a Local Server

**Option A: Using Python (Windows, Mac, Linux)**

```bash
# Python 3.x
python -m http.server 8000

# OR Python 2.x
python -m SimpleHTTPServer 8000
```

**Option B: Using Node.js**

```bash
# Install http-server globally (one time only)
npm install -g http-server

# Then run in your project folder
http-server
```

**Option C: Using VS Code Live Server**

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

**Option D: Using PHP (if installed)**

```bash
php -S localhost:8000
```

### Step 3: Open in Browser

Open your web browser and go to:

```
http://localhost:8000
```

You should see the website running! 🎉

---

## 📁 Project Structure

```
photography-website/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styling and responsive design
├── js/
│   └── script.js          # JavaScript functionality
├── images/                # Folder for your photos (create this)
│   ├── gallery/           # Gallery images folder
│   └── favicon.ico        # Website icon
├── README.md              # This file
├── .gitignore             # Git ignore file
└── package.json           # Optional: for tracking dependencies
```

---

## 🐙 GitHub Setup

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **+** icon → **New repository**
3. Name it: `photography-website`
4. Add description: "Professional photography website"
5. Choose **Public** (for free hosting with GitHub Pages)
6. **Do NOT** add README, .gitignore, or license
7. Click **Create repository**

### Step 2: Initialize Git Locally

**Option A: If you cloned the repo**

Skip this - it's already initialized!

**Option B: If you downloaded manually**

Open terminal/command prompt in your project folder and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Photography website"

# Rename branch to main
git branch -M main

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/photography-website.git

# Push to GitHub
git push -u origin main
```

### Step 3: Verify on GitHub

1. Go to your repository on GitHub
2. You should see your files (index.html, css/, js/, etc.)

---

## 🚢 Deployment

### Option 1: Deploy to Netlify (Recommended - Easiest)

**Step 1: Connect GitHub to Netlify**

1. Go to [Netlify.com](https://netlify.com)
2. Click **Sign up** → **Sign up with GitHub**
3. Authorize Netlify to access your GitHub
4. Click **New site from Git**
5. Select **GitHub** as your provider
6. Choose your `photography-website` repository

**Step 2: Configure Build Settings**

Leave default settings:
- Build command: (empty)
- Publish directory: `.` (root folder)
- Click **Deploy site**

**Step 3: Your Site is Live!**

Netlify will assign a URL like: `your-site-name.netlify.app`

### Option 2: Deploy to Vercel

**Step 1: Import GitHub Project**

1. Go to [Vercel.com](https://vercel.com)
2. Click **Import Project**
3. Select **Import Git Repository**
4. Paste your GitHub URL
5. Click **Import**

**Step 2: Deploy**

Vercel will automatically detect and deploy your site. Your URL will be: `your-project.vercel.app`

### Option 3: Deploy to GitHub Pages (Free)

**Step 1: Enable GitHub Pages**

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**

**Step 2: Your Site is Live!**

GitHub will give you a URL like: `YOUR_USERNAME.github.io/photography-website`

---

## 🎨 Customization

### Edit Basic Info

**Change the business name:**

Open `index.html` and find:

```html
<span class="logo-text">Moments Captured</span>
```

Replace `Moments Captured` with your business name.

### Update Contact Information

Find in `index.html`:

```html
<p class="info-value">contact@momentscaptured.com</p>
<p class="info-value">+91 9876543210</p>
<p class="info-value">Puducherry, India</p>
```

Update with your actual contact details.

### Change Colors

Open `css/style.css` and update these variables at the top:

```css
:root {
  --primary-color: #2c3e50;      /* Main color */
  --accent-color: #e74c3c;       /* Button/highlight color */
  --secondary-color: #34495e;    /* Text color */
  --light-bg: #ecf0f1;           /* Background color */
  /* ... more colors ... */
}
```

### Add Your Images

1. Create an `images/` folder in the project root
2. Add your photos
3. Update the gallery in `index.html`:

```html
<div class="gallery-item" data-category="wedding">
  <img src="images/wedding1.jpg" alt="Wedding photo">
</div>
```

### Update Services & Pricing

Find the services section in `index.html` and update prices:

```html
<p class="service-price">₹20,000 - ₹50,000</p>
```

### Change Testimonials

Find and update the testimonials in `index.html`:

```html
<p class="testimonial-text">"Your client's feedback..."</p>
<p class="testimonial-author">— Client Name</p>
```

---

## 📧 Contact Form Setup

### Using Formspree (Free, Easiest)

**Step 1: Create Form**

1. Go to [Formspree.io](https://formspree.io)
2. Click **Sign up**
3. Enter your email
4. Click **Create a new form**
5. Name it: "photography-website"
6. You'll get a Form ID (like: `mxyqpvjlo`)

**Step 2: Update HTML**

Open `index.html` and find:

```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with your actual Form ID from Formspree.

**Step 3: Test**

1. Fill out the contact form on your website
2. Submit
3. Check your email for the submission

### Using Netlify Forms (If deploying to Netlify)

1. Add `netlify` attribute to form:

```html
<form class="contact-form" netlify>
```

2. Deploy to Netlify
3. Submissions will appear in Netlify dashboard

---

## 🔄 Git Workflow (For Updates)

After making changes to your files:

```bash
# See what changed
git status

# Stage all changes
git add .

# Commit with a message
git commit -m "Update services and pricing"

# Push to GitHub
git push origin main
```

Your site will automatically redeploy on Netlify/Vercel!

---

## 📱 Responsive Design Testing

Test your website on different devices:

1. **Desktop**: Open in Chrome, Firefox, Safari
2. **Mobile**: Use Chrome DevTools
   - Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Shift+I` (Mac)
   - Click device icon (top-left corner)
   - Choose different devices

3. **Real Device**: Open the deployed URL on your phone

---

## 🔒 Security Notes

- Never commit API keys or sensitive data to GitHub
- Use environment variables for sensitive information
- Keep your GitHub password safe
- Enable two-factor authentication on GitHub

---

## 🎯 SEO Optimization

Already included:
- Meta tags for description and keywords
- Semantic HTML
- Responsive design
- Fast loading speed

To improve further:

1. **Submit to Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your website
   - Submit sitemap

2. **Add Google Analytics**
   - Create account at [analytics.google.com](https://analytics.google.com)
   - Add tracking code to `index.html`

3. **Create Sitemap.xml** (optional)
   ```xml
   <!-- Add to root folder -->
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yourdomain.com/</loc>
     </url>
   </urlset>
   ```

---

## 🐛 Troubleshooting

**Issue: Website won't load locally**
- Make sure you're running a local server
- Check the console for errors (F12)
- Try different port: `python -m http.server 3000`

**Issue: Styles not loading**
- Check file paths in HTML
- Make sure CSS file is in `css/` folder
- Clear browser cache (Ctrl+Shift+Delete)

**Issue: Form not submitting**
- Check Formspree Form ID is correct
- Test on deployed version (localhost might have CORS issues)
- Check browser console for errors

**Issue: Git authentication error**
- Generate new GitHub token
- Use token instead of password when pushing

---

## 📈 Next Steps

1. **Add more images** to your gallery
2. **Update all contact information**
3. **Setup custom domain** (Namecheap, GoDaddy, etc.)
4. **Add Google Analytics** for tracking
5. **Submit to Google Search Console** for SEO
6. **Promote on social media** (Facebook, Instagram)
7. **Get client testimonials** and add them
8. **Create Google Business Profile** for local search

---

## 📞 Support

For issues:
1. Check this README
2. Check browser console (F12 → Console tab)
3. Search your error on Stack Overflow
4. Check GitHub issues

---

## 📄 License

This project is open source. Feel free to use and modify for your photography business.

---

## 🎉 You're All Set!

Your professional photography website is ready to go live. Happy shooting! 📸

---

**Last Updated:** 2024

**Version:** 1.0.0

**Author:** Photography Website Team
