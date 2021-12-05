const cssToJs = (param: string) => {
  const lines = param
    .replace('\n', '')
    .split(';')
    .filter((s) => s.match(/^([\w\- ]+:[+-=-*!@#$%^&*0-9,.()"'\-A-Za-z ]+)$/g));
  console.log(param);
  const ret: string[] = [];
  console.log(lines);
  for (let a of lines) {
    const css: string[] = a.split(/:[ ]*/g);
    const propertyName = css[0];
    const property = `'${css[1].replace(/'/g, '"')}'`;
    const newPropertyName = propertyName.replace(/\-[A-Za-z]/g, (str) =>
      str.replace('-', '').toUpperCase()
    );

    ret.push('  ' + newPropertyName.trim() + ': ' + property.trim());
  }

  return ret.join(',\n');
};

export default cssToJs;
