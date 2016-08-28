import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Http } from '@angular/http';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { APP_PROVIDERS } from './app.providers';

// templateUrl example
import { Home } from './home';
//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly

@Directive({
  selector: '[x-large]'
})
export class XLarge {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}

/////////////////////////
// ** Example Components
@Component({
  selector: 'about',
  template: `
    <div>This is the "About" page</div>
  `
})
export class About { }

/////////////////////////
// ** MAIN APP COMPONENT **
@Component({
  selector: 'app', // <app></app>
  directives: [
    ...ROUTER_DIRECTIVES,
    XLarge,
    NavigationComponent,
    FooterComponent
  ],
  providers: [ APP_PROVIDERS ],
  styles: [`
  `],
  template: `
  <h3 id="universal">Angular2 Universal</h3>
    <navigation></navigation>
      <strong>Router-outlet:</strong>
      <main>
        <router-outlet></router-outlet>
      </main>
      <footer></footer>
  `
})
export class App {
  title: string = 'ftw';
  data = {};
  server: string;

  constructor(public http: Http) { }

  ngOnInit() {
    // limit the use of setTimeouts
    setTimeout(() => {
      this.server = 'This was rendered from the server!';
    }, 10);

    // use services for http calls
    this.http.get('/data.json')
      .subscribe(res => {
        this.data = res.json();
      });
  }

}
