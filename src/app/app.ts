import { Component, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TeamService } from './services/team.service';
import { SidebarComponent } from './shared/components/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('frontend');

  teams: any[] = [];
  teamService = inject(TeamService);

  constructor() {}
}
