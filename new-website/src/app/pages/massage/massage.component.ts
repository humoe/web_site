import { AfterViewChecked, Component, OnDestroy } from '@angular/core';
import { RoutesPath } from '../../enum/routes.enum';
import { ActivatedRoute } from '@angular/router';
import { ImageItem } from '../../model/massage.model';
import { MassageEnum } from '../../model/massage.enum';
import { HasTitle } from '../../model/has-title.model';
import {filter, takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.scss']
})
export class MassageComponent implements AfterViewChecked, OnDestroy, HasTitle {

  readonly page = RoutesPath.MASSAGE;
  readonly typesMassage: ImageItem[] = [
    {
      img: 'assets/images/massage/massage-ayurvedique-dos-300x200.jpg',
      title: 'Massage Ayurvédique',
      type: MassageEnum.AYURVEDIQUE
    }, {
      img: 'assets/images/massage/massage-vitalisant-300x200.jpg',
      title: 'Massage Vitalisant',
      type: MassageEnum.VITALISANT
    }, {
      img: 'assets/images/massage/massage-drainant-300x200.png',
      title: 'Massage Drainant',
      type: MassageEnum.DRAINANT,
      dark: true
    }, {
      img: 'assets/images/massage/massage-thai-jambes-300x200.jpg',
      title: 'Massage Thaïlandais',
      type: MassageEnum.THAILANDAIS,
      dark: true
    }, {
      img: 'assets/images/logo/misa-france-146x250.jpg',
      title: 'Massage entre enfants',
      type: MassageEnum.ENFANTS,
      dark: true
    }, {
      img: 'assets/images/massage/massage-main-300x200.jpg',
      title: 'Massage assis',
      type: MassageEnum.ASSIS
    }
  ];
  readonly testimonies: { author: string, testimony: string }[] = [
    {
      author: 'Pascale',
      testimony: `Marie-laure est présente tout au long du massage, elle maintient sa concentration tout au long en
      demandant parfois si tout va bien. Chaque massage est différent.
      Je sens mes tensions s’apaiser et je fais tout pour être en osmose avec elle.`
    },
    {
      author: 'Mary Pierre',
      testimony: `Suite à de sérieux soucis de santé, je me suis intéressée aux massages procurés par Marie-Laure ...
       le ressenti à chaque séance est différent... et offre toujours une profonde détente,distance par rapport aux émotions, recentrage et ressourcement...
       c'est un temps pour soi précieux qui est donné avec délicate attention...merci pour cette belle qualité de présence.`
    },
  ];

  title = ' Massages bien-être au Mans (72) | Humoe';

  private _destroyed$ = new Subject();
  private anchor: string;

  constructor(private readonly route: ActivatedRoute) {
  }

  ngOnDestroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  ngAfterViewChecked(): void {
    this.route.queryParams
      .pipe(takeUntil(this._destroyed$))
      .subscribe(params => {
        this.scrollToAnchor(params.anchor);
      });
  }

  scrollToMassage(event: number) {
    let anchor: string;
    switch (event) {
      case MassageEnum.AYURVEDIQUE:
        anchor = 'ayurvedique';
        break;
      case MassageEnum.VITALISANT:
        anchor = 'vitalisant';
        break;
      case MassageEnum.DRAINANT:
        anchor = 'drainant';
        break;
      case MassageEnum.THAILANDAIS:
        anchor = 'tailandais';
        break;
      case MassageEnum.ENFANTS:
        anchor = 'enfants';
        break;
      case MassageEnum.ASSIS:
        anchor = 'minutes';
        break;
      default:
        break;
    }
    this.scrollToAnchor(anchor);
  }

  private scrollToAnchor(anchor: string): void {
    try {
      if (anchor) {
        document.getElementById(anchor).scrollIntoView();
      }
    } catch (e) {
      console.error('Scoll impossible', e);
    }
  }
}
