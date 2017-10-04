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
    this.dm = new DymoManager(this.audioContext, undefined, undefined, undefined, 'assets/audio/impulse_rev.wav');
    // Note: post 0.94 api
    this.dm.init('https://semantic-player.github.io/dymo-core/ontologies/')
    .then(() => this.dm.loadIntoStore('assets/dymos/example/dymo.json', 'assets/dymos/example/rendering.json'))
    .then((res) => {
      console.log('Loaded; start playing...');
      this.dm.startPlaying();
    }).catch((err) => {
      console.log('Error loading', err);
    });
  }
}
