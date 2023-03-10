import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {InsDelProfileComponent} from "./ins-del-profile/ins-del-profile.component";

@Component({
  selector: 'app-profile-work',
  templateUrl: './profile-work.component.html',
  styleUrls: ['./profile-work.component.css']
})
export class ProfileWorkComponent {
  kindOfProfiles: string[] = [
    'FormRecordsetViewer',
    'FormRecordViewer',
    'GridRecordsetViewer',
    'Field',
    'LookupViewer',
    'CellViewer',
    'ComboboxViewer',
    'CheckBoxViewer',
    '[MSG]',
    //'Menu',
  ]
  matMessage: string = "";
  nomeProfiloTipo: string = "";

  constructor(private matDialog: MatDialog) {
  }

  manageProfile(type: string, creation: boolean) {
    switch (creation) {
      case true:
        this.createProfile(type);
        break;
      case false:
        this.deleteProfile(type);
        break;
    }
  }

  createProfile(type: string) {
    this.matMessage = "new " + type;

    let dialogRef = this.matDialog.open(InsDelProfileComponent, {
      disableClose: true,
      data: {
        title: "Crea",
        message: this.matMessage,
        mode: "insert"
      }
    })

    dialogRef.afterClosed().subscribe((value: any) => {
      if (value.esito === "no")
        return;
      this.nomeProfiloTipo = value.nomeProfilo + "|" + type;
    })
  }

  deleteProfile(type: String) {
    this.matMessage = "Elimina: " + type;

  }
}
