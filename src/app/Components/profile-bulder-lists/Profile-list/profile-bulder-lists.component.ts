import {Component} from '@angular/core';
import {ProfileListsInterface} from "../shared/profile-lists-interface";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-profile-bulder-lists',
  templateUrl: './profile-bulder-lists.component.html',
  styleUrls: ['./profile-bulder-lists.component.css']
})
export class ProfileBulderListsComponent {
  note: ProfileListsInterface[] = [
    {idProfile: 1, titolo: "LPVAGE0095", dataCreazione: Date.now().toString(), dataModifica: Date.now().toString()},
    {idProfile: 2, titolo: "LPTEPA0020", dataCreazione: Date.now().toString(), dataModifica: Date.now().toString()},
    {idProfile: 3, titolo: "TASK990", dataCreazione: Date.now().toString(), dataModifica: Date.now().toString()},
    {idProfile: 4, titolo: "PROVA TILOLO", dataCreazione: Date.now().toString(), dataModifica: Date.now().toString()},
  ];

  constructor(private matSnackbar: MatSnackBar) {

  }

  protected openElem(nota: ProfileListsInterface) {
    // prelevo id
    // go -> .../titolo/id
    console.table(nota);
    let message: string = "Apertura nota '" + nota.titolo + "' in corso...";
    let action: string = "Ok";
    this.createSnackBar(message, action);

  }

  createNewElem(data: string) {
    let newElem: ProfileListsInterface = {
      idProfile: this.note.length + 1,
      titolo: data,
      dataCreazione: Date.now().toString(),
      dataModifica: Date.now().toString()
    }
    const found = this.note.find((currentElem: ProfileListsInterface) =>
      currentElem.titolo.toLowerCase().trim() === newElem.titolo.toLowerCase().trim())

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
