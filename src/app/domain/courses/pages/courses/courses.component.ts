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
import { StudentsService } from '../../../students/services/students/students.service';
import { CoursesService } from '../../services/courses/courses.service';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  private readonly coursesService = inject(CoursesService);
  private readonly studentsService = inject(StudentsService);

  data: WritableSignal<null | Student> = signal(null);
  courseId: WritableSignal<number> = signal(0);
  courses: WritableSignal<Course[]> = signal([]);
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);

  ngOnInit(): void {
    this.getListData();
    this.getCourses();
  }
  hasSubscribed(courseId: number) {
    return this.data()?.courses.find((course) => course.id === courseId);
  }

  getListData() {
    this.studentsService.getAllWithCourses().subscribe((response) => {
      this.data.set(response.data);
    });
  }

  getCourses() {
    return this.coursesService.getAll().subscribe((response) => {
      this.courses.set(response.data);
    });
  }
  linkWithCourse(courseId: number) {
    this.studentsService.linkWithCourse(courseId).subscribe((response) => {
      this.data.set(response.data);
    });
  }
  unlinkWithCourse(courseId: number) {
    this.studentsService.unlinkWithCourse(courseId).subscribe((response) => {
      this.data.set(response.data);
    });
  }
  toggleActive(course: { id: number; active: boolean }) {
    this.coursesService
      .toggleActive(course)
      .pipe(delay(500))
      .subscribe(() => {
        if (course) {
          this.courses.update((courses) => {
            if (courses) {
              return courses.map((c) => {
                if (c.id === course.id) {
                  return { ...c, active: !c.active };
                }
                return c;
              });
            }
            return courses;
          });
          this.getListData();
        }
      });
  }

  onSubmit() {
    const method = this.courseId() ? 'update' : 'create';
    this.coursesService[method]({
      id: this.courseId(),
      name: this.name.value,
    } as Course).subscribe((response) => {
      if (response.data) {
        this.courses.update((courses) => {
          if (courses.find((course) => course.id === response.data.id)) {
            return courses.map((course) => {
              if (course.id === response.data.id) {
                return response.data;
              }
              return course;
            });
          }
          return [...courses, response.data];
        });
      }
      this.name.reset();
    });
  }
}
