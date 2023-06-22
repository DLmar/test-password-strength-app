import { Component, Input } from '@angular/core';

@Component({
  selector: 'color-checker',
  template: ``
})
export class ColorChecker {
  @Input() hasLetters: boolean = false;
  @Input() hasDigits: boolean = false;
  @Input() hasSymbols: boolean = false;

  get redChecker(): boolean {
  return (
      (this.hasLetters && !this.hasDigits && !this.hasSymbols) ||
      (!this.hasLetters && this.hasDigits && !this.hasSymbols) ||
      (!this.hasLetters && !this.hasDigits && this.hasSymbols)
   )
  }

  get yellowChecker(): boolean {
    return (
      (this.hasLetters && this.hasDigits && !this.hasSymbols) ||
      (this.hasLetters && !this.hasDigits && this.hasSymbols) ||
      (!this.hasLetters && this.hasDigits && this.hasSymbols)
    );
  }

  get greenChecker(): boolean {
    return (
      (this.hasLetters && this.hasDigits && !this.hasSymbols) ||
      (this.hasLetters && !this.hasDigits && this.hasSymbols) ||
      (!this.hasLetters && this.hasDigits && this.hasSymbols)
    );
  }
}
