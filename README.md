Note-App
A simple, elegant note-taking web application built with HTML, CSS, and JavaScript. Note-App allows users to create, edit, delete, and search notes with a clean interface, rich text editing, and local storage for persistence. The app features a responsive design and smooth animations for an enhanced user experience.
Features

Create Notes: Add new notes with a title and content using a simple form.
Edit Notes: Modify existing notes seamlessly.
Delete Notes: Remove notes with a single click.
Search Notes: Filter notes by title or content with real-time search results.
Note Info: View details like creation date for each note.
Responsive Design: Adapts to various screen sizes (desktop, tablet, mobile).
Dynamic Height: Container height adjusts to 100vh when no notes exist or content is less than the viewport height, and switches to auto when notes exceed the viewport.
Animations: Smooth fade-in and slide-in effects for notes and panels, with hover animations for buttons.
Local Storage: Notes are saved in the browser's local storage for persistence.
Colorful Notes: Notes are displayed with random background colors for visual distinction.

Installation
To run Note-App locally, follow these steps:

Clone the Repository:git clone https://github.com/Tobbi49ja/note-app.git


Navigate to the Project Directory:cd note-app


Open the App:
Open index.html in a web browser (e.g., Chrome, Firefox) to run the app locally. No server is required as it uses client-side JavaScript.
Alternatively, use a local development server (e.g., with VS Code's Live Server extension or npx http-server).



Usage

View Notes: On loading the app, existing notes (if any) are displayed as cards with random background colors.
Add a Note: Click the + button at the bottom-right to navigate to the note creation form. Enter a title and content, then submit.
Edit a Note: Click the pencil icon on a note card to edit its title and content.
Delete a Note: Click the trash icon on a note card to remove it.
View Note Info: Click the info icon on a note card to see its title and creation date.
Search Notes: Click the magnifying glass icon to open the search panel. Type in the search bar to filter notes by title or content.
About the App: Click the info button in the header to view app details (name, developer, version, description).

Project Structure
note-app/
├── index.html        # Main page displaying notes
├── style.css         # Styles for layout, animations, and responsive design
├── script.js         # JavaScript for note management, search, and dynamic height
├── client/
│   └── add-note.html # Form for creating/editing notes

Technologies Used

HTML5: Structure of the app.
CSS3: Styling with Flexbox, animations, and media queries for responsiveness.
JavaScript: Client-side logic for note CRUD operations, local storage, and dynamic UI updates.
Font Awesome: Icons for buttons and actions.
Local Storage: For persisting notes in the browser.

Screenshots
(Optional: Add screenshots of the app here. You can capture images of the note list, search panel, and note form, then upload them to the repository and link them here.)
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Please ensure your code follows the existing style and includes appropriate comments.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Author

Developer: Tobbi
Version: 1.0.0

Future Improvements

Add rich text editing capabilities to the note content.
Implement note categories or tags for better organization.
Add support for exporting/importing notes.
Enhance accessibility with ARIA labels and keyboard navigation.

For any issues or suggestions, please open an issue on the GitHub repository.
