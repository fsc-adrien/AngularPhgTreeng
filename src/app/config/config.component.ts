import {Component} from '@angular/core';
import {Config, ConfigService} from './config.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ConfigService],
  styles: ['.error {color: red;}']
})
export class ConfigComponent {
  error: any;
  headers: { key: string; value: string; };
  config: { textfile: string; heroesUrl: string };
  public headers2 = [];
  constructor(private configService: ConfigService) {
  }

  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = undefined;
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe(
        (data: Config) => {
          return this.config = {...data};
        }, // success path
        error => this.error = error // error path
      );
  }

  showConfig_v1() {
    this.configService.getConfig_1()
      .subscribe((data: Config) => {
        return this.config = {
          heroesUrl: data.heroesUrl,
          textfile: data.textfile
        };
      });
  }

  showConfig_v2() {
    this.configService.getConfig()
    // clone the data object, using its known Config shape
      .subscribe((data: Config) => {
        // @ts-ignore
        return this.config = {...data};
      });
  }

  // showConfigResponse() {
  //   this.configService.getConfigResponse()
  //     // resp is of type `HttpResponse<Config>`
  //     .subscribe(resp => {
  //       // display its headers
  //       const keys = resp.headers.keys();
  //       this.headers = keys.map(key =>
  //         `${key}: ${resp.headers.get(key)}`);
  //
  //       // access the body directly, which is typed as `Config`.
  //       // @ts-ignore
  //       this.config = { ... resp.body };
  //     });
  // }
  showConfigResponseCustom() {

    this.configService.getConfigResponse()
    // resp is of type `HttpResponse<Config>`
      .subscribe((resp) => {
        // tslint:disable-next-line:prefer-const
        for (let [key, value] of Object.entries(resp.body)) {
          // console.log(`${key}`, ':', `${value}`);
          // @ts-ignore
          let key2 = `${key}`;
          // @ts-ignore
          let value2 = `${value}`;
          var tempObj = {key: key2, value: value2};
          //
          // this.headers2 = Object.assign(tempObj);
          // this.headers2 = Object.assign({}, tempObj);
          this.headers2.push(tempObj);
        }
        console.log(this.headers2);

      });
  }

  makeError() {
    this.configService.makeIntentionalError().subscribe(null, error => this.error = error);
  }
}
