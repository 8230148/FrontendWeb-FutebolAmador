import { Routes } from '@angular/router';
import { PlayerListPageComponent } from './features/players/pages/player-list/player-list-page.component';
import { PlayerProfilePageComponent } from './features/players/pages/player-profile/player-profile-page.component';
import { SettingsPageComponent } from './features/settings/pages/settings-page/settings-page.component';
import { PlayerProfileRedirectComponent } from './features/players/pages/player-profile/player-profile-redirect/player-profile-redirect.component';
import { LoginComponent } from './features/players/pages/login/login.component';
import { LogoutComponent } from './features/players/pages/login/logout.component';
import { AuthGuard } from './shared/components/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'players',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'players',
    component: PlayerListPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'players/me',
    component: PlayerProfileRedirectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'players/details/:playerId',
    component: PlayerProfilePageComponent,
    canActivate: [AuthGuard],
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