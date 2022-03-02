function helloWebpack() {
  const element =
    document.getElementById('root') || document.createElement('div');
  element.innerHTML = 'Hello, webpack';

  return element;
}

function helloBabel() {
  const str = 'babel';
  return `Hello ${str}`;
}

document.body.appendChild(helloWebpack());

console.log(helloBabel());
