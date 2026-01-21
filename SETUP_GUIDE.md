# GitHub Setup Guide for Operators Dashboard

This guide will walk you through setting up and deploying the Operators Dashboard on GitHub Pages.

## 📋 Prerequisites

- A GitHub account (free) - Create one at https://github.com/join
- All the dashboard files downloaded to your computer

## 🚀 Part 1: Initial GitHub Setup (One-Time Setup)

### Step 1: Create a New Repository

1. **Log in to GitHub** at https://github.com
2. **Click the "+" icon** in the top-right corner
3. **Select "New repository"**
4. **Fill in repository details:**
   - **Repository name**: `operators-dashboard` (or your preferred name)
   - **Description**: "Archway Roadmaster UK Operators Dashboard"
   - **Visibility**: Select "Public" (required for free GitHub Pages)
   - **Do NOT** initialize with README (we already have one)
5. **Click "Create repository"**

### Step 2: Upload Your Files

1. **On the repository page**, you'll see quick setup instructions
2. **Click** "uploading an existing file" link (in the middle of the page)
3. **Drag and drop ALL these files** into the upload area:
   ```
   index.html
   admin.html
   styles.css
   admin-styles.css
   app.js
   admin.js
   forms-data.json
   README.md
   .gitignore
   ```
4. **Scroll down** to the commit section
5. **Add commit message**: "Initial dashboard setup"
6. **Click "Commit changes"**

### Step 3: Enable GitHub Pages

1. **Click "Settings"** tab at the top of your repository
2. **Click "Pages"** in the left sidebar
3. **Under "Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. **Click "Save"**
5. **Wait 1-2 minutes** for deployment
6. **Your dashboard URL** will appear at the top:
   ```
   https://[your-username].github.io/operators-dashboard/
   ```
7. **Click the URL** to verify your dashboard is live!

## 👥 Part 2: Adding Collaborators

### Who Should Be a Collaborator?

- **Read Access**: Operators who only need to view (optional - public site)
- **Write Access**: Supervisors who may update forms
- **Admin Access**: IT administrators only

### How to Add Collaborators

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Click "Collaborators"** in the left sidebar
4. **Click "Add people"** button
5. **Enter** GitHub username or email address
6. **Select role**:
   - **Read**: View only
   - **Write**: Can edit files
   - **Admin**: Full control
7. **Click "Add [username] to this repository"**
8. **They'll receive an email** invitation

### Managing 26 Operators

For 26 operators, you have several options:

#### Option 1: No Collaborators Needed (Recommended)
- The dashboard is public, so operators can access it without GitHub accounts
- Only add IT staff and supervisors as collaborators

#### Option 2: Create a Team (If operators need GitHub accounts)
1. **Create a GitHub Organization** (free for public repos)
2. **Create teams** within the organization:
   - "Operators" (Read access)
   - "Supervisors" (Write access)
   - "Admins" (Admin access)
3. **Add repository** to organization
4. **Assign team permissions** to the repository

#### Option 3: Individual Invitations
- Manually invite each operator
- Time-consuming for 26 people
- Better for smaller teams

## 📝 Part 3: Updating the Dashboard

### Method 1: Using the Web Admin Interface (Easiest)

1. **Navigate to admin page**:
   ```
   https://[your-username].github.io/operators-dashboard/admin.html
   ```
2. **Add, edit, or delete forms** as needed
3. **Click "Download forms-data.json"**
4. **Go to GitHub repository**
5. **Click on `forms-data.json`** file
6. **Click pencil icon** (Edit this file)
7. **Delete all content** and paste the new JSON
8. **Scroll down**, add commit message: "Updated forms"
9. **Click "Commit changes"**
10. **Wait 1-2 minutes** for changes to deploy

### Method 2: Direct GitHub Edit (Quick Updates)

1. **Go to your repository** on GitHub
2. **Click `forms-data.json`**
3. **Click pencil icon** (Edit)
4. **Make your changes** directly in the JSON
5. **Scroll down**, add commit message
6. **Click "Commit changes"**

### Method 3: Git Desktop App (For Regular Updates)

1. **Download GitHub Desktop** from https://desktop.github.com
2. **Clone your repository**:
   - File → Clone Repository
   - Select your dashboard repository
3. **Edit files locally** with any text editor
4. **In GitHub Desktop**:
   - Review changes
   - Add commit message
   - Click "Commit to main"
   - Click "Push origin"

## 📱 Part 4: Sharing Dashboard with Operators

