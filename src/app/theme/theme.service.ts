import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeThem = new BehaviorSubject('citiusTechDefaultProps');
  private activeThemename = 'citiusTechDefaultProps';

  constructor() { }

  public getActiveTheme() {
    return this.activeThem.asObservable();
  }


  public getActiveThemeName() {
    return this.activeThemename;
  }

  public setActiveThem(name) {
    this.activeThemename = name;
    this.activeThem.next(name);
  }
}
