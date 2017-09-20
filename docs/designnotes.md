# daoplayer2 design notes

## UI

Normally no direct interaction with UI.

Target dedicated experience app(s) in the first instance.

Play, pause, rewind (reset).

Settings link for debugging/diagnostics.

## authoring

Same based concepts and scripts are for [daoplayer](https://github.com/cgreenhalgh/daoplayer):
- Scene - distinct musical treatment
- Track - abstract musical track, stem or layer
- AudioFile - chunk of audio material
- Waypoint, Route - geo-reference points and route segments

Basic musical functionality:
- multi-track (synchronised) Scene with dynamic volume per track
- configurable mapping (including repeats) from Track to AudioFile
- scene transitions with specified cross-fade
- scene start configuration including resume or from beginning

## Implementation options

Audio
- cordova audio
- diy webaudio
- [semanticplayer]() / [dymo-core](https://github.com/florianthalmann/dymo-core)

