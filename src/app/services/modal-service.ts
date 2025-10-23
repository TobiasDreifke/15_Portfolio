import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private _isModalOpen = signal(false);

  isModalOpen() {
    return this._isModalOpen();
  }

  openModal() {
    this._isModalOpen.set(true);
    document.body.classList.add('no-scroll');
  }

  closeModal() {
    this._isModalOpen.set(false);
    document.body.classList.remove('no-scroll');
  }
}
