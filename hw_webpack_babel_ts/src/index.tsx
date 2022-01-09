import _ from 'lodash';

function helloWebpack() {
  const element = document.getElementById('root') || document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

function helloBabel(){
  let str = 'babel';
  return `Hello ${str}`;
}

document.body.appendChild(helloWebpack());

console.log(helloBabel());