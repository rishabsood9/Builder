import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Query } from 'src/app/models/query';
import { QueryService } from 'src/app/services/query/query.service';

@Component({
  selector: 'app-enquire-now',
  templateUrl: './enquire-now.component.html',
  styleUrls: ['./enquire-now.component.css'],
})
export class EnquireNowComponent implements OnInit {
  constructor(
    private queryService: QueryService,
    private modalService: BsModalService
  ) {}
  enquiryForm!: FormGroup;
  queryData!: Query;
  @Output() event = new EventEmitter<boolean>();

  onSubmit(responseMessage: TemplateRef<any>) {
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched(); // Trigger all validation messages
    } else {
      console.log(this.enquiryForm.value);
      this.queryService.addQuery(this.enquiryForm.value).subscribe((a) => {
        if (a.success) {
          this.event.emit(true);
          const modal = this.modalService.show(responseMessage, {
            class: 'modal-lg',
            ignoreBackdropClick: true,
            keyboard: true,
          });
          setTimeout(() => {
            modal.hide();
          }, 2000);
        }
      });
    }
  }

  ngOnInit(): void {
    this.enquiryForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'), // Regex to ensure exactly 10 digits
      ]),
    });
  }
}
