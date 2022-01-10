

export function parserExpression(input: string){
  const regExp = /^\s*(\d+)(\s*([-+*/])\s*(\d+)\s*)+$/g;
  return input.match(regExp)//regExp.exec(input.trim());
}