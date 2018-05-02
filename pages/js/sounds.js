const loops = new Array(20).fill(0);

function makeSynth() {
  let envelope = {
    attack: 0.1,
    release: 4,
    releaseCurve: "linear"
  };
  let filterEnvelope = {
    baseFrequency: 200,
    octaves: 2,
    attack: 0,
    decay: 0,
    release: 1000
  };

  return new Tone.DuoSynth({
    harmonicity: 1,
    volume: -20,
    voice0: {
      oscillator: { type: "sawtooth" },
      envelope,
      filterEnvelope
    },
    voice1: {
      oscillator: { type: "sine" },
      envelope,
      filterEnvelope
    },
    vibratoRate: 0.5,
    vibratoAmount: 0.1
  });
}

let synth = makeSynth().toMaster();
// let rightSynth = makeSynth();
// let rightPanner = new Tone.Panner(0.5).toMaster();
let echo = new Tone.FeedbackDelay("16n", 0.2);
let delay = Tone.context.createDelay(1.0); // Borrow the AudioContext from Tone.js
let delayFade = Tone.context.createGain();

delay.delayTime.value = 0.2;
delayFade.gain.value = 0.75;

synth.connect(echo);
echo.toMaster();
echo.connect(delay);

delay.connect(Tone.context.destination);
delay.connect(delayFade);
delayFade.connect(delay);

Tone.context.latencyHint = 0.8;
Tone.Transport.start();

Nexus.tune.createJIScale(
  1 / 1,
  567 / 512,
  9 / 8,
  147 / 128,
  21 / 16,
  1323 / 1024,
  189 / 128,
  3 / 2,
  49 / 32,
  7 / 4,
  441 / 256,
  63 / 32
);

