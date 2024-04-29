import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICON_LIST } from '@raiadrogasil/pulso-icons';
import { Brand } from '@raiadrogasil/pulso-tokens/tokens';
import { PulsoModule } from 'pulso-angular-design-system';
import { HelperText } from 'pulso-angular-design-system/form-field';
import { PulsoToastService } from 'pulso-angular-design-system/toast';
import { SharedModule } from '../../../../shared/shared.module';
@Component({
  selector: 'app-pulso',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './pulso.component.html',
  styleUrl: './pulso.component.scss',
})
export class PulsoComponent implements OnInit {
  icons = ICON_LIST;
  optionListFirst = [
    {
      value: null,
      text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
          exercitationem! Alias, quae. Sed, cum mollitia magnam perspiciatis
          unde rem tenetur, rerum, quod id ullam nisi reiciendis iste optio
          doloremque ipsa!`,
    },
    { value: 6, text: 'Option 6' },
    { value: 7, text: 'Option 7' },
    { value: 8, text: 'Option 8' },
    { value: 9, text: 'Option 9' },
    { value: 10, text: 'Option 10' },
    { value: 11, text: 'Option 11' },
    { value: 12, text: 'Option 12' },
    { value: 13, text: 'Option 13' },
    { value: 14, text: 'Option 14' },
    { value: 15, text: 'Option 15' },
    { value: 16, text: 'Option 16' },
    { value: 17, text: 'Option 17' },
    { value: 18, text: 'Option 18' },
    { value: 19, text: 'Option 19' },
    { value: 20, text: 'Option 20' },
    { value: 21, text: 'Option 21' },
    { value: 22, text: 'Option 22' },
    { value: 23, text: 'Option 23' },
    { value: 24, text: 'Option 24' },
    { value: 25, text: 'Option 25' },
  ];

  optionListSecond = [
    { value: 2, text: 'Option 2' },
    { value: 3, text: 'Option 3' },
    { value: 4, text: 'Option 4' },
    { value: 5, text: 'Option 5' },
    { value: 6, text: 'Option 6' },
    { value: 7, text: 'Option 7' },
    { value: 8, text: 'Option 8' },
    { value: 9, text: 'Option 9' },
    { value: 10, text: 'Option 10' },
    { value: 11, text: 'Option 11' },
    { value: 12, text: 'Option 12' },
    { value: 13, text: 'Option 13' },
    { value: 14, text: 'Option 14' },
    { value: 15, text: 'Option 15' },
    { value: 16, text: 'Option 16' },
    { value: 17, text: 'Option 17' },
    { value: 18, text: 'Option 18' },
    { value: 19, text: 'Option 19' },
    { value: 20, text: 'Option 20' },
    { value: 21, text: 'Option 21' },
    { value: 22, text: 'Option 22' },
    { value: 23, text: 'Option 23' },
    { value: 24, text: 'Option 24' },
    { value: 25, text: 'Option 25' },
  ];

  optionTooltip = [
    { value: 'center-left', text: 'Center Left' },
    { value: 'center-right', text: 'Center Right' },
    { value: 'bottom-right', text: 'Bottom Right' },
    { value: 'bottom-left', text: 'Bottom Left' },
    { value: 'bottom-center', text: 'Bottom Center' },
    { value: 'top-right', text: 'Top Right' },
    { value: 'top-left', text: 'Top Left' },
    { value: 'top-center', text: 'Top Center' },
  ];

  buttonExamples = [
    {
      class: 'row',
      buttons: [
        { color: '', text: 'Default' },
        { color: 'primary', text: 'Primary' },
        { color: 'secondary', text: 'Secondary' },
      ],
    },
    {
      class: 'row',
      buttons: [
        { color: 'conversion', text: 'Conversion' },
        { color: 'conversion-secondary', text: 'Conversion Secondary' },
        { color: 'conversion-ghost', text: 'Conversion Ghost' },
      ],
    },
    {
      class: 'row',
      buttons: [
        { color: 'black', text: 'Black' },
        { color: 'black-secondary', text: 'Black Secondary' },
        { color: 'black-ghost', text: 'Black Ghost' },
      ],
    },
    {
      class: 'row',
      buttons: [
        { color: 'subscription', text: 'Subscription' },
        { color: 'subscription-secondary', text: 'Subscription Secondary' },
        { color: 'subscription-ghost', text: 'Subscription Ghost' },
      ],
    },
    {
      class: 'row black',
      buttons: [
        { color: 'white', text: 'White' },
        { color: 'white-secondary', text: 'White Secondary' },
        { color: 'white-ghost', text: 'White Ghost' },
      ],
    },
  ];
  controlOutline = new FormControl(null, [
    Validators.required,
    Validators.minLength(5),
  ]);
  controlFixed = new FormControl(null, [
    Validators.required,
    Validators.minLength(5),
  ]);

  control = new FormControl(null, Validators.required);
  control2 = new FormControl(null, Validators.required);
  helperText: HelperText = {
    text: 'Teste',
    iconName: 'rdicon-default',
  };
  toastForm = new FormGroup({
    title: new FormControl('Title toast', Validators.required),
    message: new FormControl('Toast Message', Validators.required),
    timer: new FormControl(2000, Validators.required),
    type: new FormControl('success', Validators.required),
  });
  tooltipForm = new FormGroup({
    position: new FormControl('center-left', Validators.required),
    showDelay: new FormControl(500),
    hideDelay: new FormControl(500),
  });

  options = [
    {
      value: 'drogaraia',
      text: 'Drogaraia',
    },
    {
      value: 'drogasil',
      text: 'Drogasil',
    },
    {
      value: 'plataformasaude',
      text: 'Plataforma Saúde',
    },
    {
      value: 'raia',
      text: 'Raia',
    },
    {
      value: 'raiadrogasil',
      text: 'Raia Drogasil',
    },
    {
      value: 'subscription',
      text: 'Subscription',
    },
    {
      value: 'whitelabel',
      text: 'White Label',
    },
    {
      value: 'tr',
      text: 'TR',
    },
  ];
  constructor(
    readonly pulsoToastService: PulsoToastService,
    readonly pulsoModule: PulsoModule
  ) {}
  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
      console.log(value);
    });
    console.log(this.icons);
  }
  changeToken(token: Brand) {
    this.pulsoModule.changeTokenTheme(token);
  }

  eventChange(event: Event) {
    if (event.target instanceof HTMLInputElement)
      console.log(event.target.value);
  }
  openToast() {
    this.pulsoToastService[
      this.toastForm.value.type as any as keyof PulsoToastService
    ](
      this.toastForm.value.message as any,
      this.toastForm.value.title as any,
      this.toastForm.value.timer as any
    );
  }
}
