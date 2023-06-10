import { Router as createRouter } from 'express';
import { MonsterController } from '../controllers/monster.controller.js';

const controller = new MonsterController();
export const monsterRouter = createRouter();

monsterRouter.get('/', controller.getAll.bind(controller));
monsterRouter.get('/:id', controller.getById.bind(controller));
monsterRouter.post('/', controller.post.bind(controller));
monsterRouter.patch('/:id', controller.patch.bind(controller));
monsterRouter.delete('/:id', controller.deleteById.bind(controller));
