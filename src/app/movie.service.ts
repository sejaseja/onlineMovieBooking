import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../assets/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private bookingInfo: any;

  constructor() { }

  saveBookingInfo(bookingInfo: any) {
    this.bookingInfo = bookingInfo;
  }

  getBookingInfo() {
    return this.bookingInfo;
  }
}
