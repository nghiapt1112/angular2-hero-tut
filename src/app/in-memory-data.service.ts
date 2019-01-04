import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      { id: 1, name: 'Mr. Nghia1' , email: 'email1@gmail.com', address: '---', phoneNo: '---'},
      { id: 2, name: 'Mr. User1' , email: 'email1@gmail.com', address: 'No 11. 19 Trung Kinh, Ha Noi, VN', phoneNo: '0123456789'},
      { id: 3, name: 'Mr. Thao ' , email: 'email1@gmail.com', address: 'No 11. 19 Trung Kinh, Ha Noi, VN', phoneNo: '0123456789'},
      { id: 4, name: 'Mr. User2' , email: 'email1@gmail.com', address: 'No 11. 19 Trung Kinh, Ha Noi, VN', phoneNo: '0123456789'},
      { id: 5, name: 'Mr. User3' , email: 'email1@gmail.com', address: 'No 11. 19 Trung Kinh, Ha Noi, VN', phoneNo: '0123456789'},
      { id: 6, name: 'Mr. User4' , email: 'email1@gmail.com', address: 'No 11. 19 Trung Kinh, Ha Noi, VN', phoneNo: '0123456789'},
      { id: 7, name: 'Mr. User5' , email: 'email1@gmail.com', address: 'No 11. 19 Trung Kinh, Ha Noi, VN', phoneNo: '0123456789'},
      { id: 8, name: 'Mr. User6' , email: 'email1@gmail.com', address: 'No 11. 19 Trung Kinh, Ha Noi, VN', phoneNo: '0123456789'},
      { id: 9, name: 'Mr. User7' , email: 'email1@gmail.com', address: 'No 11. 19 Trung Kinh, Ha Noi, VN', phoneNo: '0123456789'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
