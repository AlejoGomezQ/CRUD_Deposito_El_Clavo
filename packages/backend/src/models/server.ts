import express, { Application, Request, Response } from 'express';

//DB connection
import dbConnection from '../db/connection';

//Routes
import productRoutes from '../routes/product';

export class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.midlewares();
        this.listen();
        this.routes();
        this.dbConnection();
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }

    public routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({ message: 'Hello World' })
        })

        this.app.use('/api/products', productRoutes)
    }

    public midlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    public async dbConnection() {
        try {
            await dbConnection.authenticate();
            console.log('Database connected');
        } catch (error) {
            console.error('Unable to connect to the database:', error)
        }
        
    }
}