import { Component, OnInit } from '@angular/core';
import { Observable,EMPTY } from 'rxjs';
import { PingPongService } from '../ping-pong.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ping-pong',
  templateUrl: './ping-pong.component.html',
  styleUrls: ['./ping-pong.component.css']
})
export class PingPongComponent implements OnInit {

  pingPongResponse$: Observable<string>;

  constructor(private service: PingPongService) {
    this.pingPongResponse$ = EMPTY;
   }

  ngOnInit(): void {
    this.pingPongResponse$ = this.service.doPing().pipe(tap(console.log));
  }

}