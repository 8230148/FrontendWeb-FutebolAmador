import { Routes } from '@angular/router';
import { PlayerListPageComponent } from './features/players/pages/player-list/player-list-page.component';
import { PlayerProfilePageComponent } from './features/players/pages/player-profile/player-profile-page.component';
import { SettingsPageComponent } from './features/settings/pages/settings-page/settings-page.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'players',
  },
  {
    path: 'players',
    component: PlayerListPageComponent,
  },
  {
    path: 'players/me',
    component: PlayerProfilePageComponent,
  },
  {
    path: 'players/:playerId',
    component: PlayerProfilePageComponent,
  },
  {
    path: 'settings',
    component: SettingsPageComponent,
  },
  {
    path: '**',
    redirectTo: 'players',
  },
];