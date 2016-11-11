import { Component } from '@angular/core';
import { NoteService } from "../../services/note/noteService";
import { NoteModel } from "../../models/note/noteModel";
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { ResponseStatus } from "../../models/common/responseStatus";

@Component({
    selector: 'notes',
    templateUrl: 'html/note.component.html'
})

export class NotesComponent {
}

