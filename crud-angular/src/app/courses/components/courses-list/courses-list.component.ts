import { CampoCheck } from './../../model/campoCheck';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PopUpTableComponent } from '../pop-up-table/pop-up-table.component';
import { Course } from './../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Course[] = []
  @Output() add = new EventEmitter(false)
  @Output() edit = new EventEmitter(false)
  @Output() delete = new EventEmitter(false)
  @Output() editForm = new EventEmitter(false)

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(private dialog: MatDialog,
    private check: CampoCheck) { }

  check

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true)
  }

  onEdit(course: Course){
    this.edit.emit(course)
  }

  onDelete(course: Course){
    this.delete.emit(course)
  }

  onEditColumn(){
    let popup = this.dialog.open(PopUpTableComponent, {
      width: '445px', height: 'auto',
      data: {name: check.name, category: check.category, id: check.id}
    });

    popup.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}
