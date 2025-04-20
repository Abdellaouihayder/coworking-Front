import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiaireDashboardComponent } from './stagiaire-dashboard.component';

describe('StagiaireDashboardComponent', () => {
  let component: StagiaireDashboardComponent;
  let fixture: ComponentFixture<StagiaireDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StagiaireDashboardComponent]
    });
    fixture = TestBed.createComponent(StagiaireDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
