import {Component, OnInit, ViewChild} from '@angular/core';
import * as jsonData from '../../../../../assets/prova.json'
import {DettaglioProfilo} from "../../../../Models/ProfilesModel";
import {MatAccordion} from "@angular/material/expansion";

interface ProfileList {
  FormRecordsetViewer: DettaglioProfilo[];
  FormRecordViewer: DettaglioProfilo[];
  GridRecordsetViewer: DettaglioProfilo[];
  Fields: DettaglioProfilo[];
  CellViewer: DettaglioProfilo[];
  ComboboxViewer: DettaglioProfilo[];
  CheckBoxViewer: DettaglioProfilo[];
  MSG: DettaglioProfilo[];
  LookupViewer: DettaglioProfilo[];
}

@Component({
  selector: 'app-tree-profiles',
  templateUrl: './tree-profiles.component.html',
  styleUrls: ['./tree-profiles.component.css']
})

export class TreeProfilesComponent implements OnInit {
  albero: any = jsonData;
  listaProfili: ProfileList[] = []
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {
    this.accordion = new MatAccordion();
  }

  ngOnInit(): void {
    this.listaProfili.push(this.albero)
  }
}
