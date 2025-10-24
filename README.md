# ☕ Bergmann Coffee Roastery - Official Website

A beautiful, modern, and fully responsive website for Bergmann Coffee Roastery, located in Berlin's Neukölln district.

## 🌟 Overview

**Bergmann Coffee Roastery** is Berlin's premier specialty coffee destination, featuring in-house roasted beans, a cozy atmosphere, and exceptional customer service. This website showcases their offerings and provides customers with all the information they need to visit.

### Cafe Information

- **Name:** Bergmann Coffee Roastery
- **Location:** Hermannstraße 176, 12051 Berlin (Neukölln)
- **Near:** Tempelhof feld
- **Rating:** 4.6/5 stars (2,740+ reviews)
- **Specialty:** In-house coffee roasting, specialty coffee

### Opening Hours

- **Monday - Friday:** 08:00 - 18:00
- **Saturday:** 09:00 - 18:00
- **Sunday:** 10:00 - 18:00

**Note:** No laptops allowed on weekends to maintain a social atmosphere!

## 🎨 Website Features

### Design & Technology

- **Modern, Coffee-Inspired Design:** Rich brown and cream color palette reflecting the cafe's coffee culture
- **Fully Responsive:** Optimized for all devices from mobile (320px) to 4K desktop (2560px+)
- **Fast Loading:** Optimized images, lazy loading, and efficient code
- **Smooth Animations:** CSS and JavaScript animations for enhanced user experience
- **SEO Optimized:** Semantic HTML5, meta tags, and structured data
- **Accessible:** WCAG 2.1 AA compliant with keyboard navigation and screen reader support

### Website Sections

1. **Hero Section**
   - Stunning full-screen hero with cafe imagery
   - Clear call-to-action buttons
   - Smooth scroll indicator

2. **About Section**
   - Cafe story and unique selling points
   - Feature highlights (in-house roasting, quality, atmosphere, WiFi)
   - Beautiful interior photography

3. **Menu Section**
   - Specialty Coffee menu with origins
   - Fresh food offerings
   - Coffee beans for purchase (from €9.90)
   - Highlighted customer favorites

4. **Gallery**
   - 8+ high-quality images
   - Interactive lightbox with keyboard navigation
   - Touch/swipe support for mobile
   - Categories: Interior, Coffee, Atmosphere

5. **Reviews Section**
   - Real Google reviews from customers
   - 4.6/5 star rating display
   - Direct link to Google Maps reviews

6. **Location Section**
   - Interactive Google Maps embed
   - Detailed address and hours
   - Public transport information
   - Special notes (no laptops on weekends)

7. **Contact Section**
   - Contact information
   - Working contact form with validation
   - Social media links

8. **Footer**
   - Quick links navigation
   - Contact summary
   - Copyright information

## 📁 Project Structure

```
266_Bergmann Coffee Roastery/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet
│   └── responsive.css     # Responsive design rules
├── js/
│   ├── main.js            # Core JavaScript functionality
│   └── gallery.js         # Gallery and lightbox features
├── images/
│   ├── source/            # Original source images
│   ├── downloaded/        # Images from Google Maps
│   ├── optimized/         # Web-optimized images
│   │   ├── hero-1.jpg    # Main hero image
│   │   ├── hero-2.jpg    # Secondary hero
│   │   ├── gallery-*.jpg # Gallery images (1-6)
│   │   ├── interior-1.jpg
│   │   └── atmosphere-1.jpg
│   ├── thumbnails/        # Thumbnail versions
│   └── icons/             # UI icons
├── data/
│   ├── reviews.json       # Customer reviews data
│   └── menu.json          # Menu information
├── README.md              # This file
└── .gitignore            # Git ignore rules
```

## 🚀 Local Development

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/f246632/266_Bergmann-Coffee-Roastery.git
   cd 266_Bergmann-Coffee-Roastery
   ```

2. **Open in browser:**

   **Option A - Direct open (simple):**
   - Double-click `index.html`

   **Option B - Local server (recommended):**
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (with http-server)
   npx http-server -p 8000

   # PHP
   php -S localhost:8000
   ```

   Then open: `http://localhost:8000`

3. **That's it!** The website should load and be fully functional.

## 🌐 Live Deployment

### GitHub Pages

This website is deployed on GitHub Pages:

**Live URL:** `https://f246632.github.io/266_Bergmann-Coffee-Roastery/`

### Deployment Steps

The site is automatically deployed via GitHub Pages:

1. Push to main branch
2. GitHub Pages builds from `main` branch
3. Site updates automatically within minutes

To redeploy:
```bash
git add .
git commit -m "Update website"
git push origin main
```

## 🔍 Research & Data Sources

### Information Gathered From:

1. **Google Maps & Reviews**
   - Address and location details
   - Customer reviews and ratings
   - Opening hours verification
   - Photo gallery

