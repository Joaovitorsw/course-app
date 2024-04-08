import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { delay } from 'rxjs';
import { Course, Student } from '../../../../../interfaces/api.interfaces';
import { SharedModule } from '../../../../shared/shared.module';
import { StudentsService } from '../../services/students/students.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {
  private readonly studentsService = inject(StudentsService);
  students: WritableSignal<Student[]> = signal([]);
  studentId: WritableSignal<number> = signal(0);
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);

  ngOnInit(): void {
    this.getListData();
  }

  private getListData() {
    this.studentsService
      .getAll()

      .subscribe((response) => {
        this.students.set(response.data);
      });
  }

  toggleActive(student: { id: number; active: boolean }) {
    this.studentsService
      .toggleActive(student)
      .pipe(delay(500))
      .subscribe(() => {
        this.students.update((students) =>
          students.map((s) =>
            s.id === student.id ? { ...s, active: !s.active } : s
          )
        );
      });
  }

  onSubmit() {
    const method = this.studentId() ? 'update' : 'create';
    this.studentsService[method]({
      id: this.studentId(),
      name: this.name.value,
    } as Course).subscribe(() => {
      this.getListData();
      this.name.reset();
    });
  }
}