//can there be a rule that when the sound stops they roll again?
function play() {
  //unmute
  loops.forEach(x => (x.mute = false));

  if (pickedGlyphs[0] && idList[0] == myId) {
    loops[0] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(0), 2);
    }, "4m").start();
  }

  if (pickedGlyphs[1] && idList[1] == myId) {
    loops[1] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(1), 2);
    }, "4m").start();
  }
  if (pickedGlyphs[2] && idList[2] == myId) {
    loops[2] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(2), 1);
      synth.triggerAttackRelease(Nexus.note(3), 1, "+2m");
    }, "5m").start();
  }
  if (pickedGlyphs[3] && idList[3] == myId) {
    loops[3] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(3), 1);
      synth.triggerAttackRelease(Nexus.note(1), 1, "+1m");
    }, "4m").start();
  }
  if (pickedGlyphs[4] && idList[4] == myId) {
    loops[4] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(4), 1);
      synth.triggerAttackRelease(Nexus.note(0), 1, "+1m");
    }, "5m").start();
  }
  if (pickedGlyphs[5] && idList[5] == myId) {
    loops[5] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(5), 1);
      synth.triggerAttackRelease(Nexus.note(1), 1, "+1m");
      synth.triggerAttackRelease(Nexus.note(3), 1, "+2m");
    }, "4m").start();
  }
  if (pickedGlyphs[6] && idList[6] == myId) {
    loops[6] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(6), 1);
      synth.triggerAttackRelease(Nexus.note(1), 1, "+1m");
      synth.triggerAttackRelease(Nexus.note(2), 1, "+2m");
    }, "5m").start();
  }
  if (pickedGlyphs[7] && idList[7] == myId) {
    loops[7] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(7), 1);
      synth.triggerAttackRelease(Nexus.note(5), 1, "+4n");
      synth.triggerAttackRelease(Nexus.note(3), 1, "+8n");
    }, "4m").start();
  }
  if (pickedGlyphs[8] && idList[8] == myId) {
    loops[8] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(8), 1);
      synth.triggerAttackRelease(Nexus.note(7), 1, "+1m");
      synth.triggerAttackRelease(Nexus.note(6), 1, "+2n");
    }, "5m").start();
  }
  if (pickedGlyphs[9] && idList[9] == myId) {
    loops[9] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(9), 1);
      synth.triggerAttackRelease(Nexus.note(5), 1, "+8n");
      // synth.triggerAttackRelease(Nexus.note(2), 1, "+2n");
    }, "1m").start();
  }
  if (pickedGlyphs[10] && idList[10] == myId) {
    loops[10] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(11), 1);
      synth.triggerAttackRelease(Nexus.note(3), 1, "+8n");
    }, "1m").start();
  }
  if (pickedGlyphs[11] && idList[11] == myId) {
    loops[11] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(9), 1);
      synth.triggerAttackRelease(Nexus.note(1), 1, "+16n");
    }, "2n").start();
  }
  if (pickedGlyphs[12] && idList[12] == myId) {
    loops[12] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(2), 1);
      synth.triggerAttackRelease(Nexus.note(4), 1, "+8n");
      synth.triggerAttackRelease(Nexus.note(6), 1, "+1m");
    }, "2m").start();
  }
  if (pickedGlyphs[13] && idList[13] == myId) {
    loops[13] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(7), 1);
      synth.triggerAttackRelease(Nexus.note(4), 1, "+8n");
      synth.triggerAttackRelease(Nexus.note(2), 1, "+1m");
    }, "2m").start();
  }
  if (pickedGlyphs[14] && idList[14] == myId) {
    loops[14] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(8), 1);
      synth.triggerAttackRelease(Nexus.note(5), 1, "+8n");
      synth.triggerAttackRelease(Nexus.note(1), 1, "+1m");
    }, "3m").start();
  }
  if (pickedGlyphs[15] && idList[15] == myId) {
    loops[15] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(8), 1);
      synth.triggerAttackRelease(Nexus.note(5), 1, "+1m");
      synth.triggerAttackRelease(Nexus.note(1), 1, "+2m");
    }, "2m").start();
  }
  if (pickedGlyphs[16] && idList[16] == myId) {
    loops[16] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(6), 1);
      synth.triggerAttackRelease(Nexus.note(4), 1, "+8n");
      synth.triggerAttackRelease(Nexus.note(2), 1, "+4n.");
    }, "4m").start();
  }
  if (pickedGlyphs[17] && idList[17] == myId) {
    loops[17] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(6), 1);
      synth.triggerAttackRelease(Nexus.note(2), 1, "+4n.");
      synth.triggerAttackRelease(Nexus.note(4), 1, "+8n");
    }, "1m.").start();
  }
  if (pickedGlyphs[18] && idList[18] == myId) {
    loops[18] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(11), 1);
      synth.triggerAttackRelease(Nexus.note(3), 1, "+8n.");
    }, "2m").start();
  }
  if (pickedGlyphs[18] && idList[18] == myId) {
    loops[18] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(11), 1);
      synth.triggerAttackRelease(Nexus.note(3), 1, "+8n.");
    }, "3m").start();
  }
  if (pickedGlyphs[19] && idList[19] == myId) {
    loops[19] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(10), 1);
      synth.triggerAttackRelease(Nexus.note(2), 1, "+8n");
    }, "4m").start();
  }
  if (pickedGlyphs[20] && idList[20] == myId) {
    loops[20] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(10), 1);
      synth.triggerAttackRelease(Nexus.note(3), 1, "+8n");
    }, "5m").start();
  }
  if (pickedGlyphs[21] && idList[21] == myId) {
    loops[21] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(9), 1);
      synth.triggerAttackRelease(Nexus.note(4), 1, "+8n");
    }, "6m").start();
  }
  if (pickedGlyphs[22] && idList[22] == myId) {
    loops[22] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(5), 1);
    }, "1m").start();
  }
  if (pickedGlyphs[23] && idList[23] == myId) {
    loops[23] = new Tone.Loop(time => {
      synth.triggerAttackRelease(Nexus.note(11), 1);
    }, "1m").start();
  }
}
