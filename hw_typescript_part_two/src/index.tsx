function helloWebpack() {
  const element =
    document.getElementById('root') || document.createElement('div');
  element.innerHTML = 'Typescript part 2';

  return element;
}

document.body.appendChild(helloWebpack());
