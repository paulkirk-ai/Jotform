# Operators Dashboard

A web-based dashboard for Archway Roadmaster UK operators to access forms and applications.

## 🚀 Quick Start for Operators

Access the dashboard at: `https://[your-github-username].github.io/[repository-name]/`

## 📋 Features

- **19 Quick-Access Forms** organized by category:
  - Fleet (5 forms)
  - Operations (5 forms)
  - Equipment (1 form)
  - Safety (2 forms)
  - Scheduling (1 form)
  - Stores (4 forms)
  - Contact (1 form)

- **Color-coded categories** for easy navigation
- **Responsive design** works on desktop, tablet, and mobile
- **Dynamic loading** from JSON data file

## 🔧 For Administrators

### Initial Setup - Deploy to GitHub Pages

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Name it something like `operators-dashboard`
   - Make it public (required for free GitHub Pages)
   - Click "Create repository"

2. **Upload Files to GitHub**
   - Click "uploading an existing file" link
   - Drag and drop ALL files from this folder:
     - `index.html`
     - `admin.html`
     - `styles.css`
     - `admin-styles.css`
     - `app.js`
     - `admin.js`
     - `forms-data.json`
     - `README.md`
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section (left sidebar)
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://[username].github.io/[repository-name]/`

### Adding Collaborators

1. Go to your repository on GitHub
2. Click "Settings" → "Collaborators"
3. Click "Add people"
4. Enter GitHub usernames or email addresses
5. Collaborators will receive an invitation email

**Recommended Permissions:**
- **Read access** - For operators who only need to view
- **Write access** - For supervisors who may update forms
- **Admin access** - Only for IT administrators

### Updating Forms

#### Method 1: Using the Admin Interface (Recommended)

1. Navigate to `admin.html` in your browser
   - URL: `https://[username].github.io/[repository-name]/admin.html`
2. Add, edit, or delete forms using the interface
3. Click "Download forms-data.json"
4. Go to your GitHub repository
5. Click on `forms-data.json`
6. Click the pencil icon (Edit)
7. Delete old content and paste new JSON
8. Scroll down and click "Commit changes"
9. GitHub Pages will automatically update (takes 1-2 minutes)

#### Method 2: Direct File Edit on GitHub

1. Go to your repository on GitHub
2. Click on `forms-data.json`
3. Click the pencil icon (Edit this file)
4. Make your changes to the JSON
5. Scroll down and click "Commit changes"
6. Changes go live automatically

#### Method 3: Git Command Line (Advanced)

```bash
# Clone the repository
git clone https://github.com/[username]/[repository-name].git
cd [repository-name]

# Make changes to forms-data.json
# Then commit and push
git add forms-data.json
git commit -m "Updated forms data"
git push origin main
```

## 📱 Sharing with Operators

### Option 1: Direct Link
Share: `https://[username].github.io/[repository-name]/`

### Option 2: QR Code
1. Use a QR code generator (like qr-code-generator.com)
2. Enter your dashboard URL
3. Download and share the QR code
4. Operators can scan with their phones

### Option 3: Bookmark Instructions
**For Desktop:**
1. Open the dashboard URL
2. Press `Ctrl+D` (Windows) or `Cmd+D` (Mac)
3. Save as bookmark

**For Mobile:**
1. Open the dashboard URL in Safari/Chrome
2. Tap the Share button
3. Select "Add to Home Screen"
4. Now it appears like an app icon

## 🎨 Customization

### Update Company Information
Edit `index.html` and change:
- Company name in header
- Footer text
- Contact email

### Change Colors
Edit `styles.css` to modify:
- Category colors
- Header background
- Button styles

### Add New Categories
1. Edit `forms-data.json` and add new category name
2. Edit `styles.css` and add corresponding color class
3. Update admin interface category dropdown in `admin.html`

## 📊 JSON Data Structure

Each form entry in `forms-data.json` follows this structure:

```json
{
  "title": "Form Name",
  "url": "https://velocity.jotform.com/...",
  "icon": "fa-icon-name",
  "category": "Category Name"
}
```

### Available Icons

Common Font Awesome icons (use format `fa-icon-name`):
- `fa-clipboard-list`, `fa-clock`, `fa-route`, `fa-tasks`
- `fa-truck`, `fa-car`, `fa-tools`, `fa-wrench`
- `fa-exclamation-triangle`, `fa-user-plus`, `fa-calendar-alt`
- `fa-shopping-cart`, `fa-box`, `fa-hard-hat`, `fa-cogs`

See all icons at: https://fontawesome.com/icons

## 🔒 Security & Access Control

### GitHub Repository Visibility
- **Public** (Free): Anyone can view the code, but only collaborators can edit
- **Private** (Paid): Requires GitHub Pro for GitHub Pages

### Protecting Admin Access
The `admin.html` file is accessible to anyone with the link. To protect it:

1. **Option 1**: Don't share the admin.html link publicly
2. **Option 2**: Use GitHub Actions with authentication (advanced)
3. **Option 3**: Host admin interface separately with password protection

**Note**: Since form links are public JotForm URLs, there's no sensitive data exposure.

## 🐛 Troubleshooting

### Dashboard not loading?
- Check that GitHub Pages is enabled in repository settings
- Verify all files were uploaded correctly
- Wait 1-2 minutes after making changes for updates to deploy
- Clear browser cache and refresh

### Forms not appearing?
- Check browser console for errors (F12)
- Verify `forms-data.json` is valid JSON (use JSONLint.com)
- Ensure file names match exactly (case-sensitive)

### Icons not showing?
- Check internet connection (Font Awesome loads from CDN)
- Verify icon name format: `fa-icon-name` (not `fas fa-icon-name` in JSON)

## 📞 Support

For technical issues:
- Email: paul.kirk@archwayroadmaster.co.uk
- Check GitHub Issues tab in repository
- Review this README for common solutions

## 📄 License

Internal use for Archway Roadmaster UK
© 2023 Archway Roadmaster UK

---

**Last Updated**: January 2026
**Maintained By**: IT Department
