import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('mensaje')
  enviarMensaje(@Body() datos: { numero: string, mensaje: string }) {
    console.log('entra')
    return this.appService.enviarMensaje(datos.numero, datos.mensaje);
  }
}
