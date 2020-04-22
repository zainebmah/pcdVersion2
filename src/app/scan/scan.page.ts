import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  public scan: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   
  }

}
