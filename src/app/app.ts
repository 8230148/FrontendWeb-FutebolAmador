import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeamService } from './services/team.service';
import { Footer } from './components/partials/footer/footer';

@Component({
  selector: 'app-root',
<<<<<<< Updated upstream
  imports: [RouterOutlet, Header, Footer],
=======
  imports: [RouterOutlet],
>>>>>>> Stashed changes
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
