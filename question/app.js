// Q1 変数
let nickname = 'ごっしー';
let age = '28';
let intro = '私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。';

console.log(intro);

// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

let languagesText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(languagesText);

// Q3 オブジェクト
let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
};

console.log(user.age);

// Q4 配列 × オブジェクト
let playerList = [
    {
        name: 'John',
        age: 26,
        favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
        name: 'Bob',
        age: 33,
        favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
        name: 'Michael',
        age: 22,
        favorites: ['Football', 'Smash Bros.'],
    },
];

console.log(playerList[1].favorites[1]);

// Q5 四則演算
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / playerList.length);

// Q6 関数
function sayHello() {
    console.log('Hello');
}

sayHello();

let sayWorld = function () {
    console.log('World ');
}

sayWorld();
// Q7 メソッド
user.birthday = '2000-09-27';
user.sayHello = function () {
    console.log('Hello！');
}

console.log(user);
user.sayHello();

// Q8 引数
let calc = {};

calc.add = function (x, y) {
    console.log(x + y);
};

calc.add(3, 4);

calc.subtract = function (x, y) {
    console.log(x - y);
};

calc.subtract(11, 1);

calc.multiply = function (x, y) {
    console.log(x * y);
};

calc.multiply(7, 7);

calc.divide = function (x, y) {
    console.log(x / y);
};

calc.divide(25, 5);

// Q10 スコープ

let x = 1;
// 変数の定義を関数の外で行う
foo();
// メソッドの実行
function foo() {
    let x = 1;
}
console.log(x);

// 応用編 問題
// Q1 標準組み込みオブジェクト
let ceil = Math.ceil(8.05);   // 切り上げ
console.log(ceil);

// Q2 コールバック関数
// 関数 setTimeout を使用し、3 秒後に以下のようにコンソールに出力してください。
// Hello World!

setTimeout(function () {
    console.log('Hello World!');
}, 3000);

// Q3 if
let num = 1;

if (num >= 0) {
    console.log('num is greater than 0');
} if (num <= 0) {
    console.log('num is less than 0')
} if (num = 0) {
    console.log('num is 0');
}

// Q4 for
// 変数 numbers に空の配列を代入した後、0 ~ 99 までの数字を変数 numbers に全て追加し、値が追加された状態の変数 numbers をコンソールに出力してください

let numbers = [];

for (let i = 0; i < 100; i++) {
    numbers[i] = i;
}

console.log(numbers);

// Q5 for × if
// 以下の変数 mixed から 要素を一つずつ取り出し、下記条件のもと文字列をコンソールに出し分ける処理を作成してください。

let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] !== 'number') {
        console.log('not number')
    } else if (mixed[i] % 2 == 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}