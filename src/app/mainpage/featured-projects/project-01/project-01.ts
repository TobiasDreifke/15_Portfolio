import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, NgZone, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from '../../../interfaces/projects.interface';
import { TranslatePipe } from '@ngx-translate/core';
import { ModalService } from '../../../services/modal-service';

@Component({
  selector: 'app-project-01',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './project-01.html',
  styleUrls: ['./project-01.scss'],
})
export class Project01 implements OnDestroy {

  @Input() project!: Projects;
  @Input() index!: number;
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  private modalService = inject(ModalService);


  @ViewChild('wrapper') wrapper!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.wrapper.nativeElement.scrollTop = 0;
  }

  ngOnDestroy() {
    this.modalService.closeModal();
  }

  onClose() {
    this.close.emit();
    this.modalService.closeModal();
  }

  onNext() {
    this.next.emit();
  }
}

