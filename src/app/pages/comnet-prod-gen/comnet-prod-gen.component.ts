import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-comnet-prod-gen',
  templateUrl: './comnet-prod-gen.component.html',
  styleUrls: ['./comnet-prod-gen.component.scss']
})
export class ComnetProdGenComponent implements OnInit {

  constructor(private message: NzMessageService) { }

  data: any;
  str: any;
  defaultData = {
    table: 'boss.ONLINE_PRODUCT_INFO',
    promo: 'Info1',
    terms: 'Terms1',
    edesc3: ' ',
    cdesc3: ' '
  };

  ngOnInit() {
    this.data = {...this.defaultData};
  }

  replace = function (str: string) {
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
  };

  gen = function () {
    const d = this.data;


    this.str =
      'INSERT INTO ' + d.table + ' VALUES ( ' +
      '\'' + d.ename + '\'\, ' +
      '\'' + d.cname + '\'\, ' +
      '\'' + d.promo + '\'\, ' +
      '\'' + d.terms + '\'\, ' +
      '\'resources/img/comnet/' + 'prd_' + d.id + '\.png' + '\'\, ' +
      '\'{\"en\":{\"title\":\"' +
      d.ename +
      '\",\"productDesc\": \"<div class=\'\'content\'\'><p>' +
      d.edesc1 +
      '</p><p><b>Card Details</b></p><p>' +
      this.replace(d.edesc2) +
      '</p><p>' +
      d.edesc3 +
      '</p></div>\"},\"tc\":{\"title\":\"' +
      d.cname +
      '\",\"productDesc\": \"<div class=\'\'content\'\'><p>' +
      d.cdesc1 +
      '</p><p><b>產品詳情</b></p><p>' +
      this.replace(d.cdesc2) +
      '</p><p>' +
      d.cdesc3 +
      '</p></div>\"}}' + '\'\, ' +

      d.price + '\, ' +
      '\'' + 'HKD' + '\'\, ' +
      1 + '\, ' +
      'sysdate' + '\, ' +
      '\'' + '31-DEC-18' + '\'\, ' +
      'sysdate' + '\, ' +
      '\'' + '31-DEC-18' + '\'\, ' +
      d.id + ') '
      ;
  };

  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.message.info('SQL code is successfuly copied!');
  }

  reset() {
    this.str = '',
    this.data = {...this.defaultData};
  }

}
