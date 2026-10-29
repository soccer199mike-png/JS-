// let text = 'JavaScriptの練習';
// console.log(text);
// // 以下を追記
// text = 'JavaScriptをマスターした';
// console.log(text);

// // 処理①
// let longText =
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
// console.log(longText);
// console.log(longText);
// console.log(longText);

// // 処理②
// console.log(
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
// );
// console.log(
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
// );
// console.log(
//   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
// );

// let age = 23;
// console.log(age);

// let testText;
// console.log(testText); // => undefined

// let again = '定義しました';
// again = '再代入はできます';

// again = '再定義します'; // Uncaught SyntaxError: Identifier 'again' has already been declared

// console.log(again);

// const constant = 'これは定数です';
// // constant = '再代入できません。'; // Uncaught TypeError: Assignment to constant variable.というエラーが出る

// console.log('elephant'); // => elephant が出力される
// // console.log(elephant); // => Uncaught ReferenceError: elephant is not defined というエラーが出力される

// let name = 'ジョニー';
// let greet = '私は' + name + '！';
// console.log(greet);

// let template = 'テンプレートリテラル'; // ※ これは文字列
// let templateText = `これが${template}です。
// ${template}は改行もできます。`; // これはテンプレートリテラル
// console.log(templateText);

// let num = 10;
// console.log(num);

// let numTen = 10;
// let strTen = '10'; // 追記
// console.log(numTen, strTen); // 値を追加

// // 加算（足し算）

// let num1 = 25;
// let num2 = 2;

// console.log(num1 + num2);
// // // 減算（引き算）

// // console.log(num1 - num2); // - に変更
// // // 乗算（掛け算）

// // console.log(num1 * num2); // * に変更
// // // 除算（割り算）

// // console.log(num1 / num2); // / に変更

// let number = 5;
// number = number + 3;
// console.log(number);

// // let number = 5;
// // number += 3; // number = number + 3と同じ
// // console.log(number);

// // 以下を追記
// // number -= 1; // number = number - 1と同じ
// // console.log(number);
// // number *= 5; // number = number * 5と同じ
// // console.log(number);
// number /= 7; // number = number / 7と同じ
// console.log(number);

// let increment = 0;
// console.log(increment);
// increment++; // increment += 1と同じ
// console.log(increment);

// let decrement = 10;
// console.log(decrement);
// decrement--; // decrement -= 1と同じ
// console.log(decrement);

// // 剰余（割った余り）

// let bigNum = 25;
// let smallNum = 2;

// console.log(bigNum % smallNum); // 25 / 2 = 12 あまり 1 なので1が表示される
// console.log(bigNum ** smallNum); // 25の2乗なので、25 * 25となり、625が表示される

// let stringNum1 = '25';
// let stringNum2 = '2';

// console.log(stringNum1 + stringNum2);

// let stringNum = '25';
// let numberNum = 2;

// console.log(stringNum + numberNum); // => 252

// let name1 = 'John';
// let name2 = 'Bob';
// let name3 = 'Michael';
// let name4 = 'Emma';

// // let names = ['John', 'Bob', 'Michael', 'Emma'];
// // console.log(names);

// let empties = []; // 空の配列が変数emptiesに代入されている

let names = ['John', 'Bob', 'Michael', 'Emma'];

console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);

// // let John = ['John', '26', 'A', 'card'];

// let John = {
//   name: 'John', // key（キー）: value（バリュー）
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
//   sing: function () {
//     console.log('LA~LA~LA~~~♪');
//   }
// };

// console.log(John.sing); // => A
// John.sing();

// let Andy = {};

// Andy.name = 'Andy';
// Andy.age = 19;
// Andy.bloodType = 'B';
// Andy.favorite = 'sweets';

// console.log(Andy.bloodType); // => B

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

doFunc(function () {
  console.log('コールバック関数が呼び出されました');
});

// let round = Math.round(2.86); // 四捨五入
// console.log('round => ', round);

// let ceil = Math.ceil(4.05);   // 切り上げ
// console.log('ceil => ', ceil);

// let floor = Math.floor(4.98); // 切り下げ
// console.log('floor => ', floor);

// let random = Math.random(); // 0~1までの乱数の生成
// console.log('random => ', random);

// if (true) {
//   console.log('trueです！');
// }
// console.log('処理が終わりました');

// let tall = 185;
// if (tall >= 180) {
//   console.log('高身長です');
// }

// let val = 26;
// console.log(val >= 20);
// console.log(val === '26');
// console.log(val == '26');
// console.log('hello' === 'world');

// let errMsg = '';

// // if 文を使った書き方


// // 三項演算子を使った書き方
// errMsg === 'ある！' ? console.log('ない！') : console.log('ある！');

let number = 1;

// numberを2で割った時
// 割り切れたら「偶数です」、割り切れなかったら「奇数です」
// という文字列をtextに代入する
let text = number % 2 === 0 ? '偶数です' : '奇数です';
console.log(text); // 奇数です

if (0) {
    console.log('hoge');
}

if (5) {
    console.log('piyo');
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

