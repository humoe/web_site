import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MassageComponent } from './pages/massage/massage.component';
import { TaichiComponent } from './pages/taichi/taichi.component';
import { RoutesPath } from './enum/routes.enum';
import { ShiatsuComponent } from './pages/shiatsu/shiatsu.component';
import { EntrepriseComponent } from './pages/entreprise/entreprise.component';
import { NotProductionGuard } from './guard/not-production.guard';
import { GallerieComponent } from './pages/gallerie/gallerie.component';
import { LibraryComponent } from './pages/library/library.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';

const routes: Routes = [
  {path: RoutesPath.HOME, component: HomeComponent},
  {path: RoutesPath.MASSAGE, component: MassageComponent},
  {path: RoutesPath.TAICHI, component: TaichiComponent},
  {path: RoutesPath.SHIATSU, component: ShiatsuComponent},
  {path: RoutesPath.ENTREPRISE, component: EntrepriseComponent},
  {path: RoutesPath.A_PROPOS, component: AProposComponent},
  {path: 'library', canActivate: [NotProductionGuard], component: LibraryComponent},
  {path: RoutesPath.GALLERY, component: GallerieComponent, canActivate: [NotProductionGuard]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy', onSameUrlNavigation: 'ignore' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
