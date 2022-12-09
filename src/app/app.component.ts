import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  greeting = 'to this login page';
  createDate = Date()
  constructor(private httpClient: HttpClient) { }
  ngOnInit(){
    // this.fetchdata()
  }
  loginuserform = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  })
  userlogin() {
    let messageData = { username: this.loginuserform.get('username')?.value, password: this.loginuserform.get('password')?.value }
    this.httpClient.post('https://angular-backend-6947d-default-rtdb.firebaseio.com/messages.json', messageData).subscribe((e:any)=>{
      console.log(e)
    })
    this.loginuserform.reset()
  }
  fetchdata(){
    
    this.httpClient.get('https://angular-backend-6947d-default-rtdb.firebaseio.com/messages.json').subscribe((e:any)=>{
      console.log(e)
    })
  }
}
