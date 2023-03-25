import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
    products=[
      {id:1, name:'watch',price:109,color:'black',available:'available',image:'/assets/image/1.jpeg'},    
      {id:2, name:'watch',price:109,color:'black',available:'available',image:'/assets/image/1.jpeg'},
      {id:3, name:'watch',price:109,color:'black',available:'available',image:'/assets/image/1.jpeg'},
      {id:4, name:'watch',price:109,color:'black',available:'available',image:'/assets/image/1.jpeg'},
      {id:5, name:'watch',price:109,color:'black',available:'available',image:'/assets/image/1.jpeg'},

      ] 
    
  }

