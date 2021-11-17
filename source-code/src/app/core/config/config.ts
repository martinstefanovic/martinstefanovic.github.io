import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  // All app languages
  languages = [
    { name: 'Srpski', code: 'sr' },
    { name: 'Engleski', code: 'en' },
    // { name: 'Nemački', code: 'de' },
  ];
}
