import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogNewProfileComponent} from "./New profile/dialog-new-profile/dialog-new-profile.component";

@Component({
  selector: 'app-add-profile-button',
  templateUrl: './add-profile-button.component.html',
  styleUrls: ['./add-profile-button.component.css']
})
export class AddProfileButtonComponent {
  @Output() onAddTitle = new EventEmitter<string>();
  title = ''

  constructor(private matDialog: MatDialog) {

  }

  protected newElemDialog() {
    // riferimento al dialog appena aperto
    let dialogRef = this.matDialog.open(DialogNewProfileComponent, {
      disableClose: true,
    });

    // prelevo il dato restituito alla chiusura dalla finestra di dialogo
    dialogRef.afterClosed().subscribe((res: any) => {
      if (res.esito === "no")
        return;
      this.title = res.data;
      // console.log(this.title)
      this.onAddTitle.emit(this.title);

    })

    // chiamo il servizio per tentare la creazione di un componente
  }
}
