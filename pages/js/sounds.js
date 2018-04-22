// const client = new rhizome.Client();
// client.start(err => {
//   client.send("/sys/subscribe", ["/"]);
// });

const feedback = new Tone.FeedbackDelay("16n", 0.5).toMaster();

const bells = new Tone.Players({
  bell1: "sounds/bells/bell_ball3.mp3",
  bell2: "sounds/bells/bell_roll_2.mp3",
  bell3: "sounds/bells/bell-rope2.mp3"
}).connect(feedback);

const clang = new Tone.Players({
  clang1: "sounds/clang/clang_3.mp3",
  clang2: "sounds/clang/clang_4.mp3",
  clang3: "sounds/clang/dumpster_hit2.mp3"
}).connect(feedback);

const pan = new Tone.Players({
  pan1: "sounds/pan/1scrape1.mp3",
  pan2: "sounds/pan/1scrape2.mp3",
  pan3: "sounds/pan/2scrape1.mp3",
  pan4: "sounds/pan/pan_hit_1.mp3",
  pan5: "sounds/pan/pan_hit_2.mp3"
}).connect(feedback);

const coil = new Tone.GrainPlayer("sounds/shakers/coilIpad.mp3").connect(
  feedback
);
const pages = new Tone.GrainPlayer(
  "sounds/shakers/turning_pages_2.mp3"
).toMaster();

const violinSus = [];
for (var i = 0; i < 6; i++) {
  violinSus[i] = new Tone.GrainPlayer(
    `sounds/violin/sustain/violin-sustain-${i + 1}.mp3`
  ).connect(feedback);
}

const violinTrem = [];
for (var i = 0; i < 6; i++) {
  violinTrem[i] = new Tone.GrainPlayer(
    `sounds/violin/sustain/violin-sustain-${i + 1}.mp3`
  ).connect(feedback);
}
//TODO: make the sounds picked by a user happen only on their phones

//can there be a rule that when the sound stops they roll again?
function play() {
  if (pickedGlyphs[0] && idList[0] == myId) {
    var event = new Tone.Event(function(time, pitch) {
      bells.get("bell1").start();
    }, "C2");

    event.set({ loop: true, loopEnd: "2n" });
    event.start().stop("+4");
  }

  if (pickedGlyphs[1]) {
    var event = new Tone.Event(function(time, pitch) {
      bells.get("bell2").start();
    }, "C2");

    event.set({ loop: true, loopEnd: "2n" });
    event.start().stop("+4");
  }
  if (pickedGlyphs[2]) {
    var event = new Tone.Event(function(time, pitch) {
      bells.get("bell3").start();
    }, "C2");

    event.set({ loop: true, loopEnd: "2n" });
    event.start().stop("+4");
  }
  if (pickedGlyphs[3]) {
    clang.get("clang1").start();
  }
  if (pickedGlyphs[4]) {
    clang.get("clang2").start();
  }
  if (pickedGlyphs[5]) {
    clang.get("clang3").start();
  }
  if (pickedGlyphs[6]) {
    pan.get("pan1").start();
  }
  if (pickedGlyphs[7]) {
    pan.get("pan2").start();
  }
  if (pickedGlyphs[8]) {
    pan.get("pan3").start();
  }
  if (pickedGlyphs[9]) {
    pan.get("pan4").start();
  }
  if (pickedGlyphs[10]) {
    pan.get("pan5").start();
  }

  //grains
  if (pickedGlyphs[11]) {
    coil.start();
  }
  if (pickedGlyphs[12]) {
    pages.start();
  }
  if (pickedGlyphs[13]) {
    pages.start();
  }

  //violin
  if (pickedGlyphs[14]) {
    violinSus[0].start();
  }
  if (pickedGlyphs[15]) {
    violinSus[1].start();
  }
  if (pickedGlyphs[16]) {
    violinSus[2].start();
  }
  if (pickedGlyphs[17]) {
    violinSus[3].start();
  }
  if (pickedGlyphs[18]) {
    violinSus[4].start();
  }
  if (pickedGlyphs[19]) {
    violinSus[5].start();
  }
  if (pickedGlyphs[20]) {
    violinSus[6].start();
  }
  if (pickedGlyphs[21]) {
    violinTrem[0].start();
  }
  if (pickedGlyphs[22]) {
    violinTrem[1].start();
  }
  if (pickedGlyphs[23]) {
    violinTrem[2].start();
  }
}

Tone.Transport.start();

// Tone.Transport.schedule(time => {
//   console.log(time);
//   console.log("hi");
// }, `+${bells.get("bell1")._buffer.duration}`);

// setTimeout(
//   () => console.log("finished"),
//   bells.get("bell1")._buffer.duration * 1000
// );
// bells.get("bell1")._buffer.duration;
// console.log(bells.get("bell1")._buffer.duration);
