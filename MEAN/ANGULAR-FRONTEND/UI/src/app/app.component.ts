import { Component } from '@angular/core';
import { ServicesService } from './service/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UI';
  public data;
  constructor(private service:ServicesService){
    this.service.getPosts().subscribe(posts => {
      //console.log(posts);
      this.data = posts;
});
  }
}
