var encryptThis = function (text) {
  return text
    .split(" ")
    .map((n) => {
      //second = last, last = second
      if (n.length > 2) {
        let arr = n.split(""),
          temp = n[1];

        arr.splice(1, 1, n[n.length - 1]);
        arr.splice(n.length - 1, 1, temp);

        n = arr.join("");
      }

      //first to ascii code
      n = n.replace(n[0], n.charCodeAt(n[0]));

      return n;
    })
    .join(" ");
};
