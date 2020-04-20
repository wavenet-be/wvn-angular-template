import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '@wavenet/ngx-wvn-core';

@Component({
  selector: 'app-first-feature',
  templateUrl: './first-feature.component.html',
  styleUrls: ['./first-feature.component.scss']
})
export class FirstFeatureComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }
}
