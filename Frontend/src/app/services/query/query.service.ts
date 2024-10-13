import { HttpClient } from '@angular/common/http';
import { Injectable, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { MessageComponent } from 'src/app/components/message/message.component';
import { Query, Response } from 'src/app/models/query';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private http: HttpClient, private modalService: BsModalService) {}
  addQuery(data: Query): Observable<Response> {
    return this.http.post<Response>('http://localhost:3000/query/add', data);
  }

  sendMail(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/query/send-email', data);
  }

  showMessage(responseMessageTemplateRef: TemplateRef<MessageComponent>,timer:number) {
    const modal = this.modalService.show(responseMessageTemplateRef, {
      class: 'modal-md',
      backdrop : 'static',
      ignoreBackdropClick: false,
      keyboard: false,
    });
    setTimeout(() => {
      modal.hide();
    }, timer);
  }
}
