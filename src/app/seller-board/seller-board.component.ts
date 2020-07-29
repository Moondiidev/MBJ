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
  thisMonthIndex: number = this.today.getMonth();
  monthLabelIndexes: Array<number> = [];
  chartLabels = [];
  tooltipsLabel: Array<string> = [];
  totalRevenue = 300;
  totalCancelation = 40;
  messagePreviews = [
    { profileImg: '../../assets/img/photo.svg', name: 'allaab', message: 'Yu bn haraal idsen ass...', date: '7 cap' },
    { profileImg: '../../assets/img/photo.svg', name: 'allaab', message: 'Yu bn haraal idsen ass...', date: '7 cap' },
    { profileImg: '../../assets/img/photo.svg', name: 'allaab', message: 'Yu bn haraal idsen ass...', date: '7 cap' },
    { profileImg: '../../assets/img/photo.svg', name: 'allaab', message: 'Yu bn haraal idsen ass...', date: '7 cap' },
    { profileImg: '../../assets/img/photo.svg', name: 'allaab', message: 'Yu bn haraal idsen ass...', date: '7 cap' },
  ];
  constructor(private sellerService: SellerSetUpService, private appManagerService: AppManagerService) { }

  barChartData: ChartDataSets[] = [
    { data: [20590, 100300, 100232, 100232, 100232, 20590, 100300, 100232, 100232, 100232, 20590, 100300, 100232, 100232, 100232, 20590, 100300, 100232, 100232, 100232, 20590, 100300, 100232, 100232, 100232, 20590, 100300, 100232, 100232, 100442], label: 'Орлого' },
    { data: [12590, 12300], label: 'Цуцлагдсан' },
  ];

  barChartLabels: Label[] = this.chartLabels;

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
    legend: {
      display: true,
      labels: {
        padding: 25,
        generateLabels: 'fucku '
      }
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return this.tooltipsLabel[tooltipItem.index];
        }.bind(this),
        title: function (tooltipItems, data) {
          return data.datasets[tooltipItems[0].datasetIndex].label + ': ' + tooltipItems[0].yLabel + ' ₮';
        }
      },
      titleFontSize: 14,
      titleAlign: 'center',
      titleMarginBottom: 4,
      titleFontColor: '#eaeaea',
      backgroundColor: '#264653',
      bodyFontColor: '#aaa',
      bodyFontSize: 14,
      bodyAlign: 'center',
      bodySpacing: 6,
      xPadding: 10,
      yPadding: 10,
      displayColors: false
    }
  };

  barChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#2a9d8f',
    },
    {
      borderColor: 'black',
      backgroundColor: '#edf6f9',
    }
  ];

  barChartLegend = true;
  barChartPlugins = [];
  barChartType = 'bar';

  addMonthLabels() {
    //Combine current month with neighbour months and then sort them 
    let orderedMonthArr: Array<number> = [this.thisMonthIndex, ...this.getNeighbourMonths()];
    orderedMonthArr.sort();
    this.addDateToChartHover(orderedMonthArr);
    console.log(this.tooltipsLabel);
    this.monthLabelIndexes.forEach((index, i) => {
      this.labelEmptySpace(index);
      //Label month name in between empty labels
      this.chartLabels.push(this.months[orderedMonthArr[i]]);
      // -1 to compensate the month label name. Without it, there will be 32 divisions instead of 30
      this.labelEmptySpace(index - 1);
    });
  }
  addDateToChartHover(orderedMonthArr: Array<number>) {
    this.tooltipsLabel = [];
    let keeper = 0;
    const requiredDays = 30;
    orderedMonthArr.forEach((month, thisMonthIndex) => {
      //only in the first month, calculate how many days you need starting from today
      if (thisMonthIndex === 0) {
        let leftOverDays = this.daysInMonth(month) - this.today.getDate();
        let i = 0;
        while (i <= leftOverDays) {
          let dayToAdd = this.today.getDate() + i;
          this.tooltipsLabel.push(`${this.months[month]}ын ${dayToAdd}-н`);
          i++;
          keeper++;
        }
      }
      // For the latter months, just add dates from 1 to the end of the month until requiredDays are satisfied.
      else {
        let j = 1;
        while (j < this.daysInMonth(month) && keeper < requiredDays) {
          this.tooltipsLabel.push(`${this.months[month]}ын ${j}-н`);
          j++;
          keeper++;
        }
      }
    })
  }

  labelEmptySpace(index) {
    for (let i = 0; i < index; i++) {
      this.chartLabels.push('');
    }
  }

  getNeighbourMonths() {
    // Need 30 days and have respective month in the middle of days that are being used as a label. 
    const todayDayNumber = this.today.getDate();
    const thisMonthInNum = this.today.getMonth() + 1;
    const daysInThisMonth = this.daysInMonth(thisMonthInNum);
    let thisMonthLeftOver: number = 0;
    /*  
    There can only be 3 month label insert indexes. Worst case scenario is when it is 
    Jan 30 which has 31 days (1 remaining day) and next is Feb which has 28 days.
    This adds up to usable 29 days which is less than 30 so, March comes to save the day. 
    So, our graph ends up using Jan, Feb and March.
    */
    let usableLabelDays: number = 0;
    let neighbourMonths = [];
    let daysInNeighbourMonths: Array<number> = [];
    let neededDaysInNeighbourMonths: Array<number> = [];
    thisMonthLeftOver = daysInThisMonth - todayDayNumber;
    // See if you need another month space or not and find the center of needed 30 days to insert those months.
    if (todayDayNumber > daysInThisMonth / 2) {
      neighbourMonths[0] = this.today.getMonth() - 1;
      daysInNeighbourMonths[0] = this.daysInMonth(neighbourMonths[0]);
      usableLabelDays = thisMonthLeftOver + daysInNeighbourMonths[0];

      if (usableLabelDays <= 30) {
        neighbourMonths[1] = this.today.getMonth() - 2;
        daysInNeighbourMonths[1] = this.daysInMonth(neighbourMonths[1]);
        neededDaysInNeighbourMonths[1] = daysInNeighbourMonths[1] - thisMonthLeftOver - daysInNeighbourMonths[0];
      } else {
        neededDaysInNeighbourMonths[0] = daysInNeighbourMonths[0] - thisMonthLeftOver;
      }
    } else {
      neighbourMonths[0] = this.today.getMonth() + 1;
      daysInNeighbourMonths[0] = this.daysInMonth(neighbourMonths[0]);
      usableLabelDays = thisMonthLeftOver + daysInNeighbourMonths[0];

      if (usableLabelDays <= 30) {
        neighbourMonths[1] = this.today.getMonth() + 2;
        daysInNeighbourMonths[1] = this.daysInMonth(neighbourMonths[1]);
      }
    }
    //Determine Label Index
    this.monthLabelIndexes[0] = (Math.floor(thisMonthLeftOver / 2));
    // push only if they are able to be inserted
    if (neededDaysInNeighbourMonths[0] != 0 && neededDaysInNeighbourMonths[0] != undefined) {
      this.monthLabelIndexes[1] = (Math.floor(neededDaysInNeighbourMonths[0] / 2));
    }
    if (neededDaysInNeighbourMonths[1] != 0 && neededDaysInNeighbourMonths[1] != undefined) {
      this.monthLabelIndexes[2] = (Math.floor(neededDaysInNeighbourMonths[1] / 2));
    }

    console.log(this.monthLabelIndexes);
    console.log(neighbourMonths);
    return neighbourMonths;
  }
  daysInMonth(month) {
    //Takes month starting from 0 --> 0 = January
    return new Date(this.today.getFullYear(), month + 1, 0).getDate();
  }
  ngOnInit(): void {
    this.getProfileImage();
    this.getUserName();
    this.addMonthLabels();
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
