const client = new rhizome.Client();
const images = document.querySelector(".grids").children;
const events = [];
const pickedGlyphs = Array(20);

//if array doesn't include 1 fill it with 0s
!pickedGlyphs.includes(1) ? pickedGlyphs.fill(0) : "";

//start rhizome server
client.start(err => {
  client.send("/sys/subscribe", ["/"]);
});

//ask for current list
client.on("connected", () => {
  client.send("/getGlyphsList", ["/"]);
});

//send current list when asked
client.on("message", addr => {
  if (addr == "/getGlyphsList" && pickedGlyphs.includes(1)) {
    client.send("/receiveGlyphsList", pickedGlyphs);
  }
});

//received list, update current list
client.on("message", (addr, args) => {
  if (addr == "/receiveGlyphsList") {
    args.forEach((value, index) => {
      if (args[index] == 1) {
        pickedGlyphs[index] = 1;
        images[index].classList.add("picked");
      }
    });
  }
});

//setup mobile interaction
for (let i = 0; i < 20; i++) {
  events[i] = new Hammer(images[i]);
  events[i].on("tap press", () => {
    //send message and do class stuff when received
    //there has to be a better way to do this?
    client.send("/picked", [i]);
  });
}

//1 in array means picked 0 not picked
client.on("message", (addr, args) => {
  if (addr === "/picked") {
    if (images[args].classList[1] != "picked") {
      images[args].classList.add("picked");
      pickedGlyphs[args] = 1;
    } else {
      images[args].classList.remove("picked");
      pickedGlyphs[args] = 0;
    }
    //change to getting values from pickedglpys array
    pickedGlyphs.forEach((value, index) => {
      if (pickedGlyphs[index] == 1) {
        pickedGlyphs[index] = 1;
        images[index].classList.add("picked");
      }
    });
  }
});

StartAudioContext(Tone.context, "#start");
