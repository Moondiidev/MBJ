import { AppManagerService } from './../shared/app-manager.service';
import { SellerSetUpService } from './../seller-set-up/seller-set-up.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-seller-board',
  templateUrl: './seller-board.component.html',
  styleUrls: ['./seller-board.component.scss']
})
export class SellerBoardComponent implements OnInit {
  profileImgUrl: string = null;
  personalProfileImgDataSub: Subscription;
  userNameSub: Subscription;
  userName: string;
  responseRate: number = 40;
  today = new Date();
  months: Array<string> = ['Нэгдүгээр Сар', 'Хоёрдугаар Сар', 'Гуравдугаар Сар', 'Дөрөвдүгээр Сар', 'Тавдугаар Сар', 'Зургадугаар Сар', 'Долдугаар Сар', 'Наймдугаар Сар', 'Есдүгээр Сар', 'Аравдугаар Сар', 'Араваннэгдүгээр Сар', 'Араванхоёрдугаар Сар'];
  monthIndex: number = this.today.getMonth();
  messagePreviews = [
    { profileImg: '../../assets/img/photo.svg', name: 'allaab', message: 'Yu bn haraal idsen ass...', date: '7 cap' },
    { profileImg: '../../assets/img/photo.svg', name: 'allaab', message: 'Yu bn haraal idsen ass...', date: '7 cap' },
    { profileImg: '../../assets/img/photo.svg', name: 'allaab', message: 'Yu bn haraal idsen ass...', date: '7 cap' },
    { profileImg: '../../assets/img/photo.svg', name: 'allaab', message: 'Yu bn haraal idsen ass...', date: '7 cap' },
    { profileImg: '../../assets/img/photo.svg', name: 'allaab', message: 'Yu bn haraal idsen ass...', date: '7 cap' },
  ];
  constructor(private sellerService: SellerSetUpService, private appManagerService: AppManagerService) { }

  barChartData: ChartDataSets[] = [
    { data: [20590, 100300, 100232, 100232, 100232], label: 'Орлого ₮-өөр' },
    { data: [12590, 12300], label: 'Цуцлагдсан ₮-өөр' },
  ];

  barChartLabels: Label[] = [];

  barChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
  };

  barChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(122,122,0,1)',
    }
  ];

  barChartLegend = true;
  barChartPlugins = [];
  barChartType = 'bar';

  determineLabelIndex() {
    // Need 30 days and have respective month in the middle of days that are being used as a label. 
    const todayDayNumber = this.today.getDate();
    const daysInThisMonth = this.daysInMonth(this.today.getMonth());
    let thisMonthLeftOver: number = 0;
    /*  
    There can only be 3 month label insert indexes. Worst case scenario is when it is 
    Jan 30 which has 31 days (1 remaining day) and next is Feb which has 28 days.
    This adds up to usable 29 days which is less than 30 so, March comes to save the day. 
    So, our graph ends up using Jan, Feb and March.
    */
    let monthLabelIndexes: Array<number> = [];
    let usableLabelDays: number = 0;
    let daysInNeighbourMonth: number = 0;
    let neededDaysInNeighbourMonth: number = 0;
    let daysInSecondNeighbourMonth: number = 0;
    let neededDaysInSecondNeighbourMonth: number = 0;
    thisMonthLeftOver = daysInThisMonth - todayDayNumber;

    // See if you need another month space or not and find the center of needed 30 days to insert those months.
    if (todayDayNumber < daysInThisMonth / 2) {
      daysInNeighbourMonth = this.daysInMonth(this.today.getMonth() - 1);
      usableLabelDays = thisMonthLeftOver + daysInNeighbourMonth;

      if (usableLabelDays <= 30) {
        daysInSecondNeighbourMonth = this.today.getMonth() - 2;
      }
    } else {
      daysInNeighbourMonth = this.daysInMonth(this.today.getMonth() + 1);
      usableLabelDays = thisMonthLeftOver + daysInNeighbourMonth;

      if (usableLabelDays <= 30) {
        daysInSecondNeighbourMonth = this.today.getMonth() + 2;
        neededDaysInSecondNeighbourMonth = daysInSecondNeighbourMonth - thisMonthLeftOver - daysInNeighbourMonth;
      } else {
        neededDaysInNeighbourMonth = daysInNeighbourMonth - thisMonthLeftOver;
      }
    }
    monthLabelIndexes.push(Math.floor(thisMonthLeftOver / 2));

    // push only if they are able to be inserted
    if (neededDaysInNeighbourMonth !== 0) {
      monthLabelIndexes.push(Math.floor(neededDaysInNeighbourMonth / 2));
    }
    if (neededDaysInSecondNeighbourMonth !== 0) {
      monthLabelIndexes.push(Math.floor(neededDaysInSecondNeighbourMonth / 2));
    }
    console.log(monthLabelIndexes);
    return monthLabelIndexes;
  }
  daysInMonth(month) {
    return new Date(this.today.getFullYear(), month, 0).getDate();
  }
  ngOnInit(): void {
    this.getProfileImage();
    this.getUserName();
    this.determineLabelIndex();
  }
  getProfileImage() {
    this.personalProfileImgDataSub = this.sellerService.getProfileImg().subscribe(imgUrl => {
      this.profileImgUrl = imgUrl;
    })
  }
  getUserName() {
    this.userNameSub = this.appManagerService.userName.subscribe(name => {
      this.userName = name;
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.personalProfileImgDataSub.unsubscribe();
  }
}
