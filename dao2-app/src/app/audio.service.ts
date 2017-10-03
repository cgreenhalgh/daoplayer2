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
    // this.audioContext ?
    this.dm = new DymoManager(undefined, null, null, null, 'assets/audio/impulse_rev.wav');
    this.dm.init('https://semantic-player.github.io/dymo-core/ontologies/')
    .then(() => this.dm.loadDymoAndRendering('assets/example-dymo.json', 'assets/example-rendering.json'))
    .then(l => { console.log('Loaded; start playing...', l);
      this.dm.startPlaying();
    }).catch((err) => {
      console.log('Error loading', err);
    });
  }
}
