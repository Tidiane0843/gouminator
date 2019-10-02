import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormatGouminPipe } from './format-goumin.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        FormatGouminPipe
      ],
    }).compileComponents();
  }));

  it('should calculate the volume', () => {
    const app = new AppComponent();
    let radius;
    
    radius = 2;
    expect(app.calcVolume(radius)).toBe(4/3 * Math.PI * Math.pow(radius, 3), `radius ${radius}`);
    
    radius = 5;
    expect(app.calcVolume(radius)).toBe(4/3 * Math.PI * Math.pow(radius, 3), `radius ${radius}`);

    radius = 55;
    expect(app.calcVolume(radius)).toBe(4/3 * Math.PI * Math.pow(radius, 3), `radius ${radius}`);

  });

});
