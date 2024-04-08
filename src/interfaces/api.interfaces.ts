export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export interface Student {
  id: number;
  name: string;
  username: string;
  active: boolean;
  courses: Course[];
}

export interface Course {
  id: number;
  name: string;
  active: boolean;
}
