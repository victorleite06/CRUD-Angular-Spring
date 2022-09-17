import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CampoCheck } from '../../model/campoCheck';

@Component({
  selector: 'app-pop-up-table',
  templateUrl: './pop-up-table.component.html',
  styleUrls: ['./pop-up-table.component.scss']
})
export class PopUpTableComponent implements OnInit {

  @Output() editForm = new EventEmitter(false)

  checkbox = this.formBuilder.group({
    name: true,
    category: true,
    id: false
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: CampoCheck,
  private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
