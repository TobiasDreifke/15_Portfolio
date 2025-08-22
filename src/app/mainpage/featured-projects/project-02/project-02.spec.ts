import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project02 } from './project-02';

describe('Project02', () => {
  let component: Project02;
  let fixture: ComponentFixture<Project02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
