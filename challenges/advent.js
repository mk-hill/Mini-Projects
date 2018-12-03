const fs = require('fs');

const q1a = () => {
  fs.readFile('./santa.txt', (err, data) => {
    console.time('santa');
    const input = data.toString();
    const answer = input.match(/\(/g).length - input.match(/\)/g).length;
    console.log(`q1a = ${answer}`);
    console.timeEnd('santa');
  });
};

const q1b = () => {
  fs.readFile('./santa.txt', (err, data) => {
    console.time('santa2');
    const inputArr = data.toString().split('');
    const result = inputArr.reduce(
      (acc, val) => (val === '(' ? (acc += 1) : val === ')' ? (acc -= 1) : acc),
      0,
    );
    console.log(`q1b = ${result}`);
    console.timeEnd('santa2');
  });
};

const q1c = () => {
  fs.readFile('./santa.txt', (err, data) => {
    console.time('santa3');
    const inputArr = data.toString().split('');
    const result = inputArr.reduce((acc, val) => {
      if (val === '(') {
        acc += 1;
      }
      if (val === ')') {
        acc -= 1;
      }
      return acc;
    }, 0);
    console.log(`q1c = ${result}`);
    console.timeEnd('santa3');
  });
};

const q2a = () => {
  fs.readFile('./santa.txt', (err, data) => {
    console.time('santa4');
    let position = 0;
    const inputArr = data.toString().split('');
    const result = inputArr.reduce((acc, val) => {
      if (acc >= 0) {
        if (val === '(') {
          acc += 1;
        }
        if (val === ')') {
          acc -= 1;
        }
        position++;
        return acc;
      }
    }, 0);
    console.log(`q2a = ${position}`);
    console.timeEnd('santa4');
  });
};

const q2b = () => {
  fs.readFile('./santa.txt', (err, data) => {
    console.time('santa5');
    let acc = 0;
    let position = 0;
    const inputArr = data.toString().split('');
    const result = inputArr.some((val) => {
      if (val === '(') {
        acc += 1;
      }
      if (val === ')') {
        acc -= 1;
      }
      position++;
      return acc < 0;
    }, 0);
    console.log(`q2b = ${position}`);
    console.timeEnd('santa5');
  });
};

q1a();
q1b();
q1c();
q2a();
q2b();

//
// ─── 2018 ───────────────────────────────────────────────────────────────────────
//

//
// ─── DAY 1 PUZZLE 1 ─────────────────────────────────────────────────────────────
//

/**
 --- Day 1: Chronal Calibration ---
"We've detected some temporal anomalies," one of Santa's Elves at the Temporal Anomaly Research and Detection Instrument Station tells you. She sounded pretty worried when she called you down here. "At 500-year intervals into the past, someone has been changing Santa's history!"

"The good news is that the changes won't propagate to our time stream for another 25 days, and we have a device" - she attaches something to your wrist - "that will let you fix the changes with no such propagation delay. It's configured to send you 500 years further into the past every few days; that was the best we could do on such short notice."

"The bad news is that we are detecting roughly fifty anomalies throughout time; the device will indicate fixed anomalies with stars. The other bad news is that we only have one device and you're the best person for the job! Good lu--" She taps a button on the device and you suddenly feel like you're falling. To save Christmas, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

After feeling like you've been falling for a few minutes, you look at the device's tiny screen. "Error: Device must be calibrated before first use. Frequency drift detected. Cannot maintain destination lock." Below the message, the device shows a sequence of changes in frequency (your puzzle input). A value like +6 means the current frequency increases by 6; a value like -3 means the current frequency decreases by 3.

For example, if the device displays frequency changes of +1, -2, +3, +1, then starting from a frequency of zero, the following changes would occur:

Current frequency  0, change of +1; resulting frequency  1.
Current frequency  1, change of -2; resulting frequency -1.
Current frequency -1, change of +3; resulting frequency  2.
Current frequency  2, change of +1; resulting frequency  3.
In this example, the resulting frequency is 3.

Here are other example situations:

+1, +1, +1 results in  3
+1, +1, -2 results in  0
-1, -2, -3 results in -6
Starting with a frequency of zero, what is the resulting frequency after all of the changes in frequency have been applied?


 */