### Create a Shortened URL (Optional but Recommended)

1. **Use a URL shortener** like:
   - Bitly: https://bitly.com
   - TinyURL: https://tinyurl.com
2. **Enter your dashboard URL**
3. **Create custom short link**: `bit.ly/archway-ops`
4. **Share this shorter link** instead

### Create QR Code for Mobile Access

1. **Go to** https://www.qr-code-generator.com
2. **Select "URL"** type
3. **Enter your dashboard URL**
4. **Customize** if desired
5. **Download QR code**
6. **Print and post** in workplace

### Email Template to Operators

```
Subject: New Operators Dashboard - Quick Access to All Forms

Hi Team,

We've launched a new dashboard that gives you quick access to all forms and applications.

🔗 Dashboard Link: https://[your-username].github.io/operators-dashboard/

📱 Mobile Users:
1. Open the link on your phone
2. Tap the Share button
3. Select "Add to Home Screen"
4. The dashboard will appear as an app icon

💻 Desktop Users:
1. Open the link in your browser
2. Press Ctrl+D (Windows) or Cmd+D (Mac) to bookmark

All forms are organized by category:
- Fleet (vehicle checks, inspections)
- Operations (timesheets, work orders)
- Safety (incident reports, inductions)
- Stores (PPE, tools, parts requests)
- And more!

Questions? Contact: paul.kirk@archwayroadmaster.co.uk

Best regards,
IT Department
```

### Training Operators

**Quick Start Guide for Operators:**

1. **Access**: Click the dashboard link
2. **Browse**: Forms are organized by color-coded categories
3. **Open**: Click any form to open it in JotForm
4. **Mobile**: Add to home screen for app-like access

**Tips to Share:**
- Bookmark it for daily use
- Forms open in new tabs
- Works on any device
- No login required

## 🔧 Part 5: Maintenance & Troubleshooting

### Regular Maintenance Tasks

- **Monthly**: Review and update forms list
- **Quarterly**: Check all form links are working
- **As needed**: Add new forms or remove outdated ones

### Common Issues

**Issue: Dashboard not updating**
- Solution: Clear browser cache (Ctrl+F5)
- Wait 2-3 minutes after committing changes

**Issue: Forms not loading**
- Check forms-data.json is valid JSON
- Use https://jsonlint.com to validate
- Ensure no trailing commas

**Issue: Icons not showing**
- Check internet connection
- Verify icon names in forms-data.json
- Font Awesome loads from CDN

**Issue: Page 404 Error**
- Verify GitHub Pages is enabled
- Check repository is public
- Wait up to 10 minutes after initial setup

### Getting Help

1. **Check README.md** for documentation
2. **Review GitHub Issues** tab
3. **Contact IT support**: paul.kirk@archwayroadmaster.co.uk
4. **GitHub Pages documentation**: https://docs.github.com/pages

## 🔒 Security Best Practices

### Do's ✅
- Keep repository public for free GitHub Pages
- Only add necessary collaborators
- Don't share admin.html link publicly
- Regularly review collaborators list
- Use commit messages to track changes

### Don'ts ❌
- Don't commit sensitive data (passwords, API keys)
- Don't share write access unnecessarily
- Don't delete the .gitignore file
- Don't modify file names without updating references

## 📊 Version Control Benefits

With GitHub you get:
- **History**: See all changes over time
- **Rollback**: Revert to previous versions if needed
- **Collaboration**: Multiple people can contribute
- **Backup**: Your code is backed up on GitHub
- **Free hosting**: No server costs with GitHub Pages

### Viewing History

1. **Click on any file** in GitHub
2. **Click "History"** button
3. **See all changes** with dates and authors
4. **Click any commit** to see what changed

### Rolling Back Changes

1. **Go to repository main page**
2. **Click "Commits"** 
3. **Find the commit** you want to revert to
4. **Click the commit hash**
5. **Click "Browse files"**
6. **Download or copy the old version**

## 🎓 Next Steps

After setup is complete:

1. ✅ Test dashboard thoroughly
2. ✅ Share link with a small test group
3. ✅ Gather feedback
4. ✅ Make adjustments
5. ✅ Roll out to all 26 operators
6. ✅ Schedule regular reviews

## 📞 Support Contacts

- **Primary Contact**: paul.kirk@archwayroadmaster.co.uk
- **GitHub Support**: https://support.github.com
- **Documentation**: See README.md in repository

---

**Congratulations!** 🎉 Your dashboard is now live on GitHub Pages!

**Last Updated**: January 2026
