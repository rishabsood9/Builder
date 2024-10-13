import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { QueryService } from 'src/app/services/query/query.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  @ViewChild('responseMessage')
  responseMessageTemplateRef!: TemplateRef<MessageComponent>;
  message = '';
  copyNumber() {
    const phoneNumber = '+91-9999999999';
    navigator.clipboard.writeText(phoneNumber).then(() => {
      this.message = 'Phone number copied to clipboard!';
      this.queryService.showMessage(this.responseMessageTemplateRef, 1000);
    });
  }
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private queryService: QueryService,
    private modalService: BsModalService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      debugger;
      this.contactForm.markAllAsTouched();
    } else {
      this.queryService.sendMail(this.contactForm.value).subscribe((a) => {
        this.contactForm.reset();
        this.message = 'Email Send! Will connect with you Soon:)';
        this.queryService.showMessage(this.responseMessageTemplateRef, 2000);
      });
    }
  }
}
