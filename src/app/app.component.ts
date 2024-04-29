import { Component, Inject, inject, OnInit, Renderer2 } from '@angular/core';
import { Brand } from '@raiadrogasil/pulso-tokens';
import {
  PULSO_SETTINGS_TOKEN,
  PulsoSettings,
} from 'pulso-angular-design-system';
import { LoaderService } from './shared/services/loader/loader.service';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Course App';
  readonly loaderService = inject(LoaderService);
  readonly renderer2 = inject(Renderer2);
  constructor(@Inject(PULSO_SETTINGS_TOKEN) readonly settings: PulsoSettings) {}

  tokenSelected: Brand = 'drogaraia';
  get token() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }
  ngOnInit(): void {
    const $loaderContainer: HTMLElement =
      this.renderer2.selectRootElement('.loader-container');
    const $loader = this.renderer2.createElement('div');
    $loader.classList.add('loader');
    $loaderContainer.appendChild($loader);

    this.loaderService.isLoading$.subscribe((value) => {
      if (value) {
        $loaderContainer?.classList.add('show');
      } else {
        $loaderContainer?.classList.remove('show');
      }
    });
  }
}
