# JavaScript Drum Kit :drum:

The challenge is to create a JavaScript Drum Kit, controlling it by using the EventTarget method `addEventListener()`.

## Lessons Learned

I was going to reproduce the exact same structure and functionalities of the original challenge, but I found out that the HTML audio element is glitchy in Safari, as reported here:

- [Bug 226067] - Audio .play() cuts off the beginning of (short?) clips
- [Bug 221334] - Audio passed through WebAudio is delayed and glitchy on Safari

So I decided to switch to [Web Audio API] and learn how to use it, following some sections of this tutorial: [Advanced techniques: Creating and sequencing audio].

[Bug 226067]: https://bugs.webkit.org/show_bug.cgi?id=226067
[Bug 221334]: https://bugs.webkit.org/show_bug.cgi?id=221334
[Web Audio API]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
[Advanced techniques: Creating and sequencing audio]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques
