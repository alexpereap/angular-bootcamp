import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  modalOpen = false;

  items = [
    { title: 'Why is the sky blue?', content: 'Sky is blue because it is' },
    { title: 'What does an orange taste like?', content: 'An organge tastes like an orange'},
    { title: 'What color is the cat?', content: 'It is orange'},
  ]

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
