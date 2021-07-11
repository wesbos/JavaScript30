# JavaScript Drum Kit

The challenge is to create a JavaScript Drum Kit, controlling it by using the EventTarget method `addEventListener()`.

## Lessons Learned

I was going to reproduce the exact same structure and functionalities of the original challenge, but I found out that the HTML audio element is glitchy in Safari, as reported here:

- [Bug 226067] - Audio .play() cuts off the beginning of (short?) clips
- [Bug 221334] - Audio passed through WebAudio is delayed and glitchy on Safari

So I decided to switch to [Web Audio API] and learn how to use it, following some sections of this tutorial: [Advanced techniques: Creating and sequencing audio].

```JavaScript
/**
 * Create new AudioContext.
 * @constant {Object}
 * @default
 * @see {@link https://css-tricks.com/introduction-web-audio-api/|CSS-Tricks}
 */
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

/**
 * Load samples and decode it into a buffer.
 * @async
 * @function getFile
 * @param {Object} context
 * @param {string} filepath
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques#dial_up_%E2%80%94_loading_a_sound_sample|Web Audio Api}
 * @returns {Promise} audioBuffer
 */
async function getFile(context, filepath) {
  try {
    const response = await fetch(filepath);
    const arrayBuffer = await response.arrayBuffer();
    let audioBuffer = "";
    if (context.decodeAudioData.length === 2) {
      audioBuffer = new Promise((resolve) => {
        context.decodeAudioData(arrayBuffer, (buffer) => {
          resolve(buffer);
        });
      });
    } else {
      audioBuffer = await context.decodeAudioData(arrayBuffer);
    }
    return audioBuffer;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Create buffer source and play sample.
 * @function playSample
 * @param {Object} context
 * @param {Object} audioBuffer
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques#playing_the_sample|Web Audio Api}
 * @returns {Object} sampleSource
 */
function playSample(context, audioBuffer) {
  if (context.state === "suspended") {
    context.resume();
  }
  const sampleSource = context.createBufferSource();
  sampleSource.buffer = audioBuffer;
  sampleSource.connect(context.destination);
  sampleSource.start(0);
  return sampleSource;
}

/**
 * Set up samples.
 * @async
 * @function setupSamples
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques#loading_the_sample|Web Audio Api}
 * @returns {Promise} samples
 */
async function setupSamples() {
  try {
    const sounds = {
      a: "./sounds/clap.wav",
      d: "./sounds/hihat.wav",
      s: "./sounds/kick.wav",
      f: "./sounds/openhat.wav",
      g: "./sounds/boom.wav",
      h: "./sounds/ride.wav",
      j: "./sounds/snare.wav",
      k: "./sounds/tom.wav",
      l: "./sounds/tink.wav",
    };
    const samples = await Promise.all(
      Object.entries(sounds).map(async (sound) => {
        let obj = {};
        obj[sound[0]] = await getFile(audioContext, sound[1]);
        return obj;
      })
    );
    return samples;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Remove transition
 * @function removeTransition
 * @param {} e
 */
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

setupSamples().then((samples) => {
  const keys = Array.from(document.querySelectorAll(".key"));
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
  window.addEventListener("keydown", (e) => {
    const button = document.querySelector(`div[data-key="${e.key}"]`);
    if (button) button.classList.add("playing");
    samples.forEach((sample) => playSample(audioContext, sample[e.key]));
  });
});

```

[Bug 226067]: https://bugs.webkit.org/show_bug.cgi?id=226067
[Bug 221334]: https://bugs.webkit.org/show_bug.cgi?id=221334
[Web Audio API]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
[Advanced techniques: Creating and sequencing audio]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques
