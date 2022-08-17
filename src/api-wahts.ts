/* eslint-disable @typescript-eslint/no-unused-vars */
import { Client, LocalAuth } from "whatsapp-web.js";
import * as qrcode from 'qrcode-terminal';
import { MessageDto } from './model/message.dto';
export class ApiLocalWhats extends Client {

    constructor() {
        super({
            authStrategy: new LocalAuth(),
            puppeteer: { headless: true },
        });

        console.log("Iniciando....");

        /*this.initialize();
    
        this.on("ready", () => {
          this.status = true;
          console.log("LOGIN_SUCCESS");
        });
    
        this.on("auth_failure", () => {
          this.status = false;
          console.log("LOGIN_FAIL");
        });
    
        this.on("qr", (qr) => {
          console.log('Escanea el codigo QR que esta en la carepta tmp')
          this.generateImage(qr)
        });*/
        this.initialize();
        console.log('ingresa constructor');
        this.on("qr", (qr) => {
            console.log('genera');
            qrcode.generate(qr, { small: true });
            console.log(qr);
        });
        this.on('ready', () => {
            console.log('Client is ready!');
        });
        this.on('message', message => {
            console.log(message.body);
        });


    }
    public enviarMensaje(number: string, message: string) {
        return this.sendMessage(`${number}@c.us`, message)
    }
}