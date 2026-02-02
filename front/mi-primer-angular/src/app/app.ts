import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service/user.service';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-primer-angular');

  users: any[] = []; 

  constructor(private userService: UserService, private chp: ChangeDetectorRef) {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.chp.detectChanges(); // Detect changes in the component's view
  });

  }

}