const input1 = `-6
-1
-18
-10
+5
+18
+19
+11
-6
+13
+16
-15
+8
-10
+9
+12
+1
-9
-6
+16
+6
+13
+5
+18
-15
-1
+14
-2
+6
+12
-7
+5
-19
+2
+16
-5
-3
+6
+8
+18
-3
+9
+14
-10
+9
-5
+4
-1
+11
+10
+15
+12
-16
-12
+17
-2
-16
-11
+15
-11
+12
+14
-5
+10
-12
-6
+21
+19
-12
-6
+9
-4
-18
+15
+10
+3
+12
-17
-6
-11
+5
+10
+15
+9
-19
+3
+15
+2
+13
+15
-13
+7
+5
+19
+10
+14
+10
+9
+1
+13
+4
-5
+17
-14
+3
-8
-3
-3
-13
+6
-3
-11
-7
+17
+9
+4
-14
-19
-15
+7
-14
+19
-3
+11
+9
+16
+17
-6
+12
+12
+14
-7
+18
+8
+7
+7
-10
+5
+11
+15
+10
-2
-2
-5
-12
-7
+4
+10
+19
+11
-19
-10
-16
+11
-19
-2
-20
-10
+15
+8
-2
-12
+17
-14
-17
-18
-2
+1
+16
-12
-19
-13
-18
-3
+15
+9
+18
+16
+8
-9
-22
-4
+20
-6
+14
+1
+7
+10
+7
-4
+11
+11
-16
-5
+9
+22
+10
+12
-9
-17
+15
-8
+4
-3
-6
-3
+2
+11
+7
+9
+13
+11
-14
+11
-2
-2
-9
-1
-17
+15
+4
-14
+4
+16
+20
-4
+18
+8
-11
-18
+4
+19
-18
-15
-4
+9
+21
-8
+5
+6
+3
+6
-11
+14
+11
+4
-7
+18
+3
-2
-6
+9
-16
+3
+2
-9
+2
+6
-12
-11
-6
-9
+19
-18
+3
-9
-18
+10
+11
-7
-1
-9
-19
+26
+26
+10
+21
+18
+2
-6
+9
+8
-3
-12
+6
+10
-17
-5
-15
-7
-6
-14
+9
+7
+13
+10
+6
+17
+13
+1
+17
+10
+2
+2
+20
-5
+2
+11
-18
+9
-18
-13
+14
-5
+17
-6
-15
+20
+5
+3
-12
+16
-13
+11
+15
+8
-12
+14
+7
-19
-9
+3
+5
+4
+21
-3
+6
+11
-8
-14
+15
-5
+15
-6
+19
+4
-16
+3
+23
-9
-9
-18
+8
+7
-8
+12
-18
-4
+19
+9
+5
+8
+19
+13
+22
+14
-9
+18
+6
-8
-1
+16
-9
+13
+17
+9
-13
+10
-19
-9
-10
+20
+13
+6
+4
-14
+2
-19
-13
+18
+6
-18
-19
-1
-7
+12
+11
-14
-19
+4
-8
+19
-1
-27
+3
-14
-2
-10
-14
+2
+16
-7
+14
-15
-4
-1
-11
-12
+6
-2
-17
-2
+42
+4
-1
+51
+22
+11
+4
+12
-3
+10
+7
+19
-16
+23
+15
-16
-3
-20
-10
+19
+4
-35
+2
-18
-2
-9
-6
+34
-12
+43
-8
+5
-19
+18
+16
+4
+23
+10
+14
+14
-13
+25
-11
-4
-2
-1
-6
+29
-36
+23
+14
-19
-20
-32
-35
-89
-97
-22
-16
+10
-26
-9
-14
-18
+11
+17
-2
-11
+14
+16
-22
+7
-8
-10
+2
-1
+25
-21
+8
+11
-5
-43
-13
+10
-18
+15
+11
+17
-15
+6
+4
+19
+34
-106
+2
-20
+22
-9
-30
+13
-26
-53
+5
-2
+32
+206
-15
+7
+18
+22
-36
+43
+46
-190
+314
+76479
+13
-19
-3
+13
+4
+16
+9
+7
+10
-13
+6
-15
-17
+10
+17
-7
-11
-11
+7
+16
-18
-18
-20
-14
+12
+18
+20
+15
-17
-4
-1
+20
+17
-19
-8
-14
-14
+1
-7
+18
+23
-4
-1
+31
+18
-11
-2
-4
+15
-12
+10
+14
-2
+13
+6
+5
+8
+16
+18
+19
-18
-2
+16
+16
+8
+10
-6
-13
+10
+8
-14
-17
-13
-8
+7
-16
+4
+18
+1
-13
+15
-1
-5
-4
-16
-17
+7
-9
+18
-15
-19
+6
-11
-9
+18
+8
-19
-6
+4
-15
-9
-11
-3
-8
-6
+5
+10
+18
+17
-15
+8
-5
+4
+7
+11
-20
-1
+2
-12
+1
-3
-6
+10
+27
+4
+19
+7
+6
-3
+2
+10
+2
-3
-20
-16
+19
+14
+18
+15
+4
+6
-16
-11
-7
-18
-7
+4
-17
+2
+3
-16
+10
-16
-2
-6
+29
+15
-25
+7
+13
+16
-2
+25
+7
+4
+17
-20
+17
+6
-7
-4
+9
+14
-6
+11
-8
+11
-5
+6
+2
+3
+8
-12
+15
-9
-3
+6
+11
-6
+10
+10
-13
+7
+11
+2
-15
+14
+11
+3
+10
-18
-17
+15
+14
-13
+10
+1
+7
-15
-10
-13
-9
+7
-15
-1
+6
-21
+19
+16
+10
+13
+15
-3
-13
+8
+19
+1
+19
-7
+4
-1
+3
-1
-14
+7
-1
+12
+3
-1
+12
+17
+8
-11
-16
+17
+11
-14
-19
+15
+20
+2
-17
-7
-11
+12
-8
+3
+18
-9
-1
+11
+15
+6
+8
+4
-10
+8
-19
+7
-11
-10
-18
+2
+13
+16
-5
-4
+8
+7
+7
-11
+5
+19
+19
+19
-8
+14
-11
-9
-12
+11
+12
+18
+1
+3
+18
+17
-16
+8
+7
-10
+1
+11
+1
+5
+7
+4
+3
-13
+14
-16
+17
+7
+9
+1
-7
-13
+17
+11
-19
+7
-19
-13
-6
-16
-13
+1
+5
+18
-17
-12
-10
+2
+15
-4
-12
-13
+5
+10
+15
+14
+9
-10
-8
+2
+15
+9
+2
+4
-13
-16
+1
+6
+4
-17
-21
-20
+4
+8
-11
+17
-3
+12
-10
+13
-14
-19
+10
-19
+4
-1
+11
+4
+20
-1
+8
+22
+9
-19
-5
-5
+42
+15
+16
-7
-15
+9
+10
+4
+14
+9
-16
-14
+8
+7
+9
+4
+5
-15
-1
+2
+1
-8
-20
-12
+1
-4
+1
+13
+5
+14
-21
+36
+12
+1
+26
+12
+5
+10
-2
-20
-8
-19
-10
+42
-20
+150
+6
+11
+9
+2
+5
-11
+20
-8
-27
-11
-17
+6
+31
+2
+7
+22
+12
+13
+25
-7
-11
+19
-9
+18
+1
+7
+6
+15
+7
+11
-9
-17
-10
-6
+10
+3
-19
+14
+19
-12
-18
+2
+5
-13
-19
-11
-19
+1
+12
-11
-77534`.split('\n');

