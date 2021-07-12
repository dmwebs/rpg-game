import './index.scss';
// import senseiWalk from './assets/Male-2-Walk.png';
// import terrainAtlas from './assets/terrain.png';
// import worldCfg from './configs/world.json';
// import sprites from './configs/sprites.js';

import ClientGame from './client/ClientGame.js';
window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});

// const canvas = document.getElementById('game');
// const ctx = canvas.getContext('2d');

// const spriteW = 48;
// const spriteH = 48;

// const canvasWidth = canvas.offsetWidth;
// const canvasHeight = canvas.offsetHeight;

// const shots = 3;

// let cycle = 0;
// let cycleH = 0;
// let pY = canvasWidth / 2 - spriteW / 2;
// let pX = canvasHeight / 2 - spriteH / 2;

// let bottomPressed = false;
// let topPressed = false;
// let leftPressed = false;
// let rightPressed = false;

// const img = document.createElement('img');
// img.src = senseiWalk;

// function keyDodnHandler(e) {
//   console.log(e.key);
//   if (e.key === 'Down' || e.key === 'ArrowDown') {
//     bottomPressed = true;
//   } else if (e.key === 'Up' || e.key === 'ArrowUp') {
//     topPressed = true;
//   } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
//     leftPressed = true;
//   } else if (e.key === 'Right' || e.key === 'ArrowRight') {
//     rightPressed = true;
//   }
// }

// function keyUpHandler(e) {
//   if (e.key === 'Down' || e.key === 'ArrowDown') {
//     bottomPressed = false;
//   } else if (e.key === 'Up' || e.key === 'ArrowUp') {
//     topPressed = false;
//   } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
//     leftPressed = false;
//   } else if (e.key === 'Right' || e.key === 'ArrowRight') {
//     rightPressed = false;
//   }
// }

// document.addEventListener('keydown', keyDodnHandler);
// document.addEventListener('keyup', keyUpHandler);

// function walk() {
//   if (bottomPressed) {
//     if (pY >= canvasHeight - spriteH) {
//       pY = canvasHeight - spriteH;
//     } else {
//       pY += 10;
//     }

//     cycle = (cycle + 1) % shots;
//     cycleH = 0;
//   } else if (topPressed) {
//     if (pY <= 0) {
//       pY = 0;
//     } else {
//       pY -= 10;
//     }
//     cycle = (cycle + 1) % shots;
//     cycleH = 3;
//   } else if (rightPressed) {
//     if (pX >= canvasWidth - spriteH) {
//       pX = canvasWidth - spriteH;
//     } else {
//       pX += 10;
//     }
//     cycle = (cycle + 1) % shots;
//     cycleH = 2;
//   } else if (leftPressed) {
//     if (pX <= 0) {
//       pX = 0;
//     } else {
//       pX -= 10;
//     }
//     cycle = (cycle + 1) % shots;
//     cycleH = 1;
//   }

//   ctx.clearRect(0, 0, 600, 600);
//   ctx.drawImage(img, cycle * spriteW, cycleH * spriteH, spriteW, spriteH, pX, pY, 48, 48);

//   window.requestAnimationFrame(walk);
// }
// img.addEventListener('load', () => {
//   window.requestAnimationFrame(walk);
// });

// const terrain = document.createElement('img');
// terrain.src = terrainAtlas;
// terrain.addEventListener('load', () => {
//   const { map } = worldCfg;

//   map.forEach((cfgRow, y) => {
//     cfgRow.forEach((cfgCell, x) => {
//       const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
//       ctx.drawImage(terrain, sX, sY, sW, sH, x * spriteW, y * spriteH, spriteW, spriteH);
//     });
//   });
// });
