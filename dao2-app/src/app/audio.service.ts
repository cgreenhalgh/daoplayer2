import { DymoManager } from 'dymo-core';

export class AudioService {
  audioContext: AudioContext;
  dm: DymoManager;
  constructor() {
    console.log('new AudioService');
    try {
      this.audioContext = new AudioContext();
    }
    catch (err) {
      console.log('Error creating AudioContext: '+err.message);
    }
  }
  hello() {
    console.log('audio: hello');
    if (!this.audioContext) {
      console.log('Sorry, no AudioContext');
      return;
    }
    this.dm = new DymoManager(this.audioContext, undefined, undefined, undefined, 'assets/audio/impulse_rev.wav');
    this.dm.loadDymoAndRendering('assets/example-dymo.json', 'assets/example-rendering.json').then((res) => {
      console.log('Loaded; start playing...');
      this.dm.startPlaying();
    }).catch((err) => {
      console.log('Error loading', err);
    });
  }
}
