//alert('Hello! Oleg')
// Объявление
var name = 'Ivan';
function writeMessage(message,counter){
    alert(name);
    name = prompt('Как тебя зовут?');
    alert(message + name);
}
// Вызов
//writeMessage('Сколько тебе лет?');
//writeMessage('Как ты себя чувствуешь, ');
writeMessage('Как быстро достать 1000 рублей');
alert(name);