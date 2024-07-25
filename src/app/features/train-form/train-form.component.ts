import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainService } from '../../core/services/train.service.service';
import { Train } from '../../train';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-train-form',
  templateUrl: './train-form.component.html',
  styleUrls: ['./train-form.component.css']
})
export class TrainFormComponent implements OnInit {

  trainForm: FormGroup;
  trainId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private trainService: TrainService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.trainForm = this.fb.group({
      trainNumber: ['', Validators.required],
      trainName: ['', Validators.required],
      trainArrivalTime: ['', Validators.required],
      trainDepartureTime: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.trainId = +id;
        this.trainService.getTrainById(this.trainId).subscribe(
          data => this.trainForm.patchValue(data),
          error => console.error(error)
        );
      }
    });
  }

  onSubmit(): void {
    if (this.trainForm.valid) {
      if (this.trainId) {
        this.trainService.updateTrain(this.trainId, this.trainForm.value).subscribe(
          () => this.router.navigate(['/']),
          error => console.error(error)
        );
      } else {
        this.trainService.addTrain(this.trainForm.value).subscribe(
          () => this.router.navigate(['/']),
          error => console.error(error)
        );
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
