import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public dataShareSubject = new Subject<any>();
  public sharePausedArray = new Subject<any>();
  constructor() { }
}
