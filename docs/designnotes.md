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

## dymo-core notes

A node has:
- Amplitude
- Time Feature, default 0
- Duration - overides Duration Feature, defaults to buffer length if source
- DurationRatio - modifies Duration
- Reverb (unless optimised)
- Delay (unless optimised)
- Pan, Height, Distance

A source has:
- PlaybackRate (default as audio source)
- TimeStretchRatio (default 0?)
- Loop (default 0) - just sets low-level loop audio source

Thread repeatedly gets next parts from navigator, builds and plays.
Default navigator is OneShot.
Navigator part in cdt (concrete data type?!).
- conjuction -> lock step parallel
- disjunction -> random
- _ -> sequential, depth-first

