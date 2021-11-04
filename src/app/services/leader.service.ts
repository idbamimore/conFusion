import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
// import { LEADERS } from '../shared/leaders';

import { Observable, of } from 'rxjs';
// import { delay } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,
    private ProcessHTTPMsg: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders')
    .pipe(catchError(this.ProcessHTTPMsg.handleError));
}

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders/' + id)
    .pipe(catchError(this.ProcessHTTPMsg.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(baseURL + 'leaders?featured=true')
    .pipe(map(leaders => leaders[0]))
    .pipe(catchError(this.ProcessHTTPMsg.handleError))
}
}
