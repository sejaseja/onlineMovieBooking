import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service'; 

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  bookingDetails: any; 

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
    this.bookingDetails = this.movieService.getBookingInfo();
  }

  goBack() {
    this.router.navigate(['/booking']);
  }
}
