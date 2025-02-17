import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MomentModule } from 'ngx-moment';
import moment from 'moment';
import momentTimezone from 'moment-timezone';

import { PipesModule } from '../../pipes/pipes.module';
import { CalendarView } from './calendar-view.enum';
import { CalendarComponent } from './calendar.component';

(momentTimezone as any).suppressDeprecationWarnings = true;

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CalendarComponent],
        schemas: [NO_ERRORS_SCHEMA],
        imports: [MomentModule, PipesModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('changeViews', () => {
    it('should change view to month if date', () => {
      component.currentView = CalendarView.Date;
      component.changeViews();
      expect(component.currentView).toBe(CalendarView.Month);
    });

    it('should change view to year if month', () => {
      component.currentView = CalendarView.Month;
      component.changeViews();
      expect(component.currentView).toBe(CalendarView.Year);
    });

    it('should change view to min if year', () => {
      component.currentView = CalendarView.Year;
      component.changeViews();
      expect(component.currentView).toBe(component.minView);
    });
  });

  describe('validateView', () => {
    it('should set minView as date if minView is not date, month, or year', () => {
      component.minView = 'test' as any;
      component.validateView();
      expect(component.minView).toBe(CalendarView.Date);
    });

    it('should set defaultView to minView if defaultView is smaller than than minView', () => {
      component.minView = CalendarView.Month;
      component.defaultView = CalendarView.Date;
      component.validateView();
      expect(component.defaultView).toBe(component.minView);
    });
  });

  describe('isDayActive', () => {
    it('should return true if date matches day value', () => {
      component.value = new Date();
      expect(component.isDayActive(moment())).toBe(true);
    });

    it('should return false if date does not match day value', () => {
      const now = new Date();
      now.setFullYear(now.getFullYear() - 1);
      component.value = now;
      expect(component.isDayActive(moment())).toBe(false);
    });
  });

  describe('isMonthActive', () => {
    it('should return true if same month of year', () => {
      component.value = new Date();
      expect(component.isMonthActive(moment().format('MMMM'))).toBe(true);
    });

    it('should return false if not same month of year', () => {
      const now = new Date();
      now.setMonth(now.getMonth() - 1);
      component.value = now;
      expect(component.isMonthActive(moment().format('MMMM'))).toBe(false);
    });
  });

  describe('isCurrentMonth', () => {
    it('should return true if month is same as current', () => {
      component.value = new Date();
      component.ngOnInit();
      expect(component.isCurrentMonth(moment().format('MMMM'))).toBe(true);
    });

    it('should return false if month is not same as current', () => {
      const now = new Date();
      now.setMonth(now.getMonth() - 1);
      component.value = now;
      component.ngOnInit();
      expect(component.isCurrentMonth(moment().format('MMMM'))).toBe(false);
    });
  });

  describe('isYearActive', () => {
    it('should return true if year is same as value', () => {
      component.value = new Date();
      expect(component.isYearActive(new Date().getFullYear())).toBe(true);
    });

    it('should return false if year is not same as value', () => {
      const now = new Date();
      now.setFullYear(now.getFullYear() - 1);
      component.value = now;
      expect(component.isYearActive(new Date().getFullYear())).toBe(false);
    });
  });

  describe('isCurrentYear', () => {
    it('should return true if year is same as current', () => {
      component.value = new Date();
      component.ngOnInit();
      expect(component.isCurrentYear(new Date().getFullYear())).toBe(true);
    });

    it('should return false if year is not same as current', () => {
      const now = new Date();
      now.setFullYear(now.getFullYear() - 1);
      component.value = now;
      component.ngOnInit();
      expect(component.isCurrentYear(new Date().getFullYear())).toBe(false);
    });
  });

  describe('isDisabled', () => {
    it('should return true if disabled', () => {
      component.disabled = true;
      expect(component.isDisabled(undefined, undefined)).toBe(true);
    });

    it('should return false if value undefined', () => {
      expect(component.isDisabled(undefined, undefined)).toBe(false);
    });

    it('should return true if date is before min', () => {
      component.minDate = new Date();
      component.minDate.setMonth(2);
      expect(component.isDisabled('January', 'month')).toBe(true);
    });

    it('should return true if date is after max', () => {
      const date = moment().add(1, 'years');
      component.maxDate = new Date();
      expect(component.isDisabled(date.format('YYYY'), 'year')).toBe(true);
    });

    it('should return false if invalid type', () => {
      expect(component.isDisabled(moment().format('YYYY'), 'test')).toBe(false);
    });
  });

  describe('onDayClick', () => {
    beforeEach(() => {
      component.weeks = [];
    });

    it('should set value and set weeks of month', () => {
      component.onDayClick({
        date: moment(),
        nextMonth: true,
        prevMonth: true
      } as any);
      expect(component.weeks.length).toBeGreaterThan(0);
    });

    it('should set value but not set weeks of month', () => {
      component.onDayClick({
        date: moment()
      } as any);
      expect(component.weeks.length).toBe(0);
    });
  });

  describe('onMonthClick', () => {
    beforeEach(() => {
      component.weeks = [];
    });

    it('should set value and set weeks of month', () => {
      component.minView = CalendarView.Year;
      component.onMonthClick(moment().format('MMMM'));
      expect(component.weeks.length).toBeGreaterThan(0);
    });

    it('should set value but not set weeks of month', () => {
      component.minView = CalendarView.Month;
      component.onMonthClick(moment().format('MMMM'));
      expect(component.weeks.length).toBe(0);
    });
  });

  describe('onYearClick', () => {
    beforeEach(() => {
      component.weeks = [];
    });

    it('should set value and set weeks of month', () => {
      component.minView = CalendarView.Month;
      component.onYearClick(new Date().getFullYear());
      expect(component.weeks.length).toBeGreaterThan(0);
    });

    it('should set value but not set weeks of month', () => {
      component.minView = CalendarView.Year;
      component.onYearClick(new Date().getFullYear());
      expect(component.weeks.length).toBe(0);
    });
  });

  describe('pagination', () => {
    beforeEach(() => {
      component.activeDate = moment('5/1/1975');
      component.startYear = new Date().getFullYear();
      component.weeks = [];
    });

    describe('month', () => {
      describe('prevMonth', () => {
        it('should set value to previous month', () => {
          const month = component.activeDate.get('month');
          component.prevMonth();
          expect(component.activeDate.get('month')).toBe(month - 1);
          expect(component.weeks.length).toBeGreaterThan(0);
        });
      });

      describe('nextMonth', () => {
        it('should set value to next month', () => {
          const month = component.activeDate.get('month');
          component.nextMonth();
          expect(component.activeDate.get('month')).toBe(month < 11 ? month + 1 : 0);
          expect(component.weeks.length).toBeGreaterThan(0);
        });
      });
    });

    describe('year', () => {
      describe('prevYear', () => {
        it('should set value to previous year', () => {
          const year = component.activeDate.get('year');
          component.prevYear();
          expect(component.activeDate.get('year')).toBe(year - 1);
        });
      });

      describe('nextYear', () => {
        it('should set value to next year', () => {
          const year = component.activeDate.get('year');
          component.nextYear();
          expect(component.activeDate.get('year')).toBe(year + 1);
        });
      });
    });

    describe('twoDecades', () => {
      describe('prevTwoDecades', () => {
        it('should set startYear to two decades ago', () => {
          const startYear = component.startYear;
          component.prevTwoDecades();
          expect(component.startYear).toBe(startYear - 20);
        });
      });

      describe('nextTwoDecades', () => {
        it('should set startYear to two decades in the future', () => {
          const startYear = component.startYear;
          component.nextTwoDecades();
          expect(component.startYear).toBe(startYear + 20);
        });
      });
    });
  });

  describe('writeValue', () => {
    it('should write to value if valid and different', () => {
      const now = new Date();
      const newDate = new Date();
      now.setDate(now.getDate() - 1);
      component.value = now;
      component.writeValue(newDate);
      expect(component.activeDate.isSame(newDate)).toBe(true);
    });

    it('should not write new value if invalid', () => {
      const date = 'test';
      component.value = new Date();
      component.writeValue(date);
      expect(component.activeDate.isSame(date)).toBe(false);
    });
  });

  describe('registerOnChange', () => {
    it('should register new on change callback fn', done => {
      component.value = new Date();
      component.registerOnChange((v: Date) => {
        expect(v).toEqual(now);
        done();
      });

      const now = new Date();
      now.setDate(now.getDate() + 1);
      component.value = now;
    });
  });
});
