document.addEventListener('DOMContentLoaded', () => {
    const noteForm = document.querySelector('#note-form');
    const noteTitle = document.querySelector('#note-title');
    const quill = new Quill('#editor', {
        theme: 'snow',
        modules: {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'header': [1, 2, 3, false] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['clean']
            ]
        }
    });

    // Load edit note if exists
    const editNote = JSON.parse(localStorage.getItem('editNote'));
    const editIndex = localStorage.getItem('editIndex');
    if (editNote) {
        noteTitle.value = editNote.title || '';
        quill.root.innerHTML = editNote.content;
    }

    noteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        const newNote = {
            title: noteTitle.value || 'Untitled',
            content: quill.root.innerHTML,
            createdAt: editIndex ? notes[parseInt(editIndex)].createdAt : Date.now()
        };

        if (editIndex) {
            notes[parseInt(editIndex)] = newNote;
        } else {
            notes.push(newNote);
        }

        localStorage.setItem('notes', JSON.stringify(notes));
        localStorage.removeItem('editNote');
        localStorage.removeItem('editIndex');
        window.location.href = 'index.html';
    });
});