function getFrequency(changes) {
  return changes.reduce((total, change) => total + parseInt(change, 10), 0);
}

getFrequency(input1);

//
// ─── DAY 1 PUZZLE 2 ─────────────────────────────────────────────────────────────
//

/**

Your puzzle answer was 538.

The first half of this puzzle is complete! It provides one gold star: *

--- Part Two ---
You notice that the device repeats the same frequency change list over and over. To calibrate the device, you need to find the first frequency it reaches twice.

For example, using the same list of changes above, the device would loop as follows:

Current frequency  0, change of +1; resulting frequency  1.
Current frequency  1, change of -2; resulting frequency -1.
Current frequency -1, change of +3; resulting frequency  2.
Current frequency  2, change of +1; resulting frequency  3.
(At this point, the device continues from the start of the list.)
Current frequency  3, change of +1; resulting frequency  4.
Current frequency  4, change of -2; resulting frequency  2, which has already been seen.
In this example, the first frequency reached twice is 2. Note that your device might need to repeat its list of frequency changes many times before a duplicate frequency is found, and that duplicates might be found while in the middle of processing the list.

Here are other examples:

+1, -1 first reaches 0 twice.
+3, +3, +4, -2, -4 first reaches 10 twice.
-6, +3, +8, +5, -6 first reaches 5 twice.
+7, +7, -2, -7, -4 first reaches 14 twice.
What is the first frequency your device reaches twice?
 */

function getFirstRepeatedFrequency(changes) {
  const frequenciesReached = {};
  const frequenciesRepeated = [];
  let total = 0;

  const goThroughChanges = () => changes.forEach((change) => {
    total += parseInt(change, 10);
    if (frequenciesReached[total]) {
      frequenciesRepeated.push(total);
    }
    frequenciesReached[total] = true;
  });

  while (!frequenciesRepeated.length) {
    goThroughChanges();
  }

  return frequenciesRepeated[0];
}

getFirstRepeatedFrequency(input1);

/**
 * --- Day 2: Inventory Management System ---
You stop falling through time, catch your breath, and check the screen on the device. "Destination reached. Current Year: 1518. Current Location: North Pole Utility Closet 83N10." You made it! Now, to find those anomalies.

Outside the utility closet, you hear footsteps and a voice. "...I'm not sure either. But now that so many people have chimneys, maybe he could sneak in that way?" Another voice responds, "Actually, we've been working on a new kind of suit that would let him fit through tight spaces like that. But, I heard that a few days ago, they lost the prototype fabric, the design plans, everything! Nobody on the team can even seem to remember important details of the project!"

"Wouldn't they have had enough fabric to fill several boxes in the warehouse? They'd be stored together, so the box IDs should be similar. Too bad it would take forever to search the warehouse for two similar box IDs..." They walk too far away to hear any more.

Late at night, you sneak to the warehouse - who knows what kinds of paradoxes you could cause if you were discovered - and use your fancy wrist device to quickly scan every box and produce a list of the likely candidates (your puzzle input).

To make sure you didn't miss any, you scan the likely candidate boxes again, counting the number that have an ID containing exactly two of any letter and then separately counting those with exactly three of any letter. You can multiply those two counts together to get a rudimentary checksum and compare it to what your device predicts.

For example, if you see the following box IDs:

abcdef contains no letters that appear exactly two or three times.
bababc contains two a and three b, so it counts for both.
abbcde contains two b, but no letter appears exactly three times.
abcccd contains three c, but no letter appears exactly two times.
aabcdd contains two a and two d, but it only counts once.
abcdee contains two e.
ababab contains three a and three b, but it only counts once.
Of these box IDs, four of them contain a letter which appears exactly twice, and three of them contain a letter which appears exactly three times. Multiplying these together produces a checksum of 4 * 3 = 12.

What is the checksum for your list of box IDs?
 */
