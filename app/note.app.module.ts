import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule, JsonpModule } from '@angular/http';

/* components */
import { NotesComponent } from './components/notes/note.component';
import { NoteService} from "./services/note/noteService";
import { Configuration } from './app.constants';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, JsonpModule, ReactiveFormsModule],
    declarations: [NotesComponent],
    providers: [NoteService, Configuration],
    bootstrap: [NotesComponent]
})

export class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
