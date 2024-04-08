import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  ApiResponse,
  Course,
  Student,
} from '../../../../../interfaces/api.interfaces';
import { environment } from '../../../../environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private readonly httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<ApiResponse<Student[]>>(
      `${environment.apiUrl}/student`
    );
  }
  getAllWithCourses() {
    return this.httpClient.get<ApiResponse<Student>>(
      `${environment.apiUrl}/student/with-courses`
    );
  }
  linkWithCourse(courseId: number) {
    return this.httpClient.post<ApiResponse<Student>>(
      `${environment.apiUrl}/student/link-with-course`,
      { courseId }
    );
  }
  unlinkWithCourse(courseId: number) {
    return this.httpClient.patch<ApiResponse<Student>>(
      `${environment.apiUrl}/student/unlink-with-course`,
      { courseId }
    );
  }
  toggleActive(course: { id: number; active: boolean }) {
    return this.httpClient.patch<ApiResponse<Student>>(
      `${environment.apiUrl}/student`,
      {
        id: course.id,
        active: !course.active,
      }
    );
  }
  create(course: Course) {
    return this.httpClient.post(`${environment.apiUrl}/student`, {
      name: course.name,
    });
  }

  delete(courseId: number) {
    return this.httpClient.delete(`${environment.apiUrl}/student/${courseId}`);
  }
  update(course: Course) {
    return this.httpClient.put(
      `${environment.apiUrl}/student/${course.id}`,
      course
    );
  }
}
