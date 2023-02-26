import {Component} from '@angular/core';

@Component({
  selector: 'app-profile-work',
  templateUrl: './profile-work.component.html',
  styleUrls: ['./profile-work.component.css']
})
export class ProfileWorkComponent {
  
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
    console.log("Creation: " + type);
  }

  deleteProfile(type: String) {
    console.log("Deletion: " + type);
  }


}
