import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AddProfileButtonComponent} from "../../add-profile-button.component";

@Component({
  selector: 'app-dialog-new-profile',
  templateUrl: './dialog-new-profile.component.html',
  styleUrls: ['./dialog-new-profile.component.css']
})
export class DialogNewProfileComponent {
  title: string | undefined
  constructor(private dialogRef: MatDialogRef<AddProfileButtonComponent>) {
  }
  createTheElement() {
    if (this.title == undefined) {
      alert("Immettere un titolo");
      return;
    }
    this.dialogRef.close({data: this.title})
  }
}
