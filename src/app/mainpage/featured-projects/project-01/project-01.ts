import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from '../../../interfaces/projects.interface';

@Component({
  selector: 'app-project-01',
  imports: [CommonModule],
  templateUrl: './project-01.html',
  styleUrls: ['./project-01.scss']
})
export class Project01 {

  @Input()
  project!: Projects;

  @Input() index!: number;

  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onNext() {
    this.next.emit();
  }
}