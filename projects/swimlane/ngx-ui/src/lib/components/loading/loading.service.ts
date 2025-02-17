import { Injectable, ComponentRef } from '@angular/core';

import { InjectionService } from '../../services/injection/injection.service';
import { LoadingComponent } from './loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  threshold: number = 250;

  set progress(val: number) {
    if (this.instance) {
      this.instance.progress = val;
    }

    this._progress = val;
  }

  get progress(): number {
    return this._progress;
  }

  get count(): number {
    return this._count;
  }

  private get instance() {
    if (this.component) return this.component.instance;
  }

  private _count: number = 0;
  private timeout: any;
  private component: ComponentRef<LoadingComponent>;
  private _progress: number = 0;

  constructor(private readonly injectionService: InjectionService) {}

  start(autoIncrement: boolean = true): void {
    this.create();
    this._count++;

    if (autoIncrement) {
      clearTimeout(this.timeout);

      const fn = () => {
        this.increment();
        if (this.progress < 100) {
          this.timeout = setTimeout(fn, this.threshold);
        } else {
          this.complete();
        }
      };

      this.timeout = setTimeout(fn, this.threshold);
    }
  }

  stop(): void {
    this._count--;
    clearTimeout(this.timeout);
  }

  reset(num: number = 0): void {
    this.progress = num;
  }

  complete(all: boolean = false): void {
    this._count--;

    if (this.count <= 0 || all) {
      this.progress = 100;
      this._count = 0;

      setTimeout(() => {
        this.hide();
        this.progress = 0;
      }, this.threshold * 2);
    }
  }

  hide(): void {
    this.stop();

    if (this.instance) {
      this.instance.visible = false;
    }
  }

  private create(): ComponentRef<LoadingComponent> {
    if (!this.component) {
      this.component = this.injectionService.appendComponent(LoadingComponent);
    }

    this.instance.visible = true;
    this.instance.progress = this.progress;

    return this.component;
  }

  private increment(): void {
    if (this.progress >= 100) return;

    // inspired by angular-loading-bar
    // https://github.com/chieffancypants/angular-loading-bar
    const stat = this.progress / 100;
    let rnd = 0;

    if (stat >= 0 && stat < 0.25) {
      // Start out between 3 - 6% increments
      rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
    } else if (stat >= 0.25 && stat < 0.65) {
      // increment between 0 - 3%
      rnd = (Math.random() * 3) / 100;
    } else if (stat >= 0.65 && stat < 0.9) {
      // increment between 0 - 2%
      rnd = (Math.random() * 2) / 100;
    } else {
      // finally, increment it .5 %
      // after 99%, don't increment:
      rnd = 0.005;
    }

    this.progress = (stat + rnd) * 100;
  }
}
