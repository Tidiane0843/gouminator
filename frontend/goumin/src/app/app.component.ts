import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Goumin } from 'src/models/goumin.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'goumin';

  myCache: Goumin[] = [];
  rayon: string;
  volume: number;
  displayResp = false;

  goumForm: FormGroup;

  ngOnInit() {
    this.goumForm = new FormGroup({
      'radius': new FormControl(null, [Validators.required, this.numberValue.bind(this), Validators.max(100)])
    });

  }

  onSubmit() {
    let radius = this.goumForm.value.radius;
    // first check in cache
    const cache = this.check_in_cache(radius);
    if (cache === undefined) {
      this.volume = this.calcVolume(radius);
      //save in cache
      const newGoumin = new Goumin(radius, this.volume);
      this.save_in_cache(newGoumin);
    }

    else {
      console.log("find in cache");
      this.volume = cache.volume;
    }
    this.displayResp = true;
  }


  // Validators
  numberValue(control: FormControl): {[s:string]: boolean} {
    let reg = /[^0-9]/;
    if (reg.test(control.value)) {
      return {'valueNotNumber' : true};
    }
  }

  save_in_cache(goum: Goumin) {
    this.myCache.push(goum);
  }

  check_in_cache(radius) {
    let foundGoumin = this.myCache.find(
        (el) => {
          return el.radius == radius;
        }
    );
    return foundGoumin;
  }

  calcVolume(r) {
    return 4/3 * Math.PI * Math.pow(r,3);
  }
}
