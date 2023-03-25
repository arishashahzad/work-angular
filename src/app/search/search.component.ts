import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
constructor(){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  

}

searchvalue:string='';
changeSearchValue(eventData:Event){
  console.log((<HTMLInputElement>eventData.target).value);
  this.searchvalue=(<HTMLInputElement>eventData.target).value;
}
}
