import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit {
  minDate: string = '';

  formData = {
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2'
  };

  ngOnInit() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    this.minDate = `${yyyy}-${mm}-${dd}`;
    this.formData.date = this.minDate;
  }

  onSubmit() {
    alert(`Thank you, ${this.formData.name}! Your table for ${this.formData.guests} guests on ${this.formData.date} at ${this.formData.time} has been requested.\n\nYou will receive a confirmation SMS shortly.`);
    // Reset defaults
    this.formData.name = '';
    this.formData.phone = '';
    this.formData.time = '19:30';
    this.formData.guests = '2';
    this.formData.date = this.minDate;
  }
}
