import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: 'rgb(167,0,3)',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;