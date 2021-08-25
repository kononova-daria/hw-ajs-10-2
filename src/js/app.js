import GameSavingLoader from './gamesavingloader';

(async () => {
  try {
    const result = await GameSavingLoader.load();
    return result;
  } catch {
    throw new Error('Ошибка при выполнении');
  }
})();
