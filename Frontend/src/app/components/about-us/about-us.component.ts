import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  @ViewChild('enquireRef') enquireRef!: TemplateRef<any>;
  modalRef?: BsModalRef;
  enqueryModal!: any;
  constructor(private modalService: BsModalService) {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  enquire() {
    this.enqueryModal = this.modalService.show(this.enquireRef, {
      class: 'modal-md modal-dialog-centered',
      ignoreBackdropClick: true,
      keyboard: true,
    });
  }
  downloadCertificate() {
    const link = document.createElement('a');
    link.href = 'assets/rera-certificate.jpg'; // Path to the certificate image
    link.download = 'RERA-Certificate.jpg'; // File name for the download
    link.click(); // Programmatically click the link to trigger the download
    this.modalRef?.hide(); // Close the modal after download
  }

  close(a: boolean) {
    if (a) {
      this.enqueryModal.hide();
      this.downloadCertificate();
    } else {
      this.enqueryModal.hide();
    }
  }
}
