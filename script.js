class Notebook {
    constructor() {
        this.notes = this.loadNotes();
        this.currentNoteId = null;
        this.autoSaveTimer = null;
        
        this.initializeElements();
        this.bindEvents();
        this.renderNotesList();
        this.updateUI();
    }

    initializeElements() {
        this.elements = {
            newNoteBtn: document.getElementById('newNoteBtn'),
            notesList: document.getElementById('notesList'),
            noteCount: document.getElementById('noteCount'),
            welcomeScreen: document.getElementById('welcomeScreen'),
            editorContainer: document.getElementById('editorContainer'),
            noteTitle: document.getElementById('noteTitle'),
            noteContent: document.getElementById('noteContent'),
            saveBtn: document.getElementById('saveBtn'),
            deleteBtn: document.getElementById('deleteBtn'),
            lastSaved: document.getElementById('lastSaved'),
            wordCount: document.getElementById('wordCount'),
            modalOverlay: document.getElementById('modalOverlay'),
            cancelDelete: document.getElementById('cancelDelete'),
            confirmDelete: document.getElementById('confirmDelete')
        };
    }

    bindEvents() {
        this.elements.newNoteBtn.addEventListener('click', () => this.createNewNote());
        this.elements.noteTitle.addEventListener('input', () => this.onContentChange());
        this.elements.noteContent.addEventListener('input', () => this.onContentChange());
        this.elements.saveBtn.addEventListener('click', () => this.saveCurrentNote());
        this.elements.deleteBtn.addEventListener('click', () => this.showDeleteModal());
        this.elements.cancelDelete.addEventListener('click', () => this.hideDeleteModal());
        this.elements.confirmDelete.addEventListener('click', () => this.deleteCurrentNote());
        this.elements.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.elements.modalOverlay) {
                this.hideDeleteModal();
            }
        });
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
        window.addEventListener('beforeunload', () => this.saveCurrentNote());
    }

    handleKeyboardShortcuts(e) {
        if ((e.metaKey || e.ctrlKey) && e.key === 's') {
            e.preventDefault();
            this.saveCurrentNote();
            this.showSaveConfirmation();
        }
        if ((e.metaKey || e.ctrlKey) && e.key === 'n') {
            e.preventDefault();
            this.createNewNote();
        }
        if (e.key === 'Escape') {
            this.hideDeleteModal();
        }
    }

    loadNotes() {
        try {
            const stored = localStorage.getItem('notebook_notes');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Fehler beim Laden der Notizen:', error);
            return [];
        }
    }

    saveNotes() {
        try {
            localStorage.setItem('notebook_notes', JSON.stringify(this.notes));
        } catch (error) {
            console.error('Fehler beim Speichern der Notizen:', error);
        }
    }

    createNewNote() {
        const newNote = {
            id: this.generateId(),
            title: '',
            content: '',
            created: new Date().toISOString(),
            modified: new Date().toISOString()
        };

        this.notes.unshift(newNote);
        this.currentNoteId = newNote.id;
        this.renderNotesList();
        this.loadNoteInEditor(newNote);
        this.showEditor();
        
        setTimeout(() => {
            this.elements.noteTitle.focus();
        }, 100);
    }

    loadNoteInEditor(note) {
        this.elements.noteTitle.value = note.title;
        this.elements.noteContent.value = note.content;
        this.updateWordCount();
        this.updateLastSaved(note.modified);
    }

    saveCurrentNote() {
        if (!this.currentNoteId) return;

        const note = this.notes.find(n => n.id === this.currentNoteId);
        if (!note) return;

        const title = this.elements.noteTitle.value.trim();
        const content = this.elements.noteContent.value.trim();

        if (!title && !content) {
            this.deleteNote(this.currentNoteId);
            return;
        }

        note.title = title || 'Ohne Titel';
        note.content = content;
        note.modified = new Date().toISOString();

        this.saveNotes();
        this.renderNotesList();
        this.updateLastSaved(note.modified);
    }

    showDeleteModal() {
        if (!this.currentNoteId) return;
        this.elements.modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    hideDeleteModal() {
        this.elements.modalOverlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    deleteCurrentNote() {
        if (!this.currentNoteId) return;

        this.deleteNote(this.currentNoteId);
        this.hideDeleteModal();
        
        if (this.notes.length > 0) {
            this.selectNote(this.notes[0].id);
        } else {
            this.showWelcomeScreen();
        }
    }

    deleteNote(noteId) {
        this.notes = this.notes.filter(note => note.id !== noteId);
        this.saveNotes();
        this.renderNotesList();
        
        if (this.currentNoteId === noteId) {
            this.currentNoteId = null;
        }
    }

    selectNote(noteId) {
        if (this.currentNoteId) {
            this.saveCurrentNote();
        }

        const note = this.notes.find(n => n.id === noteId);
        if (!note) return;

        this.currentNoteId = noteId;
        this.loadNoteInEditor(note);
        this.showEditor();
        this.updateActiveNoteInList();
    }

    showEditor() {
        this.elements.welcomeScreen.style.display = 'none';
        this.elements.editorContainer.style.display = 'flex';
    }

    showWelcomeScreen() {
        this.elements.editorContainer.style.display = 'none';
        this.elements.welcomeScreen.style.display = 'flex';
        this.currentNoteId = null;
    }

    renderNotesList() {
        this.elements.notesList.innerHTML = '';

        this.notes.forEach(note => {
            const noteElement = this.createNoteListItem(note);
            this.elements.notesList.appendChild(noteElement);
        });

        this.updateNoteCount();
        this.updateActiveNoteInList();
    }

    createNoteListItem(note) {
        const noteItem = document.createElement('div');
        noteItem.className = 'note-item';
        noteItem.dataset.noteId = note.id;

        const title = note.title || 'Ohne Titel';
        const preview = this.getPreview(note.content);
        const date = this.formatDate(note.modified);

        noteItem.innerHTML = `
            <div class="note-item-title">${this.escapeHtml(title)}</div>
            <div class="note-item-preview">${this.escapeHtml(preview)}</div>
            <div class="note-item-date">${date}</div>
        `;

        noteItem.addEventListener('click', () => this.selectNote(note.id));

        return noteItem;
    }

    updateActiveNoteInList() {
        const noteItems = this.elements.notesList.querySelectorAll('.note-item');
        noteItems.forEach(item => {
            const isActive = item.dataset.noteId === this.currentNoteId;
            item.classList.toggle('active', isActive);
        });
    }

    onContentChange() {
        this.updateWordCount();
        this.debouncedAutoSave();
    }

    debouncedAutoSave() {
        clearTimeout(this.autoSaveTimer);
        this.autoSaveTimer = setTimeout(() => {
            if (this.currentNoteId) {
                this.saveCurrentNote();
            }
        }, 1000);
    }

    updateWordCount() {
        const content = this.elements.noteContent.value;
        const words = content.trim() ? content.trim().split(/\s+/).length : 0;
        this.elements.wordCount.textContent = `${words} Wörter`;
    }

    updateLastSaved(dateString) {
        const date = new Date(dateString);
        const formatted = this.formatTime(date);
        this.elements.lastSaved.textContent = `Zuletzt gespeichert: ${formatted}`;
    }

    showSaveConfirmation() {
        const originalText = this.elements.lastSaved.textContent;
        this.elements.lastSaved.textContent = '✓ Gespeichert';
        this.elements.lastSaved.style.color = '#34c759';
        
        setTimeout(() => {
            this.elements.lastSaved.textContent = originalText;
            this.elements.lastSaved.style.color = '';
        }, 2000);
    }

    updateNoteCount() {
        const count = this.notes.length;
        this.elements.noteCount.textContent = `${count} ${count === 1 ? 'Notiz' : 'Notizen'}`;
    }

    updateUI() {
        if (this.notes.length === 0) {
            this.showWelcomeScreen();
        } else if (this.currentNoteId) {
            const note = this.notes.find(n => n.id === this.currentNoteId);
            if (note) {
                this.loadNoteInEditor(note);
                this.showEditor();
            }
        }
    }

    generateId() {
        return 'note_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    getPreview(content, maxLength = 100) {
        if (!content) return 'Keine zusätzlichen Informationen';
        return content.length > maxLength ? 
            content.substring(0, maxLength) + '...' : content;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            return 'Heute';
        } else if (diffDays === 2) {
            return 'Gestern';
        } else if (diffDays <= 7) {
            return `vor ${diffDays - 1} Tagen`;
        } else {
            return date.toLocaleDateString('de-DE', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        }
    }

    formatTime(date) {
        return date.toLocaleTimeString('de-DE', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const notebook = new Notebook();
    window.notebook = notebook;
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        console.log('Notizbuch bereit!');
    });
}