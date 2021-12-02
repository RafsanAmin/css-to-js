const cssToJs = (param) => {
    const lines = param
        .replace(/{}/g, '')
        .split(';')
        .filter((s) => s);
    const ret = [];
    console.log(lines);
    for (let a of lines) {
        if (a.match(/^([\w\-]+:[+-=-*!@#$%^&*0-9,.()"'\-A-Za-z ]+)$/g)) {
            const css = a.split(/:[ ]*/g);
            const propertyName = css[0];
            const property = `'${css[1].replace(/'/g, '"')}'`;
            const newPropertyName = propertyName.replace(/\-[A-Za-z]/g, (str) => str.replace('-', '').toUpperCase());
            ret.push(newPropertyName + ': ' + property);
        }
        else {
        }
    }
    console.log(ret.join(',\n'));
    return ret.join(',\n');
};
module.exports = cssToJs;
