const sentence = "hello there from lighthouse labs";

let delay = 1000;
let counter = 0;


for (const char of sentence) {
  if (counter === sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(char);
      process.stdout.write('\n');
    }, (delay));
  } else {
    delay += 50;
    counter++;
    setTimeout(() => {
      process.stdout.write(char);
    }, (delay)); // <= 1s delay to make it noticeable. Can dial it down later.
  }
}