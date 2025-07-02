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

⭐ **Star das Repository**, wenn es dir gefällt!