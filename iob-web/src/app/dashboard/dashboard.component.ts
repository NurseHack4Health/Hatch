import { Component, OnInit } from '@angular/core';
import { TelemetryService } from '../services/telemetryService';
import { Telemetry } from '../models/telemetry';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  telemetry: Telemetry = new Telemetry();

  constructor(private telemetryService: TelemetryService) {
  }

  ngOnInit() {
    this.telemetryService.init();
    this.telemetryService.telemetry.subscribe(data => {
      this.telemetry = JSON.parse(data);
      console.log(data);
    });
  }

}
