import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
 public code: string;
  public neededCode: string;
  constructor() {
  }
}
