function dup(s) {
    return s.map(word => [...word].filter((n, i) => n !== word[i+1]).join(''))
  };