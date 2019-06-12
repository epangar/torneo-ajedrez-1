import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { beer } from '../store/night.actions';

@Component({
  selector: 'app-night',
  templateUrl: './night.component.html',
  styleUrls: ['./night.component.scss']
})
export class NightComponent implements OnInit {

  night

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(select('night')).subscribe(payload => this.night=payload)
  }

  sendAction(): void {
    this.store.dispatch(beer())
    console.log('BEER', beer())
    console.log('Night', this.night)
    debugger
    console.log('hola')
  }

}
