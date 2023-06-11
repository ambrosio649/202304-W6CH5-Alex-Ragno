import { Request, Response } from 'express';
import { MonsterRepo } from '../repository/monster.repository.js';
import createDebug from 'debug';
const debug = createDebug('W6:SampleController');

export class MonsterController {
  repo: MonsterRepo;
  constructor() {
    this.repo = new MonsterRepo();
    debug('Instantiated SampleController');
    debug(this.repo);
  }

  async getAll(req: Request, res: Response) {
    res.send(await this.repo.readAll());
  }

  async getById(req: Request, res: Response) {
    res.send(await this.repo.readById(req.params.id));
  }

  async post(req: Request, res: Response) {
    await this.repo.addMonster(req.body);
    res.send('New monster has added!');
  }

  patch(req: Request, res: Response) {
    res.send('Patch Sample!: ' + req.body.user);
  }

  deleteById(req: Request, res: Response) {
    res.send('Delete Sample!: ' + req.body.user);
  }
}
