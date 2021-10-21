import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2s delay
      setTimeout(() => resolve(LEADERS), 10000);
  });
}

  getLeader(id: string): Promise<Leader> {
    return new Promise(resolve => {
      // Simulate server latency with 2s delay
      setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 10000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 10000);
  });
}
}
