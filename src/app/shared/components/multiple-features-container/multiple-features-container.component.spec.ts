import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleFeaturesContainerComponent } from './multiple-features-container.component';

describe('MultipleFeaturesContainerComponent', () => {
  let component: MultipleFeaturesContainerComponent;
  let fixture: ComponentFixture<MultipleFeaturesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleFeaturesContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleFeaturesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
