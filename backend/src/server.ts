import { App } from "./app";

class Server{
    static start():void{
        const application  = new App(3333);
        application.init();
        application.start();
    }
};
Server.start();