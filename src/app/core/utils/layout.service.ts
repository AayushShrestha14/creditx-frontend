import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { delay, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  protected layoutSize$: Subject<any> = new Subject<any>();

  changeLayoutSize() {
    this.layoutSize$.next(null);
  }

  onChangeLayoutSize(): Observable<any> {
    return this.layoutSize$.pipe(share(), delay(1));
  }
}
