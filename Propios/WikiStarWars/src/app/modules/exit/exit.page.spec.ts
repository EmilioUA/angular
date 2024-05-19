import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExitPage } from './exit.page.component';

describe('ExitPage', () => {
  let component: ExitPage;
  let fixture: ComponentFixture<ExitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
