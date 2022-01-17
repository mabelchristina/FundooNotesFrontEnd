import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { NotesService } from 'src/app/services/note/notes.service';
import { ArchiveComponent } from '../../archive/archive/archive.component';
import { DisplaynoteComponent } from '../../displayNote/displaynote/displaynote.component';
import { TrashComponent } from '../../trash/trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {

  @Input() noteId: any;
  notesArray: any;
  @Input() noteData: any;
  @Input() color: any;

  isDisplayNoteComponent: boolean = false;
  isTrashComponent: boolean = false;
  isArchiveComponent: boolean = false;

  // isTrashComponent: boolean = false
  // isArchive: boolean = false
  // isDisplayNote:boolean=false

  // colors: any[] = [
  //   {
  //     "color": "#FFFFFF"
  //   },
  //   {
  //     "color": "#ff5c5c"
  //   },
  //   {
  //     "color": "#ffb01f"
  //   },
  //   {
  //     "color": "#ffff3d"
  //   },
  //   {
  //     "color": "#5cff5c"
  //   },
  //   {
  //     "color": "#1fffff"
  //   },
  //   {
  //     "color": "#add8e6"
  //   },
  //   {
  //     "color": "#6495ed"
  //   },
  //   {
  //     "color": "#dda0dd"
  //   },
  //   {
  //     "color": "#fbcce7"
  //   },
  //   {
  //     "color": "#cd853f"
  //   },
  //   {
  //     "color": "#dcdcdc"
  //   }
    
  // ];

  constructor(private noteService: NotesService,private route:ActivatedRoute,private router:Router,private dataService:DataService) {}
 
  // @Input() noteId: any;
  // @Input() IsTrash: any;
  // @Input() IsUnArchive: any;
  // @Output() backGroundColor = new EventEmitter<any>();

  ngOnInit(): void {
    let comp = this.route.snapshot.component;
    if (comp == DisplaynoteComponent) {
      this.isDisplayNoteComponent = true;
    }

    if (comp == TrashComponent) {
      this.isTrashComponent = true;
      console.log(this.isTrashComponent);
    }
    if (comp == ArchiveComponent) {
      this.isArchiveComponent = true;
      console.log(this.isArchiveComponent);
    }

  }

  colors: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey' },
  ];

  delete() {
    console.log(this.noteId);
    let data = {
      noteIdList: [this.noteId],
      isDeleted: true
    }
    this.noteService.deleteNotes(data).subscribe((data: any) => {
      console.log("Deleted Successfully", data);
      // window.location.reload();
    });
    // this.RoutesService.redirectTo("/dashboard/get-notes")
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(["/dashboard/note"]);
    });
  }

  restore() {
    console.log(this.noteId);
    let data = {
      noteIdList: [this.noteId],
      isDeleted: false
    }
    this.noteService.deleteNotes(data).subscribe((data: any) => {
      console.log("Restore Successfully", data);
      // window.location.reload();
    });
    this.dataService.redirectTo("/dashboard/trash")

  }

  permanentDelete() {
    console.log(this.noteId);
    //alert(this.token_Id)
    let data = {
      noteIdList: [this.noteId],
      isDeleted: false
    }
    this.noteService.deleteForeverNotes(data).subscribe((data: any) => {
      console.log("parmanent Deleted Successfully", data);
      // window.location.reload();
    });
    this.dataService.redirectTo("/dashboard/trash")
  }

  archive() {
    console.log(this.noteId);
    let data = {
      noteIdList: [this.noteId],
      isArchived: true
    }
    this.noteService.archiveNote(data).subscribe((data: any) => {
      console.log("Archived Successfully", data);
      // window.location.reload();
    });
    this.dataService.redirectTo("/dashboard/note")
  }

  unarchive() {
    console.log(this.noteId);
    let data = {
      noteIdList: [this.noteId],
      isArchived: false
    }
    this.noteService.archiveNote(data).subscribe((data: any) => {
      console.log("Unrchived Successfully", data);
      // window.location.reload();
    });
    this.dataService.redirectTo("/dashboard/archive")
  }

  setColor(color: any) {
    this.noteData.color = color;
    console.log('color', color);
    let data = {
      color: color,
      noteIdList: [this.noteId],
    }
    console.log(data);
    this.noteService.changeNoteColor(data).subscribe(
      (response: any) => {
        this.color.emit()
        console.log('Response of setColour', response);
      },
      (error: any) => {
        console.log('archive Error at icons methods', error);

      }
    );
    // window.location.reload();
  }
  

}
