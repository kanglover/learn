import { Server } from '@overnightjs/core';
import { UserController } from './controllers/UserController';

const PORT = 3000;

export class SampleServer extends Server {
    constructor() {
        super(process.env.NODE_ENV === 'development');
        this.setupControllers();
    }

    private setupControllers(): void {
        const userController = new UserController();
        super.addControllers([userController]);
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
        });
    }
}

const sampleServer = new SampleServer();
sampleServer.start(PORT);
