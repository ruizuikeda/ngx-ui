import { trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  fadeInAnimation,
  slideDownFadeOutAnimation,
} from '@swimlane/ngx-ui/animations';
import { DestroyedService } from '@swimlane/ngx-ui/destroyed';
import { BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HotkeyStatus } from './enums';
import type { HotkeyOptions, Hotkeys } from './models';
import { HotkeysService } from './services';

@Component({
  selector: 'ngx-hotkeys',
  exportAs: 'ngxHotkeys',
  templateUrl: './hotkeys.component.html',
  styleUrls: ['./hotkeys.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('containerAnimationState', slideDownFadeOutAnimation()),
    trigger('iconAnimationState', fadeInAnimation()),
  ],
  providers: [DestroyedService],
})
export class HotkeysComponent implements OnInit {
  readonly hotkeys$ = new BehaviorSubject<HotkeyOptions[]>([]);
  visible = false;

  constructor(
    private readonly destroyed: DestroyedService,
    private readonly hotkeysService: HotkeysService
  ) {}

  ngOnInit(): void {
    this.hotkeysService.changeEvent
      .pipe(takeUntil(this.destroyed))
      .subscribe(this.updateHotkeys.bind(this));
    this.updateHotkeys(this.hotkeysService.hotkeys);
  }

  updateHotkeys(hotkeys: Hotkeys) {
    const hks: HotkeyOptions[] = [];

    for (const comb in hotkeys) {
      // noinspection JSUnfilteredForInLoop
      for (const hotkey of hotkeys[comb]) {
        if (hotkey.status === HotkeyStatus.Active && hotkey.visible) {
          hks.push(hotkey);
        }
      }
    }

    this.hotkeys$.next(hks);
  }
}