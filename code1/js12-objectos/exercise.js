const people = [
    {
        name: "Joe",
        height: 180
    },
    {
        name: "Jane",
        height: 170
    },
    {
        name: "Max",
        height: 165
    }
];

// qual a media da altura?
let sum = 0;
for (let i = 0; i < people.length; i++) {
    // console.log(people[i].height);
    sum += people[i].height;
}
let avg = sum / people.length;
// avg = Math.round(avg);
avg = avg.toFixed(0);

if (avg === 172) {
    console.log("YAY!!!!");
} else {
    console.log("BOOOOO@");
}
