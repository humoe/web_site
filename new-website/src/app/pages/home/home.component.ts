import { Component } from "@angular/core";
import { RoutesPath } from "../../enum/routes.enum";
import { Router } from "@angular/router";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [NgbCarouselConfig],
})
export class HomeComponent {
  readonly page = RoutesPath.HOME;
  readonly taichiPage = RoutesPath.TAICHI;
  readonly massagePage = RoutesPath.MASSAGE;
  readonly shiatsuPage = RoutesPath.SHIATSU;
  readonly entreprisePage = RoutesPath.ENTREPRISE;
  readonly aProposPage = RoutesPath.A_PROPOS;

  readonly prod = environment.production;

  taichiAvis = [
    {
      author: "Soizic",
      text: "Je suis rentrée plus rapidement dans la relaxation et dans les mouvements aussi, cette année. J’ai eu la sensation de progresser très rapidement cette année. Physiquement, avant j’avais très mal au dos et un peu au niveau des épaules. Je suis plus souple dans les bras. (2ème année)",
    },
    {
      author: "Sylvie",
      text: "Je retiens l’idée du Tai Chi de positiver. J’utilise la respiration par le ventre quand je stresse. Je pose mes épaules et j’ai plus d’équilibre, cette deuxième année.",
    },
    {
      author: "Nathalie",
      text: "J’ai eu de la difficulté à coordonner les mouvements mais c’était plus facile en fin d’année. Je suis rentrée assez vite dans la méditation, la détente. Dans la vie quotidienne ça m’apporte du bien-être ponctuellement, de la confiance. (1ère année)",
    },
    {
      author: "Joséphine",
      text: "Je luttais contre la boulimie depuis 7 ans. Je ne suis plus boulimique, j’ai perdu 10 kg et j’ai déstressé. J’ai commencé à être mieux dès 3 mois après le début des cours. (1ère année)",
    },
    {
      author: "Eric",
      text: "Je n’ai plus mal au dos ou qu’un tout petit peu. Je change de position et ça se débloque, avant je forçais maintenant je sens. J’avais mal au dos depuis des années. Dans mon boulot je piétine beaucoup, maintenant avec une autre conscience de mon corps je peux rester confortablement debout. C’est agréable d’être plus dans mon corps (2ème année)",
    },
    {
      author: "Martine",
      text: "J’ai moins de douleur et un mieux-être général. Je suis contente d’avoir découvert le Tai Chi, alors qu’on me disait, avec un peu de moquerie, tu fais des gestes lents. (1ère année)",
    },
  ];

  massageAvis = [
    {
      author: "Mary Pierre",
      text: "Suite à de sérieux soucis de santé, je me suis intéressée aux massages procurés par Marie-Laure ... le ressenti à chaque séance est différent... et offre toujours une profonde détente, distance par rapport aux émotions, recentrage et ressourcement... c'est un temps pour soi précieux qui est donné avec délicate attention...merci pour cette belle qualité de présence.",
    },
    {
      author: "Paul",
      text: "J'apprécie beaucoup les massages de Marie-Laure la relation qu'elle propose avec ma respiration.",
    },
    {
      author: "Nadine",
      text: "C'est la première fois que je venais, à la fin du massage je me suis sentie à la fois détendue et ressourcée.",
    },
  ];

  constructor(
    private readonly router: Router,
    private readonly config: NgbCarouselConfig
  ) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
    config.interval = 10000;
  }

  redirectTo(page: string) {
    this.router.navigateByUrl(page || this.page);
  }
}
