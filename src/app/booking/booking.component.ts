import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service'; 

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingForm: FormGroup;
  ticketCount: number = 0; 
  ticketPrice: number = 10;
  userAge: number = 20; 

  constructor(private fb: FormBuilder, private router: Router, private movieService: MovieService) {
    this.bookingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      movie: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(20)]],
      gender: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      tickets: [0, [Validators.required, Validators.min(0)]], 
      totalAmount: [''] 
    });
  }

  decrementTickets() {
    if (this.ticketCount > 0) {
      this.ticketCount--;
      this.bookingForm.patchValue({ tickets: this.ticketCount }); 
    }
  }

  incrementTickets() {
    this.ticketCount++;
    this.bookingForm.patchValue({ tickets: this.ticketCount }); 
  }

  calculateTotalAmount(): number {
    return this.ticketCount * this.ticketPrice;
  }

  submitForm() {
    if (this.bookingForm.valid) {
      this.bookingForm.patchValue({ totalAmount: this.calculateTotalAmount() }); 
      this.movieService.saveBookingInfo(this.bookingForm.value); 
      this.router.navigate(['/confirmation']);
    } else {
      
    }
  } 
}
