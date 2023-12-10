const uniqueInOrder = iterable => [...iterable].filter((n, i, arr) => n !== arr[i+1]);
