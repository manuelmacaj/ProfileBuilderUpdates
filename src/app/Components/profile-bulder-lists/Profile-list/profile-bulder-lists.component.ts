import {Component} from '@angular/core';
import {ProfileListsInterface} from "../shared/profile-lists-interface";

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

  protected openElem(nota: ProfileListsInterface) {
    alert("Item selected: " + nota.titolo);
  }
}
