const cssToJs = (param: string) => {
  const lines = param
    .replace(/{}/g, '')
    .split(';')
    .filter((s) => s.match(/^([\w\-]+:[+-=-*!@#$%^&*0-9,.()"'\-A-Za-z ]+)$/g));
  const ret: string[] = [];
  console.log(lines);
  for (let a of lines) {
    const css: string[] = a.split(/:[ ]*/g);
    const propertyName = css[0];
    const property = `'${css[1].replace(/'/g, '"')}'`;
    const newPropertyName = propertyName.replace(/\-[A-Za-z]/g, (str) =>
      str.replace('-', '').toUpperCase()
    );

    ret.push(newPropertyName + ': ' + property);
  }
  console.log(ret.join(',\n'));
  return ret.join(',\n');
};

module.exports = cssToJs;
