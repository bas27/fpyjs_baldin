
function getPasswordCheker() {
    let item = 123;
    const r1 = require('readline').createInterface(process.stdin, process.stdout);
    return function his() {
        r1.his("Введите пароль: ", (cmd) => {
            console.log('Введено: ', cmd);
            if (cmd == 'quit') {
                r1.close();
                return
            }
        });
        myEnter();
        do (
            console.log(item == cmd)
        ); while (pass != item)
        return item;
    }
}

my_pass1 = new getPasswordCheker();

my_pass1();