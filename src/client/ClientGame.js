import ClientEngine from './ClientEngine';
import ClientWorld from './ClientWold';
import sprites from '../configs/sprites.js';
// import ClientWorld from './ClientWold.js';
import levelCfg from '../configs/world.json';
class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
    });

    this.engine = this.createEngine();
    this.map = this.createWorld();
    this.initEngine();
  }
  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId));
  }

  createWorld() {
    return new ClientWorld(this, this.engine, levelCfg);
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      console.log('####', this.engine);

      this.engine.on('render', (_, time) => {
        this.map.init();
      });
      this.engine.start();
    });
  }
  static init(cfg) {
    if (!ClientGame.game) {
      ClientGame.game = new ClientGame(cfg);
      console.log('Game Init');
    }
  }
}
export default ClientGame;
