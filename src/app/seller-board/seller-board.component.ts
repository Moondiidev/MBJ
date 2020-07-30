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
  chartLabels: Label[] = [];
  tooltipsLabel: Array<string> = [];
  totalRevenue: number = 300;
  totalCancelation: number = 40;
  chartDisplayRange: number = 30;
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
        padding: 25
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
    console.log(orderedMonthArr);

    orderedMonthArr.sort();
    this.addDateToChartHover(orderedMonthArr);
    console.log(this.tooltipsLabel);
    this.monthLabelIndexes.forEach((index, i) => {
      alert(index);
      this.labelEmptySpace(index);
      //Label month name in between empty labels
      this.chartLabels.push(this.months[orderedMonthArr[i]]);
      // -1 compensates with the month label which is inserted between the empty (day) labels.
      this.labelEmptySpace(index - 1);
    });
  }
  addDateToChartHover(orderedMonthArr: Array<number>) {
    this.tooltipsLabel = [];
    let keeper = 0;
    orderedMonthArr.forEach((month, thisMonthIndex) => {
      //only in the first month, calculate how many days you need starting from today
      if (thisMonthIndex === 0) {
        let availableDaysInThisMonth = this.calcAvailableDaysThisMonth();

        if (availableDaysInThisMonth < this.chartDisplayRange) {
          let i = 0;
          while (i <= availableDaysInThisMonth) {
            let dayToAdd = this.today.getDate() + i;
            this.tooltipsLabel.push(`${this.months[month]}ын ${dayToAdd}-н`);
            i++;
            keeper++;
          }
        }
        // If availableDaysInThisMonth is larger than the required amount, add dates until the required dates are satisfied. 

         else {
          let i = 1;
          while (i <= this.chartDisplayRange) {
            let dayToAdd = i;
            this.tooltipsLabel.push(`${this.months[month]}ын ${dayToAdd}-н`);
            i++;
            keeper++;
          }
        }
      }
      // For the latter months, just add dates from 1 to the end of the month until requiredDays are satisfied.
      else {
        let j = 1;
        while (j < this.daysInMonth(month) && keeper < this.chartDisplayRange) {
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
    const daysInThisMonth = this.daysInMonth(this.today.getMonth());
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
    let availableDaysInThisMonth: number = this.calcAvailableDaysThisMonth();

    /* See if you need another month space or not and find the center of needed 30 days to insert those months 
    as well as calculating how many days are needed from each month.
    */
    if (availableDaysInThisMonth < this.chartDisplayRange) {

      if (todayDayNumber > daysInThisMonth / 2) {
        neighbourMonths[0] = this.today.getMonth() - 1;
        daysInNeighbourMonths[0] = this.daysInMonth(neighbourMonths[0]);
        usableLabelDays = availableDaysInThisMonth + daysInNeighbourMonths[0];

        if (usableLabelDays <= this.chartDisplayRange) {
          neighbourMonths[1] = this.today.getMonth() - 2;
          daysInNeighbourMonths[1] = this.daysInMonth(neighbourMonths[1]);
          neededDaysInNeighbourMonths[1] = daysInNeighbourMonths[1] - availableDaysInThisMonth - daysInNeighbourMonths[0];
        } else {
          neededDaysInNeighbourMonths[0] = daysInNeighbourMonths[0] - availableDaysInThisMonth;
        }
      } else {
        neighbourMonths[0] = this.today.getMonth() + 1;
        daysInNeighbourMonths[0] = this.daysInMonth(neighbourMonths[0]);
        usableLabelDays = availableDaysInThisMonth + daysInNeighbourMonths[0];

        if (usableLabelDays <= this.chartDisplayRange) {
          neighbourMonths[1] = this.today.getMonth() + 2;
          daysInNeighbourMonths[1] = this.daysInMonth(neighbourMonths[1]);
        }
      }
    }

    //Determine Label Index
    //Needed new already floored variable to test the statement because of the +1 added to the monthleftover var
    if (availableDaysInThisMonth > 0 && availableDaysInThisMonth != undefined) {
      this.monthLabelIndexes[0] = (Math.floor(availableDaysInThisMonth / 2));
    }
    // push only if they are able to be inserted
    if (neededDaysInNeighbourMonths[0] > 0 && neededDaysInNeighbourMonths[0] != undefined) {
      this.monthLabelIndexes[1] = (Math.floor(neededDaysInNeighbourMonths[0] / 2));
    }
    if (neededDaysInNeighbourMonths[1] > 0 && neededDaysInNeighbourMonths[1] != undefined) {
      this.monthLabelIndexes[2] = (Math.floor(neededDaysInNeighbourMonths[1] / 2));
    }

    console.log(this.monthLabelIndexes);
    console.log(neighbourMonths);
    return neighbourMonths;
  }

  calcAvailableDaysThisMonth() {
    let thisMonthLeftOver: number = 0;
    let availableDaysInThisMonth: number = 0;
    const todayDayNumber = this.today.getDate();
    const daysInThisMonth = this.daysInMonth(this.today.getMonth());
    /* See how many days are left in this month and if it is 0, that means it is the last day so, availableDaysInThisMonth
should be equal to the days in this month. Else, avaialabledays are whatever this month's left over is. */
    thisMonthLeftOver = daysInThisMonth - todayDayNumber;
    thisMonthLeftOver <= 0 ? availableDaysInThisMonth = daysInThisMonth : availableDaysInThisMonth = thisMonthLeftOver;
    return availableDaysInThisMonth;
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
