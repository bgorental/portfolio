import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickeryComponent } from './quickery.component';

describe('QuickeryComponent', () => {
  let component: QuickeryComponent;
  let fixture: ComponentFixture<QuickeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
