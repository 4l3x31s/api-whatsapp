/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Client } from 'whatsapp-web.js';
import * as qrcode from 'qrcode-terminal';
import { ApiLocalWhats } from './api-wahts';

@Injectable()
export class AppService {
  public data = new ApiLocalWhats();
  getHello(): string {
    return 'Hello World!';
  }

  enviarMensaje(number: string, mensaje: string) {
    this.data.enviarMensaje(number, mensaje);
  }

}
