import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgModel } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  constructor(public router:Router, public authService:AuthService) { }

  //console.log(this.router);

  goToCheckout():void{
    this.router.navigate(['/checkout'])
  }

}
