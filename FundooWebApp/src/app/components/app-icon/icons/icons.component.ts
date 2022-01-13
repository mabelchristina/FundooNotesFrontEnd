import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/note/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {
  isdeleted = true;
  isArchive=true;
  colors: any[] = [
    {
      "color": "#FFFFFF"
    },
    {
      "color": "#ff5c5c"
    },
    {
      "color": "#ffb01f"
    },
    {
      "color": "#ffff3d"
    },
    {
      "color": "#5cff5c"
    },
    {
      "color": "#1fffff"
    },
    {
      "color": "#add8e6"
    },
    {
      "color": "#6495ed"
    },
    {
      "color": "#dda0dd"
    },
    {
      "color": "#fbcce7"
    },
    {
      "color": "#cd853f"
    },
    {
      "color": "#dcdcdc"
    }
    
  ];

  constructor(private noteService: NotesService) {}
 
  @Input() noteId: any;
  @Input() IsTrash: any;
  @Input() IsUnArchive: any;
  @Output() backGroundColor = new EventEmitter<any>();

  ngOnInit(): void {}

  deleteNote() {
    console.log(this.noteId);
    let data = {
      noteIdList: [this.noteId.id],
      isDeleted: true,
    };
    console.log(data);
    this.noteService.trashnote(data).subscribe(
      (res) => {
        console.log('Success', res);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
  getArchive() {
    let data = {
      "noteIdList": [this.noteId.id],
      "isArchived": true,
    }
    console.log(data)

    this.noteService.archiveNote(data).subscribe(res => {
      console.log("Success", res)
    },
      error => {
        console.log("Error", error)
      })
  }

  unArchive() {
    let data = {
      "noteIdList": [this.noteId.id],
      "isArchived": false,
    }
    console.log(data)
    this.noteService.archiveNote(data).subscribe(res => {
      console.log("Success", res)
    },
      error => {
        console.log("Error", error)
      })
  }
  restoreNote() {
    let data = {
      "noteIdList": [this.noteId.id],
      "isDeleted": false,
    }
    console.log(data)
    this.noteService.deleteNotes(data).subscribe(res => {
      console.log("Success", res)
    },
      error => {
        console.log("Error", error)
      })
  }

  deleteForever() {
    let data = {
      "noteIdList": [this.noteId.id],
      "isDeleted": true,
    }
    this.noteService.deleteForeverNotes(data).subscribe(res => {
      console.log("Success", res)
    },
      error => {
        console.log("Error", error)
      })
  }
  bgColor(color: any) {
    if(this.noteId == undefined){
      this.backGroundColor.emit(color);
    }
    let data = {
      "noteIdList": [this.noteId.id],
      "color": color
    }
    this.noteService.changeNoteColor(data).subscribe(res => {
      console.log("Success", res)
      this.backGroundColor.emit();
    },
      error => {
        console.log("Error", error)
      })
  }

}
