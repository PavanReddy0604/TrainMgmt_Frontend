import { Component, OnInit } from '@angular/core';
import { TrainService } from '../../core/services/train.service.service';
import { Train } from '../../train';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css']
})
export class TrainListComponent implements OnInit {

  trains: Train[] = [];

  constructor(private trainService: TrainService, private router: Router) { }

  ngOnInit(): void {
    this.loadTrains();
  }

  loadTrains(): void {
    this.trainService.getTrains().subscribe(
      data => this.trains = data,
      error => console.error(error)
    );
  }

  deleteTrain(id: number): void {
    this.trainService.deleteTrain(id).subscribe(
      () => this.loadTrains(),
      error => console.error(error)
    );
  }

  editTrain(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  addTrain(): void {
    this.router.navigate(['/add']);
  }
}
