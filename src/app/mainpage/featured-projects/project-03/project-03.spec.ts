import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project03 } from './project-03';

describe('Project03', () => {
  let component: Project03;
  let fixture: ComponentFixture<Project03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project03]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project03);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
