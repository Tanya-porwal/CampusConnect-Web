# CampusConnect - Project Structure

## 📁 Folder Organization

```
d:\miniproject\
├── html/          # All HTML pages
│   ├── index.html
│   ├── about.html
│   ├── calendar.html
│   ├── contact.html
│   ├── events.html
│   ├── hackathons.html
│   ├── login.html
│   ├── register.html
│   └── workshops.html
│
├── css/           # All stylesheets
│   ├── main.css
│   ├── layout.css
│   ├── components.css
│   ├── responsive.css
│   ├── mesh.css
│   └── auth.css
│
└── js/            # All JavaScript files
    ├── main.js
    └── events.js
```

## 🚀 How to Run

1. Open `html/index.html` in your browser
2. All paths are now relative (`../css/` and `../js/`)
3. The old `styles/` and `scripts/` folders can be deleted if needed

## ✅ Changes Made

- Created separate `html/`, `css/`, and `js/` folders
- Moved all HTML files to `html/` folder
- Copied CSS files to `css/` folder
- Copied JS files to `js/` folder
- Updated all file references in HTML files to use relative paths
