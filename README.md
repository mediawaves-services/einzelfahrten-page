# Einzelfahrten - Landing Page

Eine moderne, responsive Landing Page für die Einzelfahrten-App - die App zur einfachen Erfassung von Einzelfahrten zum Büro bei Firmenwagen für die steuerlich vorteilhafte 0,002%-Regel.

## 🚀 Features

- **Responsive Design**: Optimiert für alle Geräte (Mobile-First)
- **Moderne UI**: Clean Design mit der Corporate Identity (#1d4ed8)
- **Interaktive Elemente**: FAQ-Accordion, Smooth Scrolling, Animationen
- **SEO-optimiert**: Meta-Tags, semantisches HTML
- **Performance**: Keine externen Libraries, optimierte Assets

## 📁 Projektstruktur

```
Page/
├── index.html          # Haupt-HTML-Datei
├── style.css           # Stylesheet
├── script.js           # JavaScript für Interaktivität
├── assets/             # Ordner für Bilder (optional)
└── README.md           # Diese Datei
```

## 🎨 Design-System

### Farben
- **Primärfarbe**: #1d4ed8 (kräftiges Blau)
- **Akzentfarbe**: #f1f5f9 (helles Grau)
- **Text**: #1f2937 (dunkles Grau)
- **Hintergrund**: #ffffff (weiß)

### Typografie
- **Schriftart**: Inter (Google Fonts)
- **Fallback**: System Fonts (Apple, Windows, Linux)

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🔧 Anpassungen

### Bilder hinzufügen
1. Bilder in den `assets/` Ordner legen
2. In `index.html` die Platzhalter-Emojis durch `<img>` Tags ersetzen:

```html
<!-- Vorher -->
<div class="placeholder-image">📱</div>

<!-- Nachher -->
<img src="assets/screenshot1.png" alt="App Screenshot" class="feature-image">
```

### Kontaktformular
Das Formular ist aktuell auf `mailto:` konfiguriert. Für eine echte Implementierung:

1. **Formspree**: `action="https://formspree.io/f/YOUR_FORM_ID"`
2. **Netlify Forms**: `data-netlify="true"`
3. **Eigener Backend**: Anpassen der `action` URL

### App-Store Links
Sobald die App veröffentlicht ist, können die CTA-Buttons angepasst werden:

```html
<a href="https://apps.apple.com/app/einzelfahrten" class="cta-button">
    <span>App Store</span>
</a>
```

## 🚀 Deployment

### GitHub Pages
1. Repository auf GitHub erstellen
2. Dateien hochladen
3. Settings → Pages → Source: "Deploy from a branch"
4. Branch: `main`, Folder: `/ (root)`

### Netlify
1. Repository mit Netlify verbinden
2. Build settings: Build command leer lassen
3. Publish directory: `/`

### Vercel
1. Repository mit Vercel verbinden
2. Framework Preset: "Other"
3. Deploy

## 📊 SEO & Analytics

### Meta-Tags
Alle wichtigen Meta-Tags sind bereits in der `index.html` enthalten:
- Title
- Description
- Viewport
- Charset

### Google Analytics (optional)
Fügen Sie vor dem schließenden `</head>` Tag hinzu:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 Updates

### Content Updates
- **Texte**: Direkt in `index.html` bearbeiten
- **Styling**: In `style.css` anpassen
- **Interaktivität**: In `script.js` erweitern

### Neue Sektionen
1. HTML-Sektion in `index.html` hinzufügen
2. CSS-Styles in `style.css` definieren
3. JavaScript-Funktionalität in `script.js` implementieren

## 📞 Support

Bei Fragen oder Anpassungswünschen:
- GitHub Issues erstellen
- E-Mail an: info@einzelfahrten.app

---

**Entwickelt mit ❤️ für mehr Netto vom Brutto.** 