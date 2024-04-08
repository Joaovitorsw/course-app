import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private renderer2: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer2 = rendererFactory.createRenderer(null, null);
  }

  show(message: string, duration: number = 3000) {
    this.createToast(duration, '', '', message);
  }
  success(
    message: string,
    iconName: string = 'check_circle',
    duration: number = 3000
  ) {
    this.createToast(duration, iconName, 'success', message);
  }
  error(message: string, iconName: string = 'error', duration: number = 3000) {
    this.createToast(duration, iconName, 'error', message);
  }

  private createToast(
    duration: number,
    iconName: string,
    className: string,
    message: string
  ) {
    const $toast = this.renderer2.createElement('div');
    const $toastIcon = this.renderer2.createElement('div');
    const $toastMessage = this.renderer2.createElement('div');
    $toast.setAttribute('data-time', duration);
    $toast.classList.add('toast', className);
    $toastIcon.classList.add('toast-icon', 'material-symbols-outlined');
    $toastMessage.classList.add('toast-message');
    $toastIcon.innerHTML = iconName;
    $toastMessage.innerText = message;
    $toast.appendChild($toastIcon);
    $toast.appendChild($toastMessage);
    $toast.style.animation = `toast-in 500ms forwards`;
    this.renderer2.appendChild(document.body, $toast);
    setTimeout(() => {
      $toast.style.animation = `toast-out 500ms forwards`;
      setTimeout(() => {
        this.renderer2.removeChild(document.body, $toast);
      }, 500);
    }, duration);
  }
}