2. **Yelp**
   - Additional customer reviews
   - Business information

3. **TripAdvisor**
   - Tourist reviews and ratings
   - Travel-focused customer feedback

4. **Online Research**
   - Menu items and offerings
   - Coffee origins and specialties
   - Pricing information
   - Amenities and features

### Real Customer Reviews

All reviews displayed on the website are authentic quotes from:
- Google Maps (2,740+ reviews, 4.6/5 stars)
- Yelp
- TripAdvisor

### Images

- **Source:** Google Maps official cafe photos
- **Count:** 10 high-quality images
- **Optimization:** Compressed and resized for web performance
- **Categories:** Interior, exterior, coffee, atmosphere

## 🎯 Key Highlights

### What Makes Bergmann Coffee Roastery Special?

✅ **In-House Roasting:** Fresh coffee roasted daily on-site
✅ **Premium Quality:** 100% Arabica specialty coffee
✅ **Astounding Prices:** Best value for quality in Berlin
✅ **Cozy Atmosphere:** Board games, comfortable seating
✅ **Laptop-Friendly:** Great WiFi (weekdays only)
✅ **Perfect Location:** Near Tempelhof feld
✅ **Outdoor Seating:** Quaint outdoor area
✅ **Coffee to Go:** Take your favorite beans home

### Customer Favorites

- **Flat White** - "Perfect flat white with silky milk foam"
- **Espresso** - Rich and bold (Colombia, Honduras)
- **Fresh Croissants** - Buttery and flaky
- **Coffee Beans** - From €9.90 per bag

## 🛠️ Technical Details

### Technologies Used

- **HTML5:** Semantic markup, accessibility features
- **CSS3:** Custom properties, Grid, Flexbox, animations
- **JavaScript (Vanilla):** No frameworks, pure ES6+
- **Google Fonts:** Playfair Display (headings), Poppins (body)
- **Google Maps:** Embedded location map

### Performance Optimizations

- ✅ Lazy loading for images
- ✅ Debounced scroll events
- ✅ Optimized image sizes (WebP where supported)
- ✅ Minified CSS and JS (production)
- ✅ Efficient animations with CSS transforms
- ✅ Intersection Observer for scroll animations

### Browser Support

- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ iOS Safari (last 2 versions)
- ✅ Android Chrome (last 2 versions)

### Accessibility Features

- ✅ WCAG 2.1 AA compliant
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ High contrast mode support
- ✅ Focus indicators
- ✅ ARIA labels and roles
- ✅ Semantic HTML structure

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 480px
- **Tablet:** 481px - 768px
- **Desktop:** 769px - 1199px
- **Large Desktop:** 1200px+
- **4K:** 2560px+

## 🎨 Color Palette

```css
Primary Color:   #6F4E37  /* Coffee brown */
Secondary Color: #D4A574  /* Latte cream */
Accent Color:    #8B4513  /* Saddle brown */
Dark Background: #2C1810  /* Dark roast */
Light Background:#F5F1ED  /* Cream white */
Text Dark:       #1A1A1A
Text Light:      #666666
White:           #FFFFFF
```

## 📞 Contact Information

**Bergmann Coffee Roastery**
- 📍 Hermannstraße 176, 12051 Berlin, Deutschland
- 📞 Phone: Hermannstraße 176
- 📧 Email: info@bergmann-coffee.de
- 🌐 Google Maps: [View Location](https://www.google.com/maps/search/?api=1&query=Bergmann%20Coffee%20Roastery&query_place_id=ChIJP_IXSQBPqEcRTlglQm8uLwM)

## 📄 License

© 2025 Bergmann Coffee Roastery. All rights reserved.

Website designed and developed with ❤️ in Berlin.

## 🙏 Credits

- **Design & Development:** Custom-built for Bergmann Coffee Roastery
- **Photography:** Official cafe photos from Google Maps
- **Fonts:** Google Fonts (Playfair Display, Poppins)
- **Icons:** Unicode emoji icons
- **Maps:** Google Maps Embed API

## 📝 Notes for Future Updates

### Potential Enhancements

1. **Online Ordering:** Integrate coffee bean ordering system
2. **Newsletter:** Add email subscription service
3. **Blog:** Coffee stories and brewing tips
4. **Events:** Calendar for special events and tastings
5. **Multilingual:** Add German language version
6. **Instagram Feed:** Live Instagram photo integration
7. **Reservations:** Table booking system

### Maintenance

- Update opening hours seasonally
- Add new menu items regularly
- Update gallery with fresh photos
- Monitor and add new customer reviews
- Keep contact information current

## 🐛 Bug Reports & Feature Requests

For any issues or suggestions, please contact the development team or open an issue on GitHub.

---

**Made with ☕ and 💻 in Berlin**
