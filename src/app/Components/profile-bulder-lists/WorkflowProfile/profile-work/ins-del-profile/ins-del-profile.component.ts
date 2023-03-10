import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProfileWorkComponent} from "../profile-work.component";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-ins-del-profile',
  templateUrl: './ins-del-profile.component.html',
  styleUrls: ['./ins-del-profile.component.css']
})
export class InsDelProfileComponent implements OnInit {
  profile = new FormControl('', [Validators.required])

  constructor(private dialogRef: MatDialogRef<ProfileWorkComponent>, @Inject(MAT_DIALOG_DATA) protected dataFromParent: any) {

  }

  ngOnInit(): void {

  }

  saveInformation() {
    let nameProfile = this.profile.value;
    if (nameProfile === undefined) {
      return;
    }
    this.dialogRef.close({nomeProfilo: nameProfile, esito: "si"})

  }

  closeDialog() {
    this.dialogRef.close({esito: "no"});
  }
}
