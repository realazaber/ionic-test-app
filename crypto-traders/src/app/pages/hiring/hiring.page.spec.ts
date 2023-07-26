import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiringPage } from './hiring.page';

describe('HiringPage', () => {
  let component: HiringPage;
  let fixture: ComponentFixture<HiringPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HiringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
