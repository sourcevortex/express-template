// import path from 'path';
import express, { Express } from 'express';
import morgan from 'morgan';
import envs from '@config/app';

export default class App {
  constructor() {
    this.app = express();
    this.middlewares();
  }

  /** Attributes */

  /**
   * Express app
   */
  public app: Express;

  /**
   * Env control var
   */
  private isDev = envs.core.isDev;

  /** Methods */

  /**
   * Start all app middlewares before routes
   */
  private middlewares() {
    // this.app.use(express.static(path.join(__dirname, '..', 'public')));
    if (this.isDev) {
      this.app.use(morgan('dev'));
    }
    this.app.use(express.urlencoded({ extended: false }));
  }
}
