import { Component } from '@angular/core';

import { DataTableExampleDataModel } from '../../../../../../shared/models';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-pagination-without-limit-usage',
  templateUrl: './pagination-without-limit-usage.component.html'
})
export class PaginationWithoutLimitUsageComponent {
  public items: DataTableExampleDataModel[];

  constructor(private dataFetchService: DataFetchService) {
    this.items = this.dataFetchService.fetchData();
  }
}
