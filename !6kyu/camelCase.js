function toCamelCase(str) {
  return (
    str
      //character class checking for underscore or dash, saves capital in capture one
      .replace(
        /[_-](\w)/gi,
        //match refers to the entire regex statement, capture class converted to upper case
        (match, p1) => p1.toUpperCase()
      )
  );
}
