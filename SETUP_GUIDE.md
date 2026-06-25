# 📚 Complete Setup Guide - Photography Website

This guide will walk you through everything step-by-step to get your photography website up and running.

---

## 📝 TABLE OF CONTENTS

1. [Prerequisites & Installations](#prerequisites--installations)
2. [Local Setup (Running on Your Computer)](#local-setup-running-on-your-computer)
3. [GitHub Setup (Saving to Cloud)](#github-setup-saving-to-cloud)
4. [Deployment (Making it Live)](#deployment-making-it-live)
5. [Customization (Make it Yours)](#customization-make-it-yours)
6. [Maintenance & Updates](#maintenance--updates)

---

## 🔧 Prerequisites & Installations

### What You Need

1. **Git** - Version control software
2. **GitHub Account** - Free at github.com
3. **Code Editor** - For editing files
4. **Web Browser** - For testing

### Install Git

**Windows:**
1. Download from [git-scm.com](https://git-scm.com)
2. Run the installer
3. Keep all default settings
4. Click **Install**

**Mac:**
```bash
# Using Homebrew (if installed)
brew install git

# OR download from https://git-scm.com
```

**Linux:**
```bash
# Ubuntu/Debian
sudo apt-get install git

# Fedora
sudo dnf install git
```

**Verify Installation:**
```bash
git --version
# Should show: git version x.x.x
```

### Install Code Editor

**Recommended: Visual Studio Code**
1. Download from [code.visualstudio.com](https://code.visualstudio.com)
2. Install normally
3. Open VS Code

---

## 💻 Local Setup (Running on Your Computer)

### Step 1: Create Project Folder

**Windows (Command Prompt):**
```bash
# Create folder
mkdir photography-website
cd photography-website
```

**Mac/Linux (Terminal):**
```bash
mkdir photography-website
cd photography-website
```

### Step 2: Download Project Files

**Option A: If you have the files**

1. Download the provided files
2. Extract to your `photography-website` folder
3. Your folder should contain:
   - index.html
   - css/style.css
   - js/script.js
   - README.md
   - .gitignore

**Option B: Create files manually**

Create these files in the `photography-website` folder:

**File 1: index.html**
- Copy the HTML content provided
- Save as `index.html`

**File 2: css/style.css**
- Create `css` folder
- Copy CSS content
- Save as `css/style.css`

**File 3: js/script.js**
- Create `js` folder
- Copy JS content
- Save as `js/script.js`

### Step 3: Start Local Web Server

**Method 1: Using Python (Easiest for Beginners)**

Windows (Command Prompt):
```bash
# Make sure you're in photography-website folder
cd photography-website

# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

Mac/Linux (Terminal):
```bash
# Python 3.x
python3 -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

You should see:
```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

**Method 2: Using VS Code Live Server**

1. Open VS Code
2. Open your project folder (`File` → `Open Folder`)
3. Install extension: Search "Live Server" in extensions
4. Right-click on `index.html`
5. Select "Open with Live Server"

**Method 3: Using Node.js**

```bash
# Install once
npm install -g http-server

# Run
http-server

# Should show:
# HTTP server is running at http://127.0.0.1:8080
```

### Step 4: View Website

Open browser and go to:
```
http://localhost:8000
```

or if using Live Server:
```
http://127.0.0.1:5500
```

You should see your photography website! 🎉

---

## 🐙 GitHub Setup (Saving to Cloud)

### Step 1: Create GitHub Account

1. Go to [github.com](https://github.com)
2. Click **Sign up**
3. Enter:
   - Email address
   - Password (strong password!)
   - Username (e.g., `your-name`)
4. Verify email
5. Complete profile setup

### Step 2: Create New Repository

1. Log in to GitHub
2. Click **+** icon (top-right) → **New repository**
3. Fill in:
   - **Repository name:** `photography-website`
   - **Description:** "Professional photography and event management website"
   - **Visibility:** Select **Public** (for free hosting)
4. **Do NOT** check:
   - Add README file
   - Add .gitignore
   - Choose a license
5. Click **Create repository**

You'll see instructions on the next page. Note your repository URL:
```
https://github.com/YOUR_USERNAME/photography-website.git
```

### Step 3: Initialize Git Locally

Open Command Prompt/Terminal in your project folder:

```bash
# Initialize git
git init

# Configure git (one-time only)
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Photography website"

# Rename branch to main
git branch -M main

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/photography-website.git

# Push files to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username!

### Step 4: Verify on GitHub

1. Go to your GitHub repository
2. You should see your files listed
3. All set! ✅

---

## 🚀 Deployment (Making it Live)

### Option 1: Netlify Deployment (Recommended)

**Easiest and Free**

#### Step 1: Sign Up

1. Go to [netlify.com](https://netlify.com)
2. Click **Sign up**
3. Choose **Sign up with GitHub**
4. Authorize Netlify

#### Step 2: Deploy Site

1. Click **New site from Git**
2. Select **GitHub** as your provider
3. Search and select `photography-website` repository
4. Review build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (dot - root folder)
5. Click **Deploy site**

Netlify will build your site. Wait 1-2 minutes...

#### Step 3: Get Your URL

Once deployed, you'll see a URL like:
```
https://your-site-name.netlify.app
```

Share this URL! Your site is live! 🎉

#### Step 4: Connect Custom Domain (Optional)

1. Buy a domain (Namecheap.com - ₹300/year)
2. In Netlify, go to **Domain settings**
3. Click **Add custom domain**
4. Enter your domain
5. Follow instructions to update DNS

---

### Option 2: Vercel Deployment

**Fast and Modern**

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign up**
3. Choose **Continue with GitHub**
4. Authorize Vercel
5. Click **New Project**
6. Import your `photography-website` repository
7. Click **Deploy**

Your site will be live in seconds at:
```
https://photography-website-XXXXX.vercel.app
```

---

### Option 3: GitHub Pages (Free)

**Uses GitHub's free hosting**

#### Step 1: Enable Pages

1. Go to your GitHub repository
2. Click **Settings**
3. Scroll down to **Pages** section
4. Under "Source", select **main** branch
5. Click **Save**

#### Step 2: Get Your URL

GitHub Pages will build automatically. Your URL will be:
```
https://YOUR_USERNAME.github.io/photography-website/
```

This might take 5-10 minutes to go live.

---

## 🎨 Customization (Make it Yours)

### Step 1: Update Business Information

**Open `index.html` in your editor**

Find and replace:

```html
<!-- Change business name -->
<span class="logo-text">Moments Captured</span>
→
<span class="logo-text">Your Photography Studio</span>

<!-- Change email -->
contact@momentscaptured.com
→
youremail@gmail.com

<!-- Change phone -->
+91 9876543210
→
+91 YOUR_NUMBER

<!-- Change location -->
Puducherry, India
→
Your City, Country
```

### Step 2: Change Colors

**Open `css/style.css`**

Find the `:root` section at the top:

```css
:root {
  --primary-color: #2c3e50;      /* Main dark color */
  --accent-color: #e74c3c;       /* Button/highlight color (RED) */
  --secondary-color: #34495e;    /* Text color */
  --light-bg: #ecf0f1;           /* Background color */
}
```

**Color ideas:**

Elegant (Blue):
```css
--primary-color: #1a3a52;
--accent-color: #0066cc;
```

Modern (Purple):
```css
--primary-color: #2d1b4e;
--accent-color: #8b5cf6;
```

Warm (Orange):
```css
--primary-color: #3d2817;
--accent-color: #f97316;
```

### Step 3: Add Your Photos

1. Create `images` folder in project root
2. Add your photo files
3. Update gallery in `index.html`:

```html
<!-- Find this in gallery section -->
<div class="gallery-item" data-category="wedding">
  <div class="gallery-placeholder">
    <span>Wedding Photo 1</span>
  </div>
</div>

<!-- Replace with -->
<div class="gallery-item" data-category="wedding">
  <img src="images/wedding-01.jpg" alt="Beautiful wedding ceremony">
</div>
```

### Step 4: Update Services & Pricing

Find services section and update:

```html
<p class="service-price">₹20,000 - ₹50,000</p>
```

### Step 5: Add Testimonials

Find testimonials section and update:

```html
<p class="testimonial-text">"The wedding photos were absolutely stunning!"</p>
<p class="testimonial-author">— Client Name</p>
```

---

## 📧 Setup Contact Form

### Using Formspree (Free)

#### Step 1: Create Form

1. Go to [formspree.io](https://formspree.io)
2. Click **Sign up**
3. Enter your email
4. Create form:
   - Name: "Contact Form"
   - Email: youremail@gmail.com
5. Copy the Form ID (looks like: `mxyqpvjlo`)

#### Step 2: Update HTML

Open `index.html` and find:

```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with your actual Form ID:

```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/mxyqpvjlo" method="POST">
```

#### Step 3: Test

1. Visit your website
2. Fill out contact form
3. Submit
4. Check your email for the submission

Done! 📧

---

## 🔄 Maintenance & Updates

### After Making Changes

Every time you update your website:

```bash
# 1. See what changed
git status

# 2. Add changes
git add .

# 3. Commit with message
git commit -m "Updated services and added new photos"

# 4. Push to GitHub
git push origin main
```

Your website will automatically redeploy!

### Common Updates

**Add new gallery photo:**
1. Add image to `images/` folder
2. Add to HTML gallery section
3. Commit and push

**Change prices:**
1. Edit `index.html`
2. Update price text
3. Commit and push

**Fix a bug:**
1. Edit the relevant file
2. Commit with message like "Fix mobile menu"
3. Push

---

## 📱 Test on Mobile

### Browser DevTools

1. Open website in Chrome
2. Press **F12** (or **Ctrl+Shift+I**)
3. Click device icon (top-left)
4. Select **iPhone** or **Android**
5. Test all functionality

### Real Phone

1. Note your deployment URL
2. Open on your phone's browser
3. Test everything:
   - Navigation menu
   - Gallery filtering
   - Contact form
   - All links

---

## 🔍 SEO (Get Found on Google)

### Basic SEO (Already Done)

✅ Meta tags for description
✅ Semantic HTML
✅ Mobile responsive
✅ Fast loading

### Improve Further

1. **Submit to Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your website
   - Submit sitemap

2. **Add Google Analytics**
   - Create account at [analytics.google.com](https://analytics.google.com)
   - Get tracking code
   - Add before `</head>` in HTML:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_ID');
   </script>
   ```

3. **Add Keywords to Meta Tags**
   ```html
   <meta name="keywords" content="photography, wedding photographer, event photography">
   ```

---

## 🎯 Launch Checklist

Before going live:

- [ ] All contact info updated
- [ ] Colors customized to your brand
- [ ] Photos added to gallery
- [ ] Services and prices correct
- [ ] Contact form working
- [ ] Tested on mobile
- [ ] No broken links
- [ ] Professional testimonials added
- [ ] Domain connected (if using custom domain)
- [ ] Analytics setup
- [ ] Deployed to Netlify/Vercel

---

## 🆘 Troubleshooting

**Q: Website won't load locally**
A: Make sure local server is running. Check the terminal for errors.

**Q: CSS not showing**
A: Clear browser cache (Ctrl+Shift+Delete). Check file paths.

**Q: Forms not submitting**
A: Check Formspree Form ID is correct. Test on deployed site.

**Q: Images not showing**
A: Check image file paths. Make sure files exist in `images/` folder.

**Q: Can't push to GitHub**
A: Check your repository URL is correct. Generate GitHub token if needed.

---

## 📞 Next Steps

1. Customize your website
2. Add more photos
3. Get client reviews
4. Setup social media links
5. Promote on Instagram/Facebook
6. Consider SEO improvements

---

## 🎉 Congratulations!

Your professional photography website is ready to launch! 

Best of luck with your photography business! 📸

---

**Questions?**

- Check the README.md file
- Search on Stack Overflow
- Check browser console (F12) for errors
- Ask on GitHub Discussions

Happy shooting! 📷
