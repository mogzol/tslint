if (x == 3) {
    console.log("x");
}

if (y == 4)
{
    console.log("y");
}

    if (z == 5) // failure
        console.log("z");

for (i = 0; i < 1; ++i) {
    console.log("i");
}

for (j = 0; j < 1; ++j)
{
    console.log("j");
}

  for (k = 0; k < 1; ++k) // failure
      console.log("k");

for (k in l) // failure
    console.log("l");

while (m < 0) {
    console.log("q");
}

while (n < 0)
{
    console.log("r");
}

while (n < 0) // failure
    console.log("s");

do {
    console.log("m");
} while (i == 1);

do
{
    console.log("n");
}
while (j == 1);

do // failure
    console.log("o");
while (k == 1);

if (true) {
    console.log("x");
} else console.log("y"); // failure


if (true) {
    console.log("x");
} else if (true) {console.log("y")};

for (let x of [1, 2, 3]) {
    console.log(x);
}

for (let y of [1, 2, 3]) // failure
    console.log(y);
