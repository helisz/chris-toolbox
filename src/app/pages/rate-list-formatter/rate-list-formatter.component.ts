import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-list-formatter',
  templateUrl: './rate-list-formatter.component.html',
  styleUrls: ['./rate-list-formatter.component.scss']
})
export class RateListFormatterComponent implements OnInit {

  en: String;
  tc: String;
  rate: String;
  cleanRes: String;


  parseObj = function (text) {
    const arr = [];
    for (let i = 0; i < text.length; i++) {
      if (/\S/.test(text[i])) {
        let n = text[i].trim();
        if (n !== 'Country/ Area' && n !== '國家 / 地區' && n !== 'Sell Rate (HKD)') {
          console.log(text[i]);
          console.log(text[i].trim());
          arr.push(text[i].trim());
        }
      }
    }
    return arr;
  };


  preparseArr = [];

  parse = function () {
    let tcVal = this.tc.split(/\n/);
    let enVal = this.en.split(/\n/);
    let rateVal = this.rate.split(/\n/);
    let tcObj = this.parseObj(tcVal);
    let enObj = this.parseObj(enVal);
    let rateObj = this.parseObj(rateVal);
    console.log(tcObj);
    console.log(enObj);
    console.log(rateObj);

    for (let i = 0; i < tcObj.length; i++) {
      let tmp1 = new Object;
      tmp1 = {
        'name': tcObj[i],
        'rate': rateObj[i]
      };
      this.preparseArr.push(tmp1);
    }
    for (let i = 0; i < enObj.length; i++) {
      let tmp2 = new Object;
      tmp2 = {
        'name': enObj[i],
        'rate': rateObj[i]
      }
      this.preparseArr.push(tmp2);
    }
    console.log(this.preparseArr);

  };


  clean = function () {
    this.preparseArr = [];
    try {
      this.parse();
    } catch (e) {
      alert(e); // You get an error.
    }
    let cleaned = this.removeDuplicates(this.preparseArr);
    console.log(cleaned);
    // jQuery('.cleanRes').val(JSON.stringify(cleaned));
    this.cleanRes = JSON.stringify(cleaned);
  };

  cleanFormat = function () {
    this.preparseArr = [];
    try {
      this.parse();
    } catch (e) {
      alert(e); // You get an error.
    }
    let cleaned = this.removeDuplicates(this.preparseArr);
    cleaned = cleaned.replace(/\s/g, '');
    // jQuery('.cleanRes').val(JSON.stringify(cleaned, null, '\t'));
    this.cleanRes = JSON.stringify(cleaned, null, '\t');
  };

  removeDuplicatFunc = function (arr, index) {
    const unique = arr
         .map(e => e[index])
         .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e]).map(e => arr[e]);
     return unique;
  }

  removeDuplicates = function (json_all) {
    return this.removeDuplicatFunc(json_all, 'name');
  };

  constructor() { }

  ngOnInit() {

  }

}
