import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { PlayerDetails } from '../../models/player.model';

@Component({
  selector: 'app-player-list-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './player-list-page.component.html',
  styleUrl: './player-list-page.component.css',
})
export class PlayerListPageComponent {
  private readonly playerService = inject(PlayerService);
  private readonly router = inject(Router);

  protected readonly players = signal<PlayerDetails[]>([]);
  protected readonly isLoading = signal<boolean>(false);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly searchTerm = signal<string>('');

  protected readonly filteredPlayers = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.players();
    return this.players().filter((p) =>
      [p.name, p.teamName, p.position]
        .filter(Boolean)
        .some((field) => field!.toLowerCase().includes(term)),
    );
  });

  constructor() {
    this.loadPlayers();
  }

  protected onSearchTermChange(value: string): void {
    this.searchTerm.set(value);
  }

  protected openPlayer(player: PlayerDetails): void {
    this.router.navigate(['/players', player.playerId]);
  }

  private loadPlayers(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.playerService.getPlayers().subscribe({
      next: (players) => {
        this.players.set(players);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage.set('Não foi possível carregar a lista de jogadores.');
        this.isLoading.set(false);
      },
    });
  }
}