import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
    )
  }

  loadById(id: String){
    return this.httpClient.get<Course>(`${this.API}/${id}`)
  }

  save(record: Partial<Course>){
    if(record._id){
      return this.update(record)
    }
    return this.create(record)
  }

  create(record: Partial<Course>){
    return this.httpClient.post<Course>(this.API, record).pipe(first())
  }

  update(record: Partial<Course>){
    return this.httpClient.put<Course>(`${this.API}/${record._id}`, record).pipe(first())
  }

  delete(id: String){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first())
  }
}
