import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from '../../../interfaces/projects.interface';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-project-01',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './project-01.html',
  styleUrls: ['./project-01.scss']
})
export class Project01 {
  @Input()
  project!: Projects;
  @Input() index!: number;
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  ngOnInit() {
    document.body.classList.add('no-scroll');
  }

  ngOnDestroy() {
    document.body.classList.remove('no-scroll');
  }

  onClose() {
    this.close.emit();
  }

  onNext() {
    this.next.emit();
  }
}