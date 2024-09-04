import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnDestroy,
} from "@angular/core";
import { RoutesPath } from "../../enum/routes.enum";
import { ActivatedRoute } from "@angular/router";
import { HasTitle } from "../../model/has-title.model";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-taichi",
  templateUrl: "./taichi.component.html",
  styleUrls: ["./taichi.component.scss"],
})
export class TaichiComponent implements AfterViewChecked, OnDestroy, HasTitle {
  readonly page = RoutesPath.TAICHI;

  readonly testimonies: { author: string; testimony: string }[] = [
    {
      author: "Soizic",
      testimony: `Je suis rentrée plus rapidement dans la relaxation et dans les mouvements aussi,
      cette année. J’ai eu la sensation de progresser très rapidement cette année. Physiquement, avant j’avais très
  mal au dos à la besoin au niveau des épaules. Je suis plus souple dans les bras.(2ème année)`,
    },
    {
      author: "Régis",
      testimony: `Je suis plus conscient que je commence à rouiller ! (1ère année)`,
    },
    {
      author: "Sylvie et martine",
      testimony: `Je retiens l’idée du Tai Chi de positiver. J’utilise la respiration par
  le ventre quand je stresse. Je pose mes épaules et j’ai plus d’équilibre, cette deuxième année.`,
    },
    {
      author: "Nathalie",
      testimony: `J’ai eu de la difficulté à coordonner les mouvements mais c’était plus facile en
  fin d’année. Je suis rentrée assez vite dans la méditation, la détente. Dans la vie quotidienne ça m’apporte
  du bien-être ponctuellement, de la confiance. (1ère année)`,
    },
    {
      author: "Géraldine",
      testimony: `J’ai utilisé ce que j’ai appris du tai chi dans un stage en forêt, ça a multiplié
  ce que j’ai ressenti. (2ème année`,
    },
    {
      author: "Joséphine",
      testimony: `Je luttais contre la boulimie depuis 7 ans. Je ne suis plus boulimique, j’ai
  perdu 10 kg et j’ai déstressé. J’ai commencé à être mieux dès 3 mois après le début des cours. (1ère année)`,
    },
    {
      author: "Christelle",
      testimony: `J’étais mal quand j’ai commencé il y a 3 ans maintenant. Ça m’a aidé à surmonter
  plein d’étapes et d’ailleurs c’est mon entourage qui s’en est rendu compte. Je vois la vie différemment.
  Aujourd’hui c’est devenu un besoin.`,
    },
    {
      author: "Paul",
      testimony: `Ça m’aide au travail. Dans les situations de stress j’utilise la respiration. (1ère
  année)`,
    },
    {
      author: "Théophile",
      testimony: `C’est venu influencer ma posture dans le quotidien. Je suis plus présent. Je
  dédramatise les choses, j’ai plus de distance ces 2 derniers mois. (2ème année)`,
    },
    {
      author: "Eric",
      testimony: `Je n’ai plus mal au dos ou qu’un tout petit peu. Je change de position et ça se
  débloque, avant je forçais maintenant je sens. J’avais mal au dos depuis des années. Dans mon boulot je
  piétine beaucoup, maintenant avec une autre conscience de mon corps je peux rester confortablement debout.
  C’est agréable d’être plus dans mon corps (2ème année)`,
    },
    {
      author: "Véronique",
      testimony: `Au quotidien je sens ma posture que se modifie, je suis plus ancrée dans le sol.
  Le soir j’utilise la relax ou la respiration plus facilement. (2ème année)`,
    },
    {
      author: "Martine",
      testimony: `J’ai moins de douleur et un mieux-être général. Je suis contente d’avoir découvert
  le Tai Chi, alors qu’on me disait, avec un peu de moquerie, tu fais des gestes lents. (1ère année)`,
    },
    {
      author: "Noelly",
      testimony: `Je cherchais une activité relaxante pour être mieux avec mes enfants. Je suis aussi
  plus souple. Je fais le lien aussi avec mes autres activités. (1ère année)`,
    },
    {
      author: "Jean Christophe",
      testimony: `J’ai appris à respirer par le ventre. J’ai une meilleure tenue de mes
  épaules et un meilleur équilibre.`,
    },
  ];

  title = "Tai Chi & Qi Gong et Méditation, au Mans (72) | Humoe";

  private _destroyed$ = new Subject();

  constructor(private readonly route: ActivatedRoute, private el: ElementRef) {}

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  ngAfterViewChecked(): void {
    this.route.queryParams
      .pipe(takeUntil(this._destroyed$))
      .subscribe((params) => {
        this.scrollToAnchor(params.anchor);
      });
  }

  goToQuatrePilier() {
    window.open("https://www.quatrepiliers.fr/", "_blank");
  }

  goToChapter1() {
    this.scrollToAnchor("explication");
  }

  goToChapter2() {
    this.scrollToAnchor("cours");
  }

  goToChapter3() {
    this.scrollToAnchor("articles");
  }

  private scrollToAnchor(anchor: string): void {
    try {
      if (anchor) {
        const toScrollEl = this.el.nativeElement.querySelector(`#${anchor}`);
        toScrollEl.scrollIntoView();
      }
    } catch (e) {
      console.error("Scoll impossible", e);
    }
  }
}
