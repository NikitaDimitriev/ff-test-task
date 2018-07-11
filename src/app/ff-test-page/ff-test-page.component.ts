import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/ff-test-page/shared/api.service';


@Component({
  selector: 'app-ff-test-page',
  templateUrl: './ff-test-page.component.html',
  styleUrls: ['./ff-test-page.component.scss']
})
export class FfTestPageComponent implements OnInit {
  public search: string;
  public jokes: Array<object>;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  findJokes(){
    this.apiService.findJokes(this.search).subscribe(
      (data) => {
        this.jokes = data.result;
      }
    )
  }

}
