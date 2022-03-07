import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Pageable } from 'src/app/core/common/services/common-pageable';
import { ComponentloaderDirective } from 'src/app/core/directives/componentloader.directive';
import { TableColumnSetting } from '../models/table-column-setting.model';
import { TableFormatterService } from '../services/table-formatter.service';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit, OnChanges {
  
  @ViewChild(ComponentloaderDirective, {static: false}) componentloader!: ComponentloaderDirective;

  @Input() actionComponentLoader: any;
  
  @Input() responseJSONArray: any[] = Array<any | []>(); // send response array details

  keys: string[] = Array<string>(); // store response keys

  @Input() setHeaderJSON: TableColumnSetting[] = Array<TableColumnSetting>();

  columnMapsBasedOnKey: TableColumnSetting[] = Array<TableColumnSetting>();

  @Input() isContainsActionColumns: boolean = false;

  @Input() pageable: Pageable = new Pageable(); // get pageable model details

  // @Output() changePage = new EventEmitter();

  page: number = 1; // initial page number

  @Output() changePageNumber = new EventEmitter(); // trigger event to change page number

  @Input() dataTableTitle?: string; // title of data table

  constructor(
    private tableFormatterService: TableFormatterService,
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    // to change any type of responseJSONArray into flat responseJSONArray
    this.responseJSONArray = this.responseJSONArray?.map(value => {
      return value = this.tableFormatterService.convertToFlatPropertyMap(value);
    });

    // this.keys = Object.keys(this.responseJSONArray[0]);
    if (this.setHeaderJSON) {
      // when setHeaderJSON provided
      this.columnMapsBasedOnKey = this.setHeaderJSON;
    } else {
      // no setHeaderJSON, create column maps with defaults
      this.columnMapsBasedOnKey = Object.keys(this.responseJSONArray[0]).map((key) => {
        return {
          primaryKey: key,
          header:
            key.slice(0, 1).toUpperCase() + key.replace(/_/g, ' ').slice(1),
          format: 'default',
        };
      });
    }
  }

  /**
   *
   * @author Paribartan Kalathoki
   * Created On:- Mar 04, 2022
   * @param status
   * @returns className based on status
   *
   */
  getStatus(status: string): string {
    let className: string = '';
    switch (status) {
      case 'Complete':
        className = 'badge badge-success';
        break;
      case 'Fixed':
        className = 'badge badge-info';
        break;
      case 'Progress':
        className = 'badge badge-warning';
        break;
      case 'Pending':
        className = 'badge badge-danger';
        break;
    }
    return className;
  }

  /**
   *  Change Page for pagination
   * @param page Page number
   */
  onChangePage(page: number) {
    this.page = page;
    this.changePageNumber.emit(this.page);
  }
}
