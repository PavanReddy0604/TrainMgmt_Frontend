import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Train } from '../../train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  private baseUrl = 'http://localhost:8080/train';

  constructor(private http: HttpClient) { }

  getTrains(): Observable<Train[]> {
    return this.http.get<Train[]>(`${this.baseUrl}/`);
  }

  getTrainById(id: number): Observable<Train> {
    return this.http.get<Train>(`${this.baseUrl}/${id}`);
  }

  addTrain(train: Train): Observable<Train> {
    return this.http.post<Train>(this.baseUrl, train);
  }

  updateTrain(id: number, train: Train): Observable<Train> {
    return this.http.put<Train>(`${this.baseUrl}?id=${id}`, train);
  }

  deleteTrain(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
