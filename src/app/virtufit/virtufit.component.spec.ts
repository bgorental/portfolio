import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtufitComponent } from './virtufit.component';

describe('VirtufitComponent', () => {
  let component: VirtufitComponent;
  let fixture: ComponentFixture<VirtufitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtufitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtufitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
