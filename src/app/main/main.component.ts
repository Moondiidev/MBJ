import { Component, OnInit } from '@angular/core';
import { CardsModel } from '../shared/cards.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    
  constructor() { 
  }
    
  ngOnInit() {
    
  }
  onClick(){
  }

  slides = [
    new CardsModel('../../assets/img/Popular/2danimation.jpg', 'Зургаа амь оруул', '2Д Аниматион'),
    new CardsModel('../../assets/img/Popular/websitecreation.jpg', 'Бизнэсээ эхлүүл', 'Вэбсайт дизайн'),
    new CardsModel('../../assets/img/Popular/translation.jpg', 'Хэлийг нэгтэг', 'Орчуулаг'),
    new CardsModel('../../assets/img/Popular/illustration.jpg', 'Төсөөллөө бодит болог', 'График дүрсэлгээ'),
    new CardsModel('../../assets/img/Popular/logodesign.jpg', 'Брандаа хөгжүүл', 'Лого дизайн'),
    new CardsModel('../../assets/img/Popular/voiceover.jpg', 'Дуу амь оруулна', 'Дуу орчуулаг'),
    new CardsModel('../../assets/img/Popular/photoshopediting.jpg', 'Бодит амьдралыг буйснуул', 'Photoshop эдит'),
    new CardsModel('../../assets/img/Popular/writing.jpg', 'Үгээр тайлбарлах араггуй', 'Бичвэр'),
    new CardsModel('../../assets/img/Popular/SEO.jpg', 'Илүү олон хүнд хүр', 'SEO'),
    new CardsModel('../../assets/img/Popular/3dmodelling.jpg', 'Компьютер доторх амьдрал', '3Д моделинг')
  ];
 
  slideConfig = {
    "slidesToShow": 5, 
    "slidesToScroll": 5,
    "nextArrow":"<img src='../../assets/img/left.svg' class='slider-btn slider-btn--right next-slide'>",
    "prevArrow":"<img src='../../assets/img/left.svg' class='slider-btn slider-btn--left prev-slide'>",
    "infinite": true,
    "draggable": false,
    "responsive": [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
}
