import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Connection } from '../models/connection';
import { environment } from '../../environments/environment';
import * as SignalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})

export class TelemetryService {
  telemetry: Subject<string> = new Subject();
  private hubConnection: SignalR.HubConnection;

  constructor(private http: HttpClient) {
  }

  private getSignalRConnection(): Observable<Connection> {
    return this.http.get<Connection>(`${environment.SIGNALR_TOKEN_URL}`);
  }

  init() {
    this.getSignalRConnection().subscribe(con => {
      const options = {
        accessTokenFactory: () => con.accessToken
      };

      this.hubConnection = new SignalR.HubConnectionBuilder()
        .withUrl(con.url, options)
        .configureLogging(SignalR.LogLevel.Information)
        .build();

      this.hubConnection.start().catch(error => console.error(error));

      this.hubConnection.on('notify', data => {
        this.telemetry.next(data);
      });
    });
  }
}
