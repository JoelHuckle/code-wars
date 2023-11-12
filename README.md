# Code Wars
Every day I do a code wars challenge to keep my JavaScript sharp and post it here.
![My Codewars Profile](/assets/code-wars-profile.png)

## How It's Made:
**Tech used:** JavaScript
After submitting a successful code wars challenge, I copy it to a JS file and push it to this repo. I have organised each challenge by kyu in their respective folders.

## Optimizations
I often go back to files to optimise their speed, readability or level of DRYness.

**Example (dirReduc.js):**

```function dirReduc(arr) {
  const conflicts = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  let conflict = true;

  while (conflict) {
    conflict = false;

    arr.forEach((n, i) => {
      if (conflicts[arr[i]] == arr[i + 1]) {
        arr.splice(i, 2);
        conflict = true;
      }
    });
  }
  return res;
}```

