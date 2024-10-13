import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testimonial-modal',
  templateUrl: './testimonial-modal.component.html',
  styleUrls: ['./testimonial-modal.component.css'],
})
export class TestimonialModalComponent {
  testimonialForm: FormGroup;

  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.testimonialForm = this.fb.group({
      name: ['', [Validators.required]],
      comments: ['', [Validators.required, Validators.minLength(30)]],
      rating: [5, [Validators.required]],
      image: [null],
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.testimonialForm.patchValue({ image: file });
    }
  }

  onSubmit() {
    if (this.testimonialForm.valid) {
      const formData = new FormData();
      formData.append('name', this.testimonialForm.value.name);
      formData.append('comments', this.testimonialForm.value.comments);
      formData.append('rating', this.testimonialForm.value.rating.toString());
      formData.append('image', this.testimonialForm.value.image);

      this.submit.emit(formData);
      this.close.emit();
    }
  }
}
