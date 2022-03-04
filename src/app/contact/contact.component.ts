import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import { FeedbackService } from '../services/feedback.service';

import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block;',
  },
  animations: [flyInOut()],
})
export class ContactComponent implements OnInit {
  [x: string]: any;

  feedbackForm!: FormGroup;
  feedback: Feedback | any;
  contactType = ContactType;
  submitted: any = null; // adjusted; added type any
  showForm = true;
  @ViewChild('fform') feedbackFormDirective!: NgForm; //allows you to get access to the template form and completely reset it
  //allows you to get access to the template form and completely reset it

  formErrors: any = {
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
  };

  validationMessages: any = {
    firstname: {
      required: 'First name is required.',
      minlength: 'First name must be at least two characters long',
      maxlength: 'First name cannot be more than 20characters',
    },

    lastname: {
      required: 'Last name is required.',
      minlength: 'Last name must be at least two characters long',
      maxlength: 'First name cannot be more than 20characters',
    },

    telnum: {
      required: 'Telephone number is required.',
      pattern: 'Telephone number must contain only numbers',
    },

    email: {
      required: 'Email is required.',
      email: 'Email is not in valid format',
    },
  };

  constructor(
    private fb: FormBuilder,
    private feedbackservice: FeedbackService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      telnum: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: '',
    });

    this.feedbackForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged(); //set, reset form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) {
      return;
    }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.showForm = false;
    this.feedbackservice.submitFeedback(this.feedback).subscribe(
      (feedback: any) => {
        this.submitted = feedback;
        this.feedback = null;
        setTimeout(() => {
          this.submitted = null;
          this.showForm = true;
        }, 5000);
      },
      (error: { status: any; message: any }) =>
        console.log(error.status, error.message)
    );
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: '',
    });
    this.feedbackFormDirective.resetForm(); //this ensures that your feedback form is completely reset to its pristine value
  }
}
