import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {Observable, of} from "rxjs";
import {HEROES} from "./mock-heroes";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageSerive: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageSerive.add('Hero service: fetched heroes');
    return of(HEROES);
  }

}
