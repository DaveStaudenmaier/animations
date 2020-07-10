import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @Input() displayName: string;
  @Input() profileImageUrl: string;
  @Output() post = new EventEmitter();

  form: FormGroup;
  readyForPost = false;

  constructor(fb: FormBuilder) {
              this.form = fb.group ({
                post: new FormControl('', Validators.required)
              });
   }

  ngOnInit(): void {
  }

  onPost() {
    this.post.emit(this.form.controls.post.value);
  }

  onCancel() {
    this.post.emit('cancel');
  }
}
