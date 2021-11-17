import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuToggleService {
  private toggleState = new BehaviorSubject(null);
  currentState = this.toggleState.asObservable();

  constructor() { }

  changeState(state: boolean) {
    this.toggleState.next(state)
  }
}
