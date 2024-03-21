// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini
// alert(5%2)




// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini
// alert(Math.round(Math.random()*10))



// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!

// alert(Math.floor(12.510))





// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 

// function a(soz) {
//     var b = 0;
//     for (var i = 0; i < soz.length; i++) {
//         if (soz[i] !== ' ') {
//             b++;
//         }
//     }
//     return b;
// }

// var soz = "MARS IT SCHOOL";
// var soz2 = a(soz);
// alert("Harf :" + soz2);




// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering

// let mars = "MARS IT SCHOOL "

// console.log(mars.repeat(10));

// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]
// console.log(harflar.at(0)+harflar.at(1)+harflar.at(2)+harflar.at(19)+harflar.at(0)+harflar.at(23)+harflar.at(7)+harflar.at(11));

// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering

// let yosh = prompt('Yoshingizni Kiriting')

// if(yosh > 18){
//     console.log('Siz Balagot yoshiga yetgansiz');
// }
// else if(yosh === 18){
//     console.log('BAlogat yoshi Muborak');
// }
// else{
//     console.log('Siz Balagot yoshiga yetmagansiz');
// }



// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering

// let ismim = prompt('Ismingizni kiriting')

// console.log(ismim.split('').reverse().toString());


// 9-savol Switch case 


// Promt 1 dan 7 gacha bo'lgan raqam kiriting va kiritilgan raqam qaysi hafta kuniga to'gri kelishini chiqarib bering
// masalan 4 raqamini kiritsam console.log da("Siz kiritgan raqam haftaning Payshanba kuniga to'gri keladi") bo'lib chiqish kerak
// agar kiritilgan raqam 7 dan katta bolsa ya'ni 8 yoki 15 kiritilsa console da (Namalum raqam kiritdingiz ) deb chiqish kerak

// ввести в промпт цифру от 1 до 7, и вывести к какому дню недели он равен, если больше 7 то сказать что такого дня нет


// Javob:Kodini yozib bering





// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let b = []
// for(i=0; i<a.length; i++){
//     if(a[i] % 2 === 0){
//         b.push(a[i])
//     }
// }

// console.log(b);   


