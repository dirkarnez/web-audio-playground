[web-audio-playground](https://dirkarnez.github.io/web-audio-playground)
========================================================================
- [chrisguttandin/standardized-audio-context: A cross-browser wrapper for the Web Audio API which aims to closely follow the standard.](https://github.com/chrisguttandin/standardized-audio-context)
  - [chrisguttandin/standardized-audio-context-demo: A demo page to show how to use standardized-audio-context.](https://github.com/chrisguttandin/standardized-audio-context-demo)
    - [standardized-audio-context Demo](https://chrisguttandin.github.io/standardized-audio-context-demo/)
- [**tyfkda/quantized_tri_wave**](https://github.com/tyfkda/quantized_tri_wave)
- [Web Audio API: AudioBuffer](https://mdn.github.io/webaudio-examples/audio-buffer/)
- [mdn/webaudio-examples: Code examples that accompany the MDN Web Docs pages relating to Web Audio.](https://github.com/mdn/webaudio-examples)
  - [webaudio-examples/violent-theremin at main · mdn/webaudio-examples](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin)
  - [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/)
  - [webaudio-examples/audio-buffer/index.html at main · mdn/webaudio-examples](https://github.com/mdn/webaudio-examples/blob/main/audio-buffer/index.html)
  - [AudioBufferSourceNode: detune property](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/detune)
- [cutterbl/soundtouchjs-audio-worklet: AudioWorkletNode and AudioWorkletProcessor implementing SoundTouchJS](https://github.com/cutterbl/soundtouchjs-audio-worklet)

### Notes
```javascript
let c, p;
class A extends AudioWorkletProcessor {
    constructor() {
        super();
        // this.port is built-in
        this.port.onmessage = (e) => {
            p = e.data;
            p.onmessage = () => {
                p.postMessage(c);
                p.close()
            }
            ;
            this.port.postMessage(0)
        }
    }
    process() {
        c = 1
    }
}
registerProcessor("a", A)
```
