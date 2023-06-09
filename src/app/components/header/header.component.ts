import { UiService } from './../../services/ui.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'TodoApp';
  showAddTodo: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTodo = value));
  }

  toggleAddTodo() {
    this.uiService.toggleAddTodo();
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
