import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const saving = await json(data);
    return new GameSaving(JSON.parse(saving));
  }
}
