import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HighlightService {
  selectedWord = signal<string | undefined>(undefined);
}
