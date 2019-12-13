function eventHandler(event) {
    sequence.push(event.key);
    if (sequence.length > 5) sequence.splice(0,1);
    if (sequence.join('') === cypher) cornify_add();
}

let sequence = [];
const cypher= 'ioana';

window.addEventListener('keyup', eventHandler);