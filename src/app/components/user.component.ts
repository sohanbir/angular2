import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service'


@Component({
  moduleId :module.id;
  selector: 'user',
  templateUrl: 'user.component.html',
  providers:[PostsService]
})
export class UserComponent  {
  name:string;
  email:string
  address: address;
  hobbies: string[];
  showHobbies: boolean;


  constructor(private postsService :PostsService){
    this.name = 'Sohan Bir';
    this.email ='sohanbir@gmail.com'
    this.address= {
      street:'803 Dutta mandir road',
      city:'Pune',
      state:'Maharastra'
                    }
    this.hobbies =['Paragliding','Movies','Music'];
    this.showHobbies =false;
    this.postsService. getPost().subscribe(posts => {
      this.posts =posts;
    });
                  }
    toggleHobbies(){
      if(this.showHobbies == true){
          this.showHobbies = false;
            }
        else {
              this.showHobbies =true;
              }
        }
        addHobby(hobby){
          this.hobbies.push(hobby);
          }
          deleteHobby(i){
            this.hobbies.splice(i,1);
            }
      }
interface address{
  street : string;
  city :string;
  state :string;
}
interface Post{
  id : number;
  title :string;
  body :string;
}
