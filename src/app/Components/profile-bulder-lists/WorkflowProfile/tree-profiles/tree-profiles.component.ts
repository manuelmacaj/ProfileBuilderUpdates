import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
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

export class TreeProfilesComponent implements OnInit, OnChanges {
  albero: any = jsonData;
  listaProfili: ProfileList[] = [];
  formRecSet: DettaglioProfilo[] | undefined
  formRec: DettaglioProfilo[] | undefined
  grid: DettaglioProfilo[] | undefined
  cell: DettaglioProfilo[] | undefined
  fieldView: DettaglioProfilo[] | undefined
  lookupV: DettaglioProfilo[] | undefined
  comboboxV: DettaglioProfilo[] | undefined
  checkBoxV: DettaglioProfilo[] | undefined
  MSG: DettaglioProfilo[] | undefined

  tmp = false

  protected changeState(elem: DettaglioProfilo) {
    alert("alert")
    console.table(elem)
    return !this.tmp;
  }

  @ViewChild(MatAccordion) accordion: MatAccordion;
  @Input() item: string = "";

  constructor() {
    this.accordion = new MatAccordion();
  }

  ngOnInit(): void {
    this.listaProfili.push(this.albero)
    this.initLists(this.listaProfili[0])
  }

  private initLists(profileList: ProfileList): void {
    this.formRecSet = profileList.FormRecordsetViewer
    this.formRec = profileList.FormRecordViewer
    this.grid = profileList.GridRecordsetViewer
    this.fieldView = profileList.Fields;
    this.cell = profileList.CellViewer;
    this.lookupV = profileList.LookupViewer;
    this.MSG = profileList.MSG;
    this.checkBoxV = profileList.CheckBoxViewer;
    this.comboboxV = profileList.ComboboxViewer;
  }

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['item']
    if (change.currentValue === "") {
      return;
    }

    let info: string[] = change.currentValue.split('|')
    console.log(info);

    let newProfile = new DettaglioProfilo(3, 1, 23, info[0])
    this.insertProfileChoice(info[1], newProfile);

  }

  private insertProfileChoice(type: string, newProfile: DettaglioProfilo) {
    switch (type) {
      case "FormRecordsetViewer":
        if (this.formRecSet === undefined)
          this.formRecSet = []
        this.formRecSet.push(newProfile)
        break;

      case "GridRecordsetViewer":
        if (this.grid === undefined)
          this.grid = []
        this.grid.push(newProfile)
        break;

      case "Field":
        if (this.fieldView === undefined)
          this.fieldView = []
        this.fieldView.push(newProfile)
        break;

      case "LookupViewer":
        if (this.lookupV === undefined)
          this.lookupV = []
        this.lookupV.push(newProfile)
        break;

      case "CellViewer":
        if (this.cell === undefined)
          this.cell = []
        this.cell.push(newProfile)
        break;

      case "ComboboxViewer":
        if (this.comboboxV === undefined)
          this.comboboxV = []
        this.comboboxV.push(newProfile)
        break;

      case "CheckBoxViewer":
        if (this.checkBoxV === undefined)
          this.checkBoxV = []
        this.checkBoxV.push(newProfile)
        break;

      case "[MSG]":
        if (this.MSG === undefined)
          this.MSG = []
        this.MSG.push(newProfile)
        break;

    }
  }
}
