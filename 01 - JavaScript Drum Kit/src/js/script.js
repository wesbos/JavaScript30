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
      a: "./src/sounds/clap.wav",
      d: "./src/sounds/hihat.wav",
      s: "./src/sounds/kick.wav",
      f: "./src/sounds/openhat.wav",
      g: "./src/sounds/boom.wav",
      h: "./src/sounds/ride.wav",
      j: "./src/sounds/snare.wav",
      k: "./src/sounds/tom.wav",
      l: "./src/sounds/tink.wav",
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
