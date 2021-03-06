import { CriminalList } from './criminals/CriminalList.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerSelect } from './officers/OfficerSelect.js'
import { ShowNoteButton } from './notes/ShowNotesButton.js';
// Import the NoteList.js without calling anything from it, so it knows about the file
import "./notes/NoteList.js"
import "./alibi/alibiList.js"
import "./alibi/alibiButton.js"
import { WitnessList } from './witnesses/witnessList.js';
import { ShowWitnessButton } from './witnesses/witnessButton.js';
import { ShowCriminalButton } from './criminals/criminalButton.js';
import { NoteForm } from './notes/NoteForm.js';
import { ShowFacilityButton } from './facility/facilitiesButtonClicked.js';
import { FacilityList } from './facility/facilityList.js';

WitnessList();
FacilityList();
NoteForm()
CriminalList();
ConvictionSelect();
OfficerSelect();
ShowNoteButton();
ShowWitnessButton();
ShowCriminalButton();
ShowFacilityButton();