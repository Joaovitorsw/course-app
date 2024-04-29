import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { anything, instance, mock, when } from 'ts-mockito';
import { StudentsService } from '../../services/students/students.service';
import { StudentsComponent } from './students.component';
fdescribe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async () => {
    const httpClient = mock(HttpClient);

    when(httpClient.get(anything())).thenReturn(
      of({
        data: [{ id: 1 }, { id: 2 }],
      }) as any
    );
    when(httpClient.post(anything(), anything())).thenReturn(
      of({
        data: { id: 1 },
      }) as any
    );

    await TestBed.configureTestingModule({
      imports: [StudentsComponent],
      providers: [
        StudentsService,
        {
          provide: HttpClient,
          useValue: instance(httpClient),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const service = TestBed.inject(StudentsService);
    service.create({} as any).subscribe((response: any) => {
      expect(response.data.id).toBe(1);
    });
    service.getAll().subscribe((response) => {
      expect(response.data.length).toBe(2);
    });
    expect(component).toBeTruthy();
  });
});
