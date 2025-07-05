# 📝 Modernes Notizbuch

Ein elegantes, minimalistisches Notizbuch mit modernem Glasmorphismus-Effekt und vollständiger Offline-Funktionalität.

## ✨ Features

### 🎯 Kernfunktionen
- **Notizen erstellen** - Schnell neue Notizen mit Fokus auf Benutzerfreundlichkeit
- **Live-Editor** - Echtzeit-Bearbeitung mit Auto-Save
- **Sichere Speicherung** - Lokale Datenpersistenz mit localStorage
- **Intelligentes Löschen** - Bestätigungsdialog und automatische Bereinigung leerer Notizen

### 🎨 Modernes Design
- **Glasmorphismus** - Moderne Blur-Effekte und Transparenzen
- **Clean Typography** - Professionelle Schriftart-Auswahl
- **Smooth Animations** - Flüssige Übergänge und Hover-Effekte
- **Responsive Design** - Optimiert für Desktop und Mobile

### ⚡ Produktivität
- **Keyboard Shortcuts** - `Cmd/Ctrl+S` (Speichern), `Cmd/Ctrl+N` (Neue Notiz)
- **Wort-Zähler** - Live-Update während des Tippens
- **Zeitstempel** - "Zuletzt gespeichert" Anzeige
- **Notizen-Vorschau** - Schnelle Übersicht in der Sidebar

## 🚀 Quick Start

### Installation
```bash
# Repository klonen
git clone https://github.com/FriggemannMichael/modernes-notizbuch.git

# In das Verzeichnis wechseln
cd modernes-notizbuch

# Einfach index.html im Browser öffnen
open index.html
```

### Sofort loslegen
1. **Neue Notiz erstellen** - Klick auf "Neue Notiz" oder `Cmd/Ctrl+N`
2. **Titel eingeben** - Automatischer Fokus auf das Titel-Feld
3. **Inhalt schreiben** - Auto-Save aktiviert sich nach 1 Sekunde
4. **Speichern** - `Cmd/Ctrl+S` oder manuell über den Speichern-Button

## 📁 Projektstruktur

```
modernes-notizbuch/
├── index.html          # Hauptstruktur und Layout
├── style.css           # Modernes Design und Animationen
├── script.js           # Funktionalität und Datenmanagement
└── README.md           # Projektdokumentation
```

## 🛠️ Technische Details

### Frontend-Stack
- **HTML5** - Semantische Struktur mit modernen Web-Standards
- **CSS3** - Flexbox, Grid, Custom Properties und Glasmorphismus
- **Vanilla JavaScript** - ES6+ Features, Classes und Module Pattern

### Browser-Kompatibilität
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Datenspeicherung
- **localStorage** - Clientseitige Persistierung
- **JSON-Format** - Strukturierte Datenhaltung
- **Error Handling** - Robuste Fehlerbehandlung

## 🎮 Verwendung

### Tastenkombinationen
| Shortcut | Aktion |
|----------|--------|
| `Cmd/Ctrl + N` | Neue Notiz erstellen |
| `Cmd/Ctrl + S` | Aktuelle Notiz speichern |
| `Escape` | Modal-Dialog schließen |

### Features im Detail

**Auto-Save Funktionalität**
- Automatisches Speichern nach 1 Sekunde Inaktivität
- Verhindert Datenverlust bei unerwarteten Browser-Schließungen
- Visuelles Feedback durch "Gespeichert"-Bestätigung

**Intelligente Notizen-Verwaltung**
- Chronologische Sortierung (neueste zuerst)
- Automatische Vorschau-Generierung
- Relative Zeitstempel (Heute, Gestern, vor X Tagen)

**Responsive Sidebar**
- Vollständige Notizenliste mit Scroll-Funktionalität
- Aktive Notiz-Hervorhebung
- Live-Aktualisierung der Notizen-Anzahl

## 🎨 Design-Prinzipien

### Moderne UI/UX Guidelines
- **Klarheit** - Saubere, fokussierte Benutzeroberfläche
- **Tiefe** - Layering durch Schatten und Blur-Effekte
- **Vertrautheit** - Intuitive Bedienung durch bekannte Patterns

### Farbpalette
```css
Primary Blue:    #007aff    /* Modernes Blau */
Text Primary:    #1d1d1f    /* Dunkles Grau für Text */
Text Secondary:  #8e8e93    /* Mittleres Grau für Zusatzinfo */
Text Tertiary:   #c7c7cc    /* Helles Grau für Platzhalter */
Success Green:   #34c759    /* Für Erfolgs-Meldungen */
Danger Red:      #ff3b30    /* Für Lösch-Aktionen */
```

## 🔧 Entwicklung

### Code-Struktur
```javascript
class Notebook {
    constructor()           // Initialisierung
    initializeElements()    // DOM-Referenzen
    bindEvents()           // Event-Listener
    createNewNote()        // Notiz-Erstellung
    saveCurrentNote()      // Speicher-Logik
    renderNotesList()      // UI-Updates
    // ... weitere Methoden
}
```

### Erweiterungsmöglichkeiten
- 🔍 **Suchfunktion** - Volltext-Suche durch Notizen
- 🏷️ **Tags/Kategorien** - Notizen-Organisation
- 🌙 **Dark Mode** - Dunkles Theme
- ☁️ **Cloud-Sync** - Online-Synchronisation
- 📤 **Export** - PDF/Markdown Export-Funktion



