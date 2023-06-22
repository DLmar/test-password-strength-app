import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  containsLetters(password: string): boolean {
    return /[a-zA-Z]/.test(password);
  }

  containsDigits(password: string): boolean {
    return /\d/.test(password);
  }

  containsSymbols(password: string): boolean {
    return /[@$!%*?&]/.test(password);
  }

}
