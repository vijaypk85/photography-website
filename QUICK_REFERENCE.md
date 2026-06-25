# ⚡ Quick Reference Guide

## 🚀 Running Locally (Quick Start)

### Using Python

```bash
cd photography-website
python -m http.server 8000
# Visit: http://localhost:8000
```

### Using Node.js

```bash
cd photography-website
npx http-server
# Visit: http://127.0.0.1:8080
```

### Using VS Code Live Server

1. Open folder in VS Code
2. Right-click `index.html` → "Open with Live Server"

---

## 📁 File Structure

```
photography-website/
├── index.html          ← Main page (edit text/form here)
├── css/
│   └── style.css      ← Colors and layout (edit colors here)
├── js/
│   └── script.js      ← Interactive features (usually don't edit)
├── images/            ← Your photos go here
├── README.md          ← Project info
├── SETUP_GUIDE.md     ← Full setup instructions
└── .gitignore         ← Files to ignore in Git
```

---

## 🐙 Git Commands (GitHub)

### First Time Setup

```bash
cd photography-website

# Configure Git (one time only)
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

# Initialize git
git init

# Add files
git add .

# First commit
git commit -m "Initial commit: Photography website"

# Rename branch
git branch -M main

# Connect to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/photography-website.git

# Push to GitHub
git push -u origin main
```

### After Making Changes

```bash
# See what changed
git status

# Add all changes
git add .

# Commit with message
git commit -m "Updated services and pricing"

# Push to GitHub
git push origin main
```

---

## 🎨 Customization Quick Links

### Change Business Name

**File:** `index.html`
**Find:** `<span class="logo-text">Moments Captured</span>`
**Replace with:** Your business name

### Change Email

**File:** `index.html`
**Find:** `contact@momentscaptured.com`
**Replace with:** Your email

### Change Colors

**File:** `css/style.css`
**Find:** (at the top)
```css
:root {
  --primary-color: #2c3e50;
  --accent-color: #e74c3c;
}
```

### Change Phone Number

**File:** `index.html`
**Find:** `+91 9876543210`
**Replace with:** Your phone

### Change Location

**File:** `index.html`
**Find:** `Puducherry, India`
**Replace with:** Your city

---

## 📸 Add Images to Gallery

**Step 1:** Create `images` folder in project root

**Step 2:** Add your photos to the folder

**Step 3:** Edit `index.html` gallery section:

```html
<!-- BEFORE (placeholder) -->
<div class="gallery-item" data-category="wedding">
  <div class="gallery-placeholder">
    <span>Wedding Photo 1</span>
  </div>
</div>

<!-- AFTER (with image) -->
<div class="gallery-item" data-category="wedding">
  <img src="images/wedding-01.jpg" alt="Wedding ceremony">
</div>
```

---

## 📧 Setup Contact Form (Formspree)

### Step 1: Get Form ID

1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email
3. Create form → Get Form ID

### Step 2: Update HTML

**File:** `index.html`

**Find:**
```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

**Replace YOUR_FORM_ID with your actual ID**

---

## 🚀 Deploy to Netlify (Free)

### Step 1: Connect GitHub

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your `photography-website` repo

### Step 2: Deploy

- Leave build settings as default
- Click "Deploy site"
- Wait 1-2 minutes
- Get live URL like: `your-site.netlify.app`

### Step 3: Custom Domain (Optional)

1. Buy domain (Namecheap - ₹300/year)
2. In Netlify: Domain settings → Add custom domain
3. Follow DNS instructions

---

## 🔍 Common Tasks

### Change Service Pricing

**File:** `index.html`

Find: `<p class="service-price">₹20,000 - ₹50,000</p>`

Replace the numbers

### Add Testimonial

**File:** `index.html`

Find testimonials section, add:
```html
<div class="testimonial-card">
  <div class="stars">⭐⭐⭐⭐⭐</div>
  <p class="testimonial-text">"Great service!"</p>
  <p class="testimonial-author">— Client Name</p>
  <p class="testimonial-event">Event Type</p>
