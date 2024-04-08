import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse, Course } from '../../../../../interfaces/api.interfaces';
import { environment } from '../../../../environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<ApiResponse<Course[]>>(
      `${environment.apiUrl}/course`
    );
  }

  toggleActive(course: { id: number; active: boolean }) {
    return this.httpClient.patch(`${environment.apiUrl}/course`, {
      id: course.id,
      active: !course.active,
    });
  }
  create(course: Course) {
    return this.httpClient.post<ApiResponse<Course>>(
      `${environment.apiUrl}/course`,
      {
        name: course.name,
      }
    );
  }

  delete(courseId: number) {
    return this.httpClient.delete(`${environment.apiUrl}/course/${courseId}`);
  }
  update(course: Course) {
    return this.httpClient.put<ApiResponse<Course>>(
      `${environment.apiUrl}/course`,
      course
    );
  }
}
