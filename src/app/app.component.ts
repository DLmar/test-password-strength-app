import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {PasswordService} from "./password.service";
import {ColorChecker} from './colorChecker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppComponent),
      multi: true
    }
  ]
})
export class AppComponent implements ControlValueAccessor {
  password: string = '';
  passwordStrength: string = '';

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private passwordService: PasswordService) {}

  writeValue(value: string): void {
    this.password = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  getPasswordColor(index: number): string {
    const passwordLength = this.password.length;

    const hasLetters = this.passwordService.containsLetters(this.password);
    const hasDigits = this.passwordService.containsDigits(this.password);
    const hasSymbols = this.passwordService.containsSymbols(this.password);

    const colorChecker = new ColorChecker();
    colorChecker.hasLetters = hasLetters;
    colorChecker.hasDigits = hasDigits;
    colorChecker.hasSymbols = hasSymbols;

    if (passwordLength === 0) {
      return 'gray';
    } else if (passwordLength < 8) {
      return 'red';
    }

    if (colorChecker.redChecker) {
      return index === 0 ? 'red' : 'gray';
    }

    if (colorChecker.yellowChecker) {
      return index === 0 || index === 1 ? 'yellow' : 'gray';
    }

    if (colorChecker.greenChecker) {
      return 'green';
    }

    return 'gray';
  }

  onInputChange(event: any): void {
    this.password = event.target.value;
    this.onChange(this.password);
  }

  onBlur(): void {
    this.onTouched();
  }
}
