import Navigo from 'navigo';
import { html } from 'lit-element';

import "views/view-homepage";


export class Router {
  constructor() {
    this.view = null;
    this.router = this._createRoutingTable();
  }

  _createRoutingTable() {
    let router = new Navigo('/', true, '#!');
    router
      .on('')
      .on('*', () => this.view = html`<view-homepage />`)

    router.resolve();

    return router;
  }

  _navigate(route='/') {
    this.router.navigate(route);
    this.history.push(route);
    return this.result;
  }

  render() {
    return this.view;
  }
}