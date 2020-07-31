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
  availableDaysInThisMonth: number = this.today.getDate();
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
    { data: [20590, 100300, 100232, 100232, 100232, 20590, 100300, 100232, 100232, 100232, 20590, 100300, 100232, 100232, 100232, 20590, 100300, 100232, 100232, 100232, 20590, 100300, 100232, 100232, 100232, 20590, 100300, 100232, 100232, 100442, 20590, 100300, 100232, 100232, 100232, 20590, 100300, 100232, 100232, 100232, 20590, 100300, 100232, 100232, 100232, 20590, 100300, 100232, 100232, 100232, 20590, 100300, 100232, 100232, 100232, 20590, 100300, 100232, 100232, 100442], label: 'Орлого' },
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
    /* If this month has more than 1 available days, combine current month with previous months and then sort them.
    Else, use previous months only
    */
    let orderedMonthArr: Array<number> = [];
    if (this.availableDaysInThisMonth > 1) {
      orderedMonthArr = [this.thisMonthIndex, ...this.getPreviousMonths()];
    } else {
      orderedMonthArr = [...this.getPreviousMonths()];
    }
    orderedMonthArr.sort();
    console.log(orderedMonthArr);

    console.log(this.tooltipsLabel);
    this.monthLabelIndexes.forEach((index, i) => {
      this.labelEmptySpace(index);
      //Label month name in between empty labels
      this.chartLabels.push(this.months[orderedMonthArr[i]]);
      this.labelEmptySpace(index);
    });
    /* Inserting month label exactly in the middle is impossible as both the chartLabels's size and chartDisplayRange
    changes. So, to make sure their size matches (to display all data properly), I add or remove empty day from last day.
    */
    if (this.chartLabels.length < this.chartDisplayRange) {
      let a = 0;
      while (this.chartLabels.length < this.chartDisplayRange) {
        //each time this gets called, empty day label can either be added to right or left of the first element to balance things out.
        if (a % 2 === 0) {
          this.chartLabels.splice(this.monthLabelIndexes[0] - 1, 0, '');
        } else {
          this.chartLabels.splice(this.monthLabelIndexes[0] + 1, 0, '');
        }
        a++;
      }
    } else if (this.chartLabels.length > this.chartDisplayRange) {
      let a = 0;
      while (this.chartLabels.length > this.chartDisplayRange) {
        //each time this gets called, empty day label can either be deleted from the right or left of the first element to balance things out.
        if (a % 2 === 0) {
          this.chartLabels.splice(this.monthLabelIndexes[0] - 1, 1);
        } else {
          this.chartLabels.splice(this.monthLabelIndexes[0] + 1, 1);
        }
        a++;
      }
    }
    console.log(this.chartLabels);
  }
  labelEmptySpace(index) {
    for (let i = 0; i < index; i++) {
      this.chartLabels.push('');
    }
  }

  getPreviousMonths() {

    // Need as many days as chartDisplayRange and have respective month in the middle of days that are being used as a label. 

    // Initially usableLabelDays is the available days in this month
    let usableLabelDays: number = 0;
    let previousMonths = [];
    let daysInPreviousMonths: Array<number> = [];
    // First index of this array will always be this month and others will be neighbour months
    let neededDaysInEveryMonth: Array<number> = [];
    let neededDays: number = 0;

    /* See if you need another month space or not and find the center of needed 30 days to insert those months 
    as well as calculating how many days are needed from each month.
    */
    if (this.availableDaysInThisMonth < this.chartDisplayRange) {
      let i = 0;
      while (usableLabelDays < this.chartDisplayRange) {
        // Go back to prev month and see if days in that month plus this month's available days satisfy the chartDisplayRange. Keep moving down months until chartDisplayRange is satisfied.
        previousMonths[i] = this.today.getMonth() - (i + 1);
        daysInPreviousMonths[i] = this.daysInMonth(previousMonths[i]);
        neededDays = this.chartDisplayRange - usableLabelDays;
        if (neededDays < daysInPreviousMonths[i]) {
          neededDaysInEveryMonth[i] = neededDays;
        } else {
          neededDaysInEveryMonth[i] = daysInPreviousMonths[i];
        }

        // Push all needed days from previous months starting at the last day
        let j = this.daysInMonth(previousMonths[i]);
        let k = neededDaysInEveryMonth[i];
        console.log(neededDaysInEveryMonth);
        while (0 < k) {
          this.tooltipsLabel.push(`${this.months[previousMonths[i]]}ын ${j}-н`);
          k--;
          j--;
        }

        // Update the usable days var
        usableLabelDays += daysInPreviousMonths[i];
        i++;
      }
    }

    // Determining where each month label should be placed.
    neededDaysInEveryMonth.forEach((month, i) => {
      //Determine Label Index of each month and push only if they are able to be inserted
      if (neededDaysInEveryMonth[i] > 0 && neededDaysInEveryMonth[i] != undefined) {
        this.monthLabelIndexes.push((Math.floor(neededDaysInEveryMonth[i] / 2)));
      }
    })

    /* Days are inserted from this month's latest day to last needed smallest day of previous months 
    (e.g. 8.1,7.31,...,7.2) but labeling happens in order from array index 0 to last. 
    So, arrays are reversed in order to be labeled in order properly.
    */

    this.tooltipsLabel.reverse();
    this.monthLabelIndexes.reverse();

    console.log(this.monthLabelIndexes);
    console.log(previousMonths);
    return previousMonths;
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