</div>
```

### Change Section Title

Find the title in `index.html`, change the text inside:
```html
<h2 class="section-title">Your New Title</h2>
```

### Update Service Description

**File:** `index.html`

Find in services section:
```html
<p>Old description...</p>
```

Replace with:
```html
<p>New description...</p>
```

---

## 🐛 Debugging

### Website Won't Load

```bash
# Check if server is running
# In terminal, you should see: "Serving HTTP on..."

# Try different port
python -m http.server 3000
# Then visit: http://localhost:3000
```

### CSS Not Showing

```bash
# Clear browser cache: Ctrl+Shift+Delete
# Check CSS file path in HTML is correct
# Make sure css/style.css exists
```

### JavaScript Errors

1. Press **F12** to open DevTools
2. Click **Console** tab
3. Read error message
4. Fix the issue in the code

---

## 📱 Test Responsive Design

### Desktop
- Open in Chrome, Firefox, Safari
- Website should look good

### Mobile
1. Press **F12**
2. Click device icon (top-left)
3. Choose iPhone or Android
4. Test all features

### Real Phone
- Visit deployed URL
- Test on your actual phone

---

## 🔐 Security Notes

**Never commit these to GitHub:**
- API keys
- Passwords
- Email addresses (private ones)
- Sensitive data

**Always:**
- Use strong GitHub password
- Enable 2-factor authentication
- Keep repo public (for free hosting)
- Don't share personal tokens

---

## 📊 Analytics Setup

### Add Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create account for your site
3. Get Measurement ID (G-XXXXXX)
4. Add before `</head>` in `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXX');
</script>
```

---

## 🎨 Color Palette Ideas

### Professional Blue
```css
--primary-color: #1a3a52;
--accent-color: #0066cc;
```

### Elegant Purple
```css
--primary-color: #2d1b4e;
--accent-color: #8b5cf6;
```

### Warm Orange
```css
--primary-color: #3d2817;
--accent-color: #f97316;
```

### Fresh Green
```css
--primary-color: #1a3a2a;
--accent-color: #22c55e;
```

### Modern Pink
```css
--primary-color: #3d1f2a;
--accent-color: #ec4899;
```

---

## ❓ FAQ

**Q: How do I change the website title?**
A: Edit `<title>` tag in `index.html`

**Q: Can I use this template multiple times?**
A: Yes! Create different repositories for different clients

**Q: How do I remove a section?**
A: Find the `<section>` tag and delete it

**Q: Can I add more images to gallery?**
A: Yes! Duplicate a `<div class="gallery-item">` and change image src

**Q: Is my site secure?**
A: Yes! It's a static website with no database

**Q: How do I add more services?**
A: Duplicate a `<div class="service-card">` in HTML

---

## 🚨 If Something Breaks

1. **Check browser console** (F12 → Console)
2. **Read the error message**
3. **Search error on Google**
4. **Undo your last change** (use git)
5. **Ask for help on Stack Overflow**

---

## 📚 Useful Links

| Resource | Link |
|----------|------|
| GitHub | https://github.com |
| Netlify | https://netlify.com |
| Formspree | https://formspree.io |
| Namecheap | https://namecheap.com |
| Google Search Console | https://search.google.com/search-console |
| Google Analytics | https://analytics.google.com |
| VS Code | https://code.visualstudio.com |
| Git | https://git-scm.com |

---

## ✅ Launch Checklist

- [ ] All text updated
- [ ] Colors customized
- [ ] Images added to gallery
- [ ] Contact form working
- [ ] Tested on mobile
- [ ] Deployed to Netlify
- [ ] Custom domain connected
- [ ] Analytics added
- [ ] Social media links added

---

## 🎉 You're Ready!

Your website is complete. Now promote it! 📢

- Share on Instagram
- Share on Facebook
- Tell friends and family
- Add to your email signature
- Create Google Business Profile

Good luck! 🚀
