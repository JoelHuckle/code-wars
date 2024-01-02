const hello = name => `Hello, ${name ? name.toLowerCase().replace(/(^.)/, (match) => match.toUpperCase()) : 'World'}!`;
