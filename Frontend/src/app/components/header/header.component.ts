import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EnquireNowComponent } from '../enquire-now/enquire-now.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('enquireRef') enquireRef!: TemplateRef<EnquireNowComponent>;
  enqueryModal!: BsModalRef<unknown>;
  constructor(private modalService: BsModalService) {}
  enquire() {
    this.enqueryModal = this.modalService.show(this.enquireRef, {
      class: 'modal-md modal-dialog-centered',
      ignoreBackdropClick: true,
      keyboard: true,
    });
  }

  close(a: boolean) {
    console.log(a);
    this.enqueryModal.hide();
  }
}
