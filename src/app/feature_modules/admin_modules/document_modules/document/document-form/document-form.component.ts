import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {EnumUtils} from "../../model/enums.utils";
import {DocumentCheckType} from "../../enum/document-check-type.enum";
import {Action} from "../../model/Action";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalResponse} from "../../model/ModalResponse";
import {Alert, AlertType} from "../../../../../core/common/models/Alert";

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.scss']
})
export class DocumentFormComponent implements OnInit {

  @Input() model: Document | undefined;
  @Input() action: Action = Action.ADD;

  modelForm : FormGroup = new FormGroup({});
  //DocumentCheckTypeEnum = EnumUtils.keys(DocumentCheckType);

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
  ) { }

  get name() {
    return this.modelForm.get('name');
  }

  ngOnInit(): void {

   this.modelForm = this.formBuilder.group({
      id: [undefined],
      name: new FormControl(undefined),
      checkType: new FormControl(undefined),
      containsTemplate: new FormControl(undefined),
    })
  }

  onSubmit() {
    /*this.model.displayName = this.modelForm.get('name').value;
    this.model.checkType = this.modelForm.get('checkType').value;
    this.model.containsTemplate = this.modelForm.get('containsTemplate').value;
    this.service.save(this.model).subscribe((response) => {
        if (this.model.id == null) {
          this.toastService.show(new Alert(AlertType.SUCCESS, 'Successfully Saved Document!'));
          this.model = new Document();
          this.activeModal.close(ModalResponse.SUCCESS);
        } else {
          this.toastService.show(new Alert(AlertType.SUCCESS, 'Successfully Updated Document!'));
          this.model = new Document();
          this.activeModal.close(ModalResponse.SUCCESS);
        }
      }, error => {
        console.log(error);
        this.activeModal.dismiss(error);
      }
    );*/
  }

  dismiss(): void {
    this.activeModal.dismiss(ModalResponse.CANCEL);
  }

}