## 📄 Lizenz

MIT License - Siehe [LICENSE](LICENSE) für Details.

## 🤝 Beitragen

Contributions sind willkommen! Bitte:

1. **Fork** das Repository
2. **Branch** erstellen (`git checkout -b feature/neue-funktion`)
3. **Commit** der Änderungen (`git commit -m 'Neue Funktion hinzugefügt'`)
4. **Push** zum Branch (`git push origin feature/neue-funktion`)
5. **Pull Request** erstellen

## 📞 Kontakt

**Entwickelt von** Friggemann Michael  
**GitHub:** [@FriggemannMichael](https://github.com/FriggemannMichael)  
**Email:** m.friggemann@proton.me

---
# 📝 Modern Notebook

An elegant, minimalistic notebook with modern glassmorphism effects and complete offline functionality.

## ✨ Features

### 🎯 Core Functions

- **Create Notes** - Quickly create new notes with focus on user experience
- **Live Editor** - Real-time editing with auto-save
- **Secure Storage** - Local data persistence with localStorage
- **Smart Deletion** - Confirmation dialog and automatic cleanup of empty notes

### 🎨 Modern Design

- **Glassmorphism** - Modern blur effects and transparencies
- **Clean Typography** - Professional font selection
- **Smooth Animations** - Fluid transitions and hover effects
- **Responsive Design** - Optimized for desktop and mobile

### ⚡ Productivity

- **Keyboard Shortcuts** - Cmd/Ctrl+S (Save), Cmd/Ctrl+N (New Note)
- **Word Counter** - Live updates while typing
- **Timestamps** - “Last saved” display
- **Note Preview** - Quick overview in the sidebar

## 🚀 Quick Start

### Installation

```bash
# Clone repository
git clone https://github.com/FriggemannMichael/modernes-notizbuch.git

# Navigate to directory
cd modernes-notizbuch

# Simply open index.html in browser
open index.html
```

### Get Started Immediately

1. **Create New Note** - Click “New Note” or Cmd/Ctrl+N
1. **Enter Title** - Automatic focus on title field
1. **Write Content** - Auto-save activates after 1 second
1. **Save** - Cmd/Ctrl+S or manually via Save button

## 📁 Project Structure

```
modernes-notizbuch/
├── index.html          # Main structure and layout
├── style.css           # Modern design and animations
├── script.js           # Functionality and data management
└── README.md           # Project documentation
```

## 🛠️ Technical Details

### Frontend Stack

- **HTML5** - Semantic structure with modern web standards
- **CSS3** - Flexbox, Grid, Custom Properties and Glassmorphism
- **Vanilla JavaScript** - ES6+ Features, Classes and Module Pattern

### Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Data Storage

- **localStorage** - Client-side persistence
- **JSON Format** - Structured data management
- **Error Handling** - Robust error management

## 🎮 Usage

### Keyboard Shortcuts

|Shortcut    |Action            |
|------------|------------------|
|Cmd/Ctrl + N|Create new note   |
|Cmd/Ctrl + S|Save current note |
|Escape      |Close modal dialog|

### Features in Detail

**Auto-Save Functionality**

- Automatic saving after 1 second of inactivity
- Prevents data loss from unexpected browser closures
- Visual feedback through “Saved” confirmation

**Intelligent Note Management**

- Chronological sorting (newest first)
- Automatic preview generation
- Relative timestamps (Today, Yesterday, X days ago)

**Responsive Sidebar**

- Complete note list with scroll functionality
- Active note highlighting
- Live update of note count

## 🎨 Design Principles

### Modern UI/UX Guidelines

- **Clarity** - Clean, focused user interface
- **Depth** - Layering through shadows and blur effects
- **Familiarity** - Intuitive operation through known patterns

### Color Palette

```css
Primary Blue:    #007aff    /* Modern Blue */
Text Primary:    #1d1d1f    /* Dark Gray for Text */
Text Secondary:  #8e8e93    /* Medium Gray for Additional Info */
Text Tertiary:   #c7c7cc    /* Light Gray for Placeholders */
Success Green:   #34c759    /* For Success Messages */
Danger Red:      #ff3b30    /* For Delete Actions */
```

## 🔧 Development

### Code Structure

```javascript
class Notebook {
    constructor()           // Initialization
    initializeElements()    // DOM References
    bindEvents()           // Event Listeners
    createNewNote()        // Note Creation
    saveCurrentNote()      // Save Logic
    renderNotesList()      // UI Updates
    // ... additional methods
}
```

### Extension Possibilities

- 🔍 **Search Function** - Full-text search through notes
- 🏷️ **Tags/Categories** - Note organization
- 🌙 **Dark Mode** - Dark theme
- ☁️ **Cloud Sync** - Online synchronization
- 📤 **Export** - PDF/Markdown export functionality

## 📄 License

MIT License - See LICENSE for details.

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
1. Create branch (`git checkout -b feature/new-feature`)
1. Commit changes (`git commit -m 'Add new feature'`)
1. Push to branch (`git push origin feature/new-feature`)
1. Create Pull Request

## 📞 Contact

**Developed by Friggemann Michael**

- GitHub: [@FriggemannMichael](https://github.com/FriggemannMichael)
- Email: m.friggemann@proton.me


⭐ **Star das Repository**, wenn es dir gefällt!