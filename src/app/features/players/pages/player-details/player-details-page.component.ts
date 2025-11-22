import { CommonModule } from '@angular/common';
import { Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { POSITION_MAP } from '../../../../shared/constants/position-map';
import { PlayerDetails } from '../../models/player.model';

@Component({
  selector: 'app-player-details-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './player-details-page.component.html',
  styleUrls: ['./player-details-page.component.css'],
})
export class PlayerDetailsPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly playerService = inject(PlayerService);

  protected readonly player = signal<PlayerDetails | null>(null);
  protected readonly isLoading = signal<boolean>(false);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly POSITION_MAP = POSITION_MAP;

  constructor() {
    this.loadPlayer();
  }

  private loadPlayer(): void {
    const playerId = this.route.snapshot.paramMap.get('playerId');
    if (!playerId) return;

    this.isLoading.set(true);

    this.playerService.getPlayerById(playerId).subscribe({
      next: (p) => {
        this.player.set(p);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Falha ao carregar jogador.');
        this.isLoading.set(false);
      },
    });
  }
}