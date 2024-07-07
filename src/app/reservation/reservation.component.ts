import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-reservation',
    templateUrl: './reservation.component.html',
    styleUrls: ['./reservation.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule]
})
export class ReservationComponent {
    reservations: any[] = [];
    selectedDate: string = '';
    selectedTime: string = '';
    userName: string = '';
    message: string = '';

    availableTimes: string[] = ['09:00','10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00'];

    reserveTime(time: string) {
        if (this.isTimeReserved(this.selectedDate, time)) {
            this.message = `Spot at ${time} on ${this.selectedDate} is already taken. Please choose another time.`;
        } else {
            this.reservations.push({
                date: this.selectedDate,
                time: time,
                reservedBy: 'User'
            });
            this.message = `Spot at ${time} on ${this.selectedDate} by ${this.userName}successfully reserved.`;
        }
    }

    isTimeReserved(date: string, time: string): boolean {
        return this.reservations.some(
            (reservation) =>
                reservation.date === date && reservation.time === time
        );
    }

    selectDate(date: string) {
        this.selectedDate = date;
        this.message = '';
    }
}