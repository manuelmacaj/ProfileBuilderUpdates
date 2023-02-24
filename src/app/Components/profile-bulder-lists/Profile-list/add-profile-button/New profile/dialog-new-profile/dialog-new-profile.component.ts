import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AddProfileButtonComponent} from "../../add-profile-button.component";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog-new-profile',
  templateUrl: './dialog-new-profile.component.html',
  styleUrls: ['./dialog-new-profile.component.css']
})
export class DialogNewProfileComponent {
  titleFormControl = new FormControl('',
    [Validators.required,
      Validators.pattern("^\\S$|^\\S[\\s\\S]*\\S$"),
      Validators.min(4)]);


  constructor(private dialogRef: MatDialogRef<AddProfileButtonComponent>) {
  }

  cancelDialog() {
    this.dialogRef.close({esito: "no"});
  }

  createTheElement() {
    let title = this.titleFormControl.value
    if (title == undefined) {
      alert("Immettere un titolo");
      return;
    }
    this.dialogRef.close({data: title, esito: "ok"})
  }
}
