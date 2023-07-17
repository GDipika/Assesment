import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userModel } from './form.model';
import { ApiService } from 'src/app/shared/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  protected userForm: FormGroup;
  protected listData: never[];
  protected popUp!: boolean;
  protected userModelObj: userModel = new userModel();
  protected userData: any;
  protected updateButton!: boolean;
  protected addButton!: boolean;
  protected res: any;
  protected isLoading: boolean = true;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.listData = [];
    this.userForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          Validators.pattern('.*\\S.*[a-zA-z0-9 ]'),
        ],
      ],
      address: ['', Validators.required],
      contactNo: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });
  }

  addItem() {
    if (this.userForm.valid) {
      this.userModelObj.name = this.userForm.value.name;
      this.userModelObj.address = this.userForm.value.address;
      this.userModelObj.contactNo = this.userForm.value.contactNo;
      this.userModelObj.email = this.userForm.value.email;

      this.api.postUser(this.userModelObj).subscribe(
        (res: any) => {
          window.alert('ADDED SUCCEFULLY');
          var ref = document.getElementById('close');
          ref?.click();
          this.userForm.reset();
          this.popUp = false;
          this.getUser();
        },
        (err: any) => {
          window.alert('SOMETHING WENT WRONG');
        }
      );
    } else {
      window.alert('Please Update all Input Fields');
    }
  }
  getUser() {
    this.api.getUser().subscribe({
      next: (res) => {
        this.isLoading = true;
        this.userData = res;
      },
      complete: () => {
        this.isLoading = false;
      },
      error: (err) => {
        if (err.status === 0) {
          window.alert('Please run db.json');
        }
        if (err.status === 400) {
          window.alert('Bad request 400');
        }
      },
    });
  }
  close() {
    this.userForm.reset();
    this.getUser();
  }
  editItem(item: any, i: any) {
    console.log(item, 'item.name:', item.name);
    item.isEdit = true;
    this.updateButton = true;
    this.addButton = false;
    let ref = document.getElementById('form');
    console.log(ref);
    ref?.click();
    this.userForm.controls['name'].setValue(item.name);
    this.userForm.controls['address'].setValue(item.address);
    this.userForm.controls['email'].setValue(item.email);
    this.userForm.controls['contactNo'].setValue(item.contactNo);
  }
  reset() {
    this.userForm.reset();
  }

  removeItem(item: any) {
    console.log(item, item.id);
    this.api.deleteUser(item.id).subscribe((res: any) => {
      console.log(res);
      window.alert('User Removed From The List');
      this.getUser();
    });
  }

  updateItem() {
    if (this.userForm.valid) {
      this.userModelObj.name = this.userForm.value.name;
      this.userModelObj.address = this.userForm.value.address;
      this.userModelObj.contactNo = this.userForm.value.contactNo;
      this.userModelObj.email = this.userForm.value.email.subscribe(
        (res: any) => {
          window.alert('UPDATED SUCCESSFULLY');
          var ref = document.getElementById('close');
          ref?.click();
          this.userForm.reset();
          this.getUser();
        }
      );
    } else {
      window.alert('Please Update All the Inputs');
    }
  }
  ngOnInit(): void {
    this.getUser();

  }
}
