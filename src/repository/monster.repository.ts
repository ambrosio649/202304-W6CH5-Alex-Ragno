import fs from 'fs/promises';
import createDebug from 'debug';
const debug = createDebug('W6:SampleRepo');

type Monster = {
  id: string;
  name: string;
};

const file = './data.json';

export class MonsterRepo {
  constructor() {
    debug('Monster Repo');
  }

  async readAll() {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    return JSON.parse(stringData) as Monster[];
  }

  async readById(id: string) {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    const monsterData = JSON.parse(stringData) as Monster[];
    return monsterData.find((item) => item.id === id);
  }
}
