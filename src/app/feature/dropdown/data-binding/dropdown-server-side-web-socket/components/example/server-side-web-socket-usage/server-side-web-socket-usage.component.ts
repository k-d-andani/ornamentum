import { Component, OnDestroy, OnInit } from '@angular/core';

import {
  GlobalRefService,
  DropdownWebsocketDataFetchService,
  DropdownDataBindCallback
} from 'ornamentum';

import { ExampleData } from 'helper-models';

import { DataFetchService } from 'helper-services';

/**
 * Server side web socket data binding example component.
 */
@Component({
  selector: 'app-server-side-web-socket-usage',
  templateUrl: './server-side-web-socket-usage.component.html'
})
export class ServerSideWebSocketUsageComponent implements OnInit, OnDestroy {
  public onDataBind: DropdownDataBindCallback;

  constructor(private dataFetchService: DataFetchService,
              private globalRefService: GlobalRefService,
              private dataTableWebSocketDataFetchService: DropdownWebsocketDataFetchService<ExampleData>) {
  }

  /**
   * Component initialize lifecycle event handler.
   */
  public ngOnInit(): void {
    // Create web-socket connection on browser environment only to support server side rendering.
    if (this.globalRefService.isBrowser) {
      this.dataTableWebSocketDataFetchService.init({
        url: `wss://${window.location.hostname}` // web-socket endpoint
      });

      this.onDataBind = this.dataTableWebSocketDataFetchService.onDataBind();
    }
  }

  /**
   * Component destroy lifecycle event handler.
   */
  public ngOnDestroy(): void {
    this.dataTableWebSocketDataFetchService.dispose();
  }
}