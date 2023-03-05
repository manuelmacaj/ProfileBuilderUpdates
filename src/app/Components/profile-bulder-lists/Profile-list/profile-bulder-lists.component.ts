import {Component} from '@angular/core';
import {ProfileListsInterface} from "../shared/profile-lists-interface";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-profile-bulder-lists',
  templateUrl: './profile-bulder-lists.component.html',
  styleUrls: ['./profile-bulder-lists.component.css']
})
export class ProfileBulderListsComponent {
  seeButtons = false;
  note: ProfileListsInterface[] = [
    {
      IDNota: 1,
      TitoloNota: "LPVAGE0095",
      DataCreazione: new Date().toISOString(),
      DataModifica: Date.now().toString()
    },
    {
      IDNota: 2,
      TitoloNota: "LPTEPA0020",
      DataCreazione: new Date().toISOString(),
      DataModifica: Date.now().toString()
    },
    {
      IDNota: 3,
      TitoloNota: "TASK990",
      DataCreazione: new Date().toISOString(),
      DataModifica: Date.now().toString()
    },
    {
      IDNota: 4,
      TitoloNota: "ProvaTitolo",
      DataCreazione: new Date().toISOString(),
      DataModifica: Date.now().toString()
    },
  ];

  constructor(private matSnackbar: MatSnackBar) {

  }

  protected openElem(nota: ProfileListsInterface) {
    // prelevo id
    // go -> .../titolo/id
    console.table(nota);
    let message: string = "Apertura nota '" + nota.TitoloNota + "' in corso...";
    let action: string = "Ok";
    this.createSnackBar(message, action);

  }

  createNewElem(data: string) {
    let newElem: ProfileListsInterface = {
      IDNota: this.note.length + 1,
      TitoloNota: data,
      DataCreazione: Date.now().toString(),
      DataModifica: Date.now().toString()
    }
    const found = this.note.find((currentElem: ProfileListsInterface) =>
      currentElem.TitoloNota.toLowerCase().trim() === newElem.TitoloNota.toLowerCase().trim())

    if (found != undefined) {
      alert("Nota già esistente.");
      return;
    }
    this.note.push(newElem);
  }

  protected createSnackBar(message: string, action: string) {
    this.matSnackbar.open(message, action, {
      duration: 2000,
      horizontalPosition: "start",
      politeness: "assertive",
      direction: "ltr"
    });
  }
}
