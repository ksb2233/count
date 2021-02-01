import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CountsService {
    subject = new BehaviorSubject(0);
    count$ = this.subject.asObservable();

    private getCurrentCount() : number{
        return this.subject.getValue();
    }

    public excuteCount(number) {
        this.subject.next(number);
    }
}