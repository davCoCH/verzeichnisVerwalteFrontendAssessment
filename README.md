# Verzeichnisverwalter von @DavCoCH

## Diese App wurde als Übung für ein Frontend-Assessment erstellt.

### Die verwendeten Technologien sind:

- **Vite** als Paketmanager
- **JavaScript**
- **Node.js**
- **React**
- **json-serve\*** Mock API

Für das Styling wurde die **CSS-Module-Methode** implementiert.
**Routenalias**, um den Import von Stilen, Komponenten und Hooks zu erleichtern. -> import element from '@something/element'

---

### **Technischer Test: JavaScript, React und CSS mit CRUD-Funktionalität**

#### **Ziel:**

Entwickeln Sie eine Webanwendung zur Verwaltung eines Benutzerverzeichnisses mit vollständiger CRUD-Funktionalität (Erstellen, Lesen, Aktualisieren, Löschen) unter Verwendung von JavaScript, React und CSS.

---

### **Funktionale Anforderungen:**

1. **Benutzer erstellen:**

   - Der Benutzer soll neue Benutzer hinzufügen können, indem er ein Formular mit folgenden Feldern ausfüllt:
     - Name.
     - E-Mail-Adresse.
     - Telefonnummer.

2. **Benutzer anzeigen:**

   - Eine Liste aller Benutzer soll angezeigt werden.
   - Jeder Benutzerdatensatz soll folgende Informationen enthalten:
     - Name.
     - E-Mail-Adresse.
     - Telefonnummer.
     - Schaltflächen für „Bearbeiten“ und „Löschen“.

3. **Benutzer aktualisieren:**

   - Der Benutzer soll die Informationen eines vorhandenen Benutzers bearbeiten können.
   - Beim Klicken auf „Bearbeiten“ soll ein Formular mit den aktuellen Informationen des Benutzers angezeigt werden, das bearbeitet und gespeichert werden kann.

4. **Benutzer löschen:**
   - Der Benutzer soll in der Lage sein, Benutzer aus der Liste zu entfernen.
   - Optional: Zeigen Sie vor dem Löschen eine Bestätigungsaufforderung an.

---

### **Technische Anforderungen:**

1. **JavaScript/React:**

   - Implementieren Sie die CRUD-Funktionalität unter Verwendung des React-Komponentenmodells.
   - Verwenden Sie Hooks wie `useState` und `useEffect`, um den Zustand und die Datenverwaltung zu implementieren.
   - Strukturieren Sie die Anwendung in logische Komponenten (z. B. `UserList`, `UserForm`, `UserItem`).

2. **CSS:**

   - Gestalten Sie die Benutzeroberfläche so, dass sie klar und benutzerfreundlich ist.
   - Fügen Sie visuelle Hinweise hinzu, um Aktionen wie Bearbeiten und Löschen zu verdeutlichen.
   - Machen Sie das Design responsiv, damit es auf Mobilgeräten und Desktops gut funktioniert.

3. **Datenpersistenz:**

   - Speichern Sie die Benutzerliste im lokalen Speicher des Browsers (`localStorage`), damit die Daten auch nach dem Neuladen der Seite verfügbar sind.

4. **Fehlerbehandlung:**
   - Validieren Sie Benutzereingaben (z. B. prüfen Sie, ob die E-Mail-Adresse gültig ist und keine Felder leer sind).
   - Zeigen Sie Fehlermeldungen an, wenn eine Validierung fehlschlägt.

---

### **Zusätzliche Anforderungen (optional für Bonuspunkte):**

1. **Suchfunktion:**

   - Fügen Sie eine Suchleiste hinzu, um Benutzer nach Name oder E-Mail-Adresse zu filtern.

2. **Sortierung:**

   - Implementieren Sie eine Funktion, um Benutzer alphabetisch nach Namen zu sortieren.

3. **API-Simulation:**
   - Simulieren Sie API-Anfragen, indem Sie CRUD-Operationen mit `fetch` oder einer Mock-API (z. B. [json-server](https://github.com/typicode/json-server)) implementieren.

---

### **Bewertungskriterien:**

1. **Funktionalität:**

   - Alle CRUD-Funktionen sind vollständig implementiert und funktionieren einwandfrei.
   - Die Anwendung erfüllt die Anforderungen.
   - Filter und Interaktionen funktionieren einwandfrei.

2. **Codequalität:**

   - Der Code ist sauber und gut organisiert.
   - Best Practices für React und JavaScript werden eingehalten.
   - Angemessene Verwendung von Zustand und Props.
   - Angemessene Verwendung von React und Hooks.
   - Korrekte Trennung der Verantwortlichkeiten zwischen den Komponenten.

3. **Design und Benutzerfreundlichkeit:**

   - Die Anwendung ist optisch ansprechend und benutzerfreundlich.
   - Das Design passt sich gut an verschiedene Bildschirmgrößen an.
   - Die Benutzeroberfläche ist intuitiv und optisch ansprechend.

4. **Extras:**
   - Implementierung zusätzlicher Funktionen wie Suche, Sortierung oder API-Simulation.

### **Lieferumfang:**

1. Quellcode des Projekts (hochgeladen auf GitHub).
