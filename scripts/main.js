import { CriminalList } from './criminals/CriminalList.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerSelect } from './officers/OfficerSelect.js'
import { NoteForm } from './notes/NoteForm.js'
import { ShowNoteButton } from './notes/ShowNotesButton.js';
// Import the NoteList.js without calling anything from it, so it knows about the file
import "./notes/NoteList.js"
import "./alibi/alibiList.js"
import "./alibi/alibiButton.js"

NoteForm();
CriminalList();
ConvictionSelect();
OfficerSelect();
ShowNoteButton();
