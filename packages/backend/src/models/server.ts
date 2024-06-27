import express from 'express';

export class Server {
    private app: express.Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = 3001
        this.listen();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}