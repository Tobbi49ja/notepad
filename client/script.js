document.addEventListener('DOMContentLoaded', () => {
    const noteContainer = document.querySelector('.note-cards');
    const addNoteBtn = document.querySelector('#add-note-btn');
    const searchBtn = document.querySelector('#search-btn');
    const appInfoBtn = document.querySelector('#app-info-btn');
    const searchPanel = document.querySelector('#search-panel');
    const noteInfoPanel = document.querySelector('#note-info-panel');
    const appInfoPanel = document.querySelector('#app-info-panel');
    const searchInput = document.querySelector('#search-input');
    const searchResults = document.querySelector('#search-results');
    const noteInfoContent = document.querySelector('#note-info-content');
    const container = document.querySelector('.container');

    const colors = ['color1', 'color2', 'color3', 'color4', 'color5'];
    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    const saveNotes = () => {
        localStorage.setItem('notes', JSON.stringify(notes));
    };

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const updateContainerHeight = () => {
        const noteCardsHeight = noteContainer.scrollHeight;
        const viewportHeight = window.innerHeight;
        if (notes.length > 0 && noteCardsHeight > viewportHeight) {
            container.classList.add('has-notes');
        } else {
            container.classList.remove('has-notes');
        }
    };

    const renderNotes = () => {
        noteContainer.innerHTML = '';
        notes.forEach((note, index) => {
            const noteCard = document.createElement('div');
            noteCard.classList.add('cards', 'mb-1', getRandomColor());
            noteCard.innerHTML = `
                <div class="note-title">${note.title || 'Untitled'}</div>
                <div class="note-content">${note.content}</div>
                <div class="note-actions">
                    <i class="fa-solid fa-pen-to-square edit-note" data-index="${index}"></i>
                    <i class="fa-solid fa-trash delete-note" data-index="${index}"></i>
                    <i class="fa-solid fa-circle-info bg-no note-info" data-index="${index}"></i>
                </div>
            `;
            noteContainer.appendChild(noteCard);
        });

        document.querySelectorAll('.edit-note').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                localStorage.setItem('editNote', JSON.stringify(notes[index]));
                localStorage.setItem('editIndex', index);
                window.location.href = '/client/add-note.html';
            });
        });

        document.querySelectorAll('.delete-note').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                notes.splice(index, 1);
                saveNotes();
                renderNotes();
                updateContainerHeight();
            });
        });

        document.querySelectorAll('.note-info').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                const note = notes[index];
                noteInfoContent.innerHTML = `
                    <p><strong>Title:</strong> ${note.title || 'Untitled'}</p>
                    <p><strong>Created:</strong> ${new Date(note.createdAt).toLocaleString()}</p>
                `;
                noteInfoPanel.style.display = 'flex';
            });
        });

        updateContainerHeight();
    };

    addNoteBtn.addEventListener('click', () => {
        localStorage.removeItem('editNote');
        localStorage.removeItem('editIndex');
        window.location.href = '/client/add-note.html';
    });

    searchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchResults.innerHTML = '';
        searchPanel.style.display = 'flex';
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';
        const filteredNotes = notes.filter(note =>
            (note.title || 'Untitled').toLowerCase().includes(query) || note.content.toLowerCase().includes(query)
        );
        filteredNotes.forEach(note => {
            const result = document.createElement('div');
            result.classList.add('search-result');
            result.innerHTML = `<strong>${note.title || 'Untitled'}</strong><p>${note.content.substring(0, 50)}...</p>`;
            searchResults.appendChild(result);
        });
    });

    appInfoBtn.addEventListener('click', () => {
        appInfoPanel.style.display = 'flex';
    });

    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            searchPanel.style.display = 'none';
            noteInfoPanel.style.display = 'none';
            appInfoPanel.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === searchPanel || e.target === noteInfoPanel || e.target === appInfoPanel) {
            searchPanel.style.display = 'none';
            noteInfoPanel.style.display = 'none';
            appInfoPanel.style.display = 'none';
        }
    });

    renderNotes();

    // Update height on window resize
    window.addEventListener('resize', updateContainerHeight);
});