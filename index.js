// Завдання 1
/**
 * Функція `generateRandomPassword` генерує випадковий пароль заданої довжини.
 *
 * length - довжина пароля.
 *
 * Повертає випадковий пароль.
 */
function generateRandomPassword(length) {
  // Перевірка, чи передана довжина пароля є цілим числом більше за 0
  if (!Number.isInteger(length) || length <= 0) {
    return "Помилка: довжина пароля має бути цілим числом більше за 0";
  }

  // Створюємо порожній рядок для збереження паролю
  let password = "";

  // Створюємо рядок characters з доступних символів для паролю
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // За допомогою циклу for проходимось по кожному символу рядка characters
  for (let i = 0; i < length; i++) {
    // Визначаємо випадковий індекс символу зі списку characters
    let randomIndex = Math.floor(Math.random() * characters.length);

    // Отримуємо символ з випадковим індексом та додаємо його до паролю
    password += characters.charAt(randomIndex);
  }

  // Повертаємо випадковий пароль
  return password;
}

console.log("Завдання: 1 ==============================");
console.log(generateRandomPassword(8));
// Виведе випадковий пароль довжиною 8 символів.

// Завдання 2
/**
 * Функція `calculateCircleArea` обчислює площу кола на основі його радіуса.
 *
 *  radius - Радіус кола.
 * Поверне: Площу кола.
 */
function calculateCircleArea(radius) {
  // Перевірка, чи переданий радіус є числом.
  if (typeof radius !== "number" || isNaN(radius)) {
    console.error("Помилка: радіус має бути числом.");
    return null;
  }

  // Обчислення площі кола за формулою PI * r^2, де PI - число Пі, а r - радіус.
  let area = Math.PI * radius ** 2;

  // Повертаємо обчислену площу кола.
  return area;
}

console.log("Завдання 2 ==============================");
console.log(calculateCircleArea(5));
// Виведе площу кола з радіусом 5, наприклад 78.53981633974483.

// Завдання 3
/**
 * Функція `findMinMax` знаходить мінімальне та максимальне число в масиві.
 *
 *  numbers - Масив чисел.
 * Поверне: Об'єкт, що містить мінімальне та максимальне число.
 */
function findMinMax(numbers) {
  // Перевіряємо, чи переданий параметр є масивом.
  if (!Array.isArray(numbers)) {
    console.error("Помилка: вхідний параметр має бути масивом.");
    return null;
  }

  // Якщо масив порожній, повертаємо null, оскільки немає чисел для знаходження мінімуму та максимуму.
  if (numbers.length === 0) {
    console.error("Помилка: масив порожній.");
    return null;
  }

  // Знаходимо мінімальне та максимальне значення в масиві.
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  // Повертаємо об'єкт, що містить знайдені мінімальне та максимальне число.
  return { min, max };
}

console.log("Завдання 3 ==============================");
console.log(findMinMax([5, 2, 9, 1, 5, 6, 7, 8]));
// Виведе об'єкт, що містить мінімальне (1) та максимальне (9) числа.

// Завдання 4
/**
 * Функція `calculateHypotenuse` обчислює довжину гіпотенузи прямокутного трикутника за довжинами його катетів.
 *
 *  a - Довжина першого катета.
 *  b - Довжина другого катета.
 * Поверне: Довжину гіпотенузи.
 */
function calculateHypotenuse(a, b) {
  // Перевіряємо, чи довжини катетів є числами.
  if (typeof a !== "number" || typeof b !== "number") {
    console.error("Помилка: довжини катетів мають бути числами.");
    return null;
  }

  // Обчислюємо довжину гіпотенузи за теоремою Піфагора.
  let c = Math.sqrt(a * a + b * b);

  // Повертаємо обчислену довжину гіпотенузи.
  return c;
}

console.log("Завдання 4 ==============================");
console.log(calculateHypotenuse(3, 4));
// Виведе довжину гіпотенузи для прямокутного трикутника з катетами довжиною 3 та 4, що дорівнює 5.

// Завдання 5
/**
 * Функція `roundObjectValues` заокруглює значення всіх числових властивостей об'єкта.
 *
 *  obj - Об'єкт для обробки.
 *  Поверне: Об'єкт з заокругленими значеннями числових властивостей.
 */
function roundObjectValues(obj) {
  // Перевіряємо, чи аргумент є об'єктом та не є null.
  if (typeof obj !== "object" || obj === null) {
    console.error("Помилка: аргумент має бути об'єктом.");
    return null;
  }

  // Отримуємо масив пар [ключ, значення] з об'єкта.
  let entries = Object.entries(obj);

  // Перебираємо кожну пару [ключ, значення].
  let roundedEntries = entries.map(([key, value]) => {
    // Перевіряємо, чи значення є числом.
    if (typeof value === "number") {
      // Якщо значення є числом, округлюємо його до найближчого цілого.
      value = Math.round(value);
    }
    // Повертаємо нову пару [ключ, заокруглене значення].
    return [key, value];
  });

  // Конвертуємо масив пар [ключ, значення] назад в об'єкт.
  let roundedObject = Object.fromEntries(roundedEntries);

  // Повертаємо новий об'єкт з заокругленими значеннями числових властивостей.
  return roundedObject;
}

console.log("Завдання 5 ==============================");
const myObject = {
  a: 3.5,
  b: 2.2,
  c: "not a number",
  d: 4.9,
};
console.log(roundObjectValues(myObject));
// Виведе:
// { a: 4, b: 2, c: "not a number", d: 5 }

// Завдання 6
/**
 * Функція `calculateVolumeCylinder` обчислює об'єм циліндра за заданими радіусом і висотою.
 *
 *  radius - радіус основи циліндра.
 *  height - висота циліндра.
 * Поверне: Об'єм циліндра.
 */
function calculateVolumeCylinder(radius, height) {
  // Перевірка, чи є радіус і висота числами.
  if (typeof radius !== "number" || typeof height !== "number") {
    console.error("Помилка: радіус і висота повинні бути числами.");
    return null;
  }

  // Обчислення об'єму циліндра за формулою V = PI * r^2 * h, де PI - число Пі, r - радіус, h - висота.
  let volume = Math.PI * Math.pow(radius, 2) * height;

  // Округлення об'єму до найближчого меншого цілого числа.
  volume = Math.floor(volume);

  // Повертаємо обчислений об'єм.
  return volume;
}

console.log("Завдання 6 ==============================");
console.log(calculateVolumeCylinder(3, 5));
// Виведе 142

// Завдання 7
/**
 * Функція `sumPositiveNumbers` обчислює суму додатніх чисел у масиві.
 *
 * numbers - масив чисел.
 * Поверне: Сума додатніх чисел.
 */
function sumPositiveNumbers(numbers) {
  // Перевірка, чи є numbers масивом.
  if (!Array.isArray(numbers)) {
    console.error("Помилка: аргумент має бути масивом чисел");
    return null;
  }

  // Ініціалізація змінної для збереження суми додатніх чисел.
  let sum = 0;

  // Проходимо по всіх числах у масиві за допомогою циклу for.
  for (let number of numbers) {
    // Перевіряємо, чи є поточне число додатним.
    if (Math.sign(number) === 1) {
      // Якщо число додатнє, додаємо його до суми.
      sum += number;
    }
  }

  // Повертаємо суму додатніх чисел.
  return sum;
}

console.log("Завдання 7 ==============================");
console.log(sumPositiveNumbers([-5, 3, 2, -1, 7, -6]));
// Виведе 12

// Завдання 8
/**
 * Функція `getFractionalPart` виводить дробову частину числа.
 * num - число.
 * Поверне: дробова частина числа.
 */
function getFractionalPart(num) {
  // Перевірка, чи є num числом.
  if (typeof num !== "number") {
    console.error("Помилка: вхідний аргумент має бути числом.");
    return null;
  }

  // Округлення числа відкиданням дробової частини.
  const integerPart = Math.trunc(num);

  // Вирахування дробової частини.
  const fractionalPart = num - integerPart;

  // Повернення дробової частини числа.
  return fractionalPart;
}

console.log("Завдання 8 ==============================");
console.log(getFractionalPart(12.34567));
// Виведе дробову частину числа, наприклад 0.34567001461982727

// Завдання 9
/**
 * Функція `compareAndRound` порівнює два числа та повертає найбільше число округлене до найближчого цілого.
 *
 *  num1 - Перше число.
 *  num2 - Друге число.
 *  Поверне: Найбільше число округлене до найближчого цілого.
 */
function compareAndRound(num1, num2) {
  // Перевірка, чи обидва аргументи є числами.
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.error("Помилка: обидва аргументи мають бути числами.");
    return null;
  }

  // Визначення найбільшого числа.
  const maxNumber = Math.max(num1, num2);

  // Округлення найбільшого числа до найближчого цілого.
  const roundedNumber = Math.round(maxNumber);

  // Повернення округленого числа.
  return roundedNumber;
}

console.log("Завдання 9 ==============================");
console.log(compareAndRound(13.4, 15.7));
// Виведе 16.

// Завдання 10
/**
 * Функція `estimateInvestment` оцінює прибуток від інвестицій з фіксованою річною процентною ставкою за задану кількість років.
 *
 *  principal - Початкова сума інвестицій.
 *  interestRate - Річна процентна ставка в десяткових дробах (наприклад, 5% = 0.05).
 *  years - Кількість років.
 *  Поверне: Оцінку суми прибутку від інвестицій.
 */
function estimateInvestment(principal, interestRate, years) {
  // Перевірка, чи усі аргументи є числами.
  if (
    typeof principal !== "number" ||
    typeof interestRate !== "number" ||
    typeof years !== "number"
  ) {
    console.error("Помилка: усі аргументи мають бути числами.");
    return null;
  }

  // Розрахунок суми інвестицій за формулою P*(1+rate)^years,
  // де P - початкова сума інвестицій, rate - річна процентна ставка, years - кількість років.
  const amount = principal * Math.pow(1 + interestRate, years);

  // Округлення до найближчого цілого.
  const roundedAmount = Math.round(amount);

  // Повернення розрахованої суми інвестицій.
  return roundedAmount;
}

console.log("Завдання 10 ==============================");
console.log(estimateInvestment(1000, 0.05, 5));
// Виведе  1276.

// Завдання 11
/**
 * Функція `isTotalPriceExceedsMaxPrice` приймає масив з об'єктами {price, title} та maxPrice.
 * Кожен об'єкт містить властивість price як дробове число.
 * Функція обраховує суму всіх price (totalPrice), конвертує totalPrice та maxPrice за допомогою Math.fround
 * і перевіряє чи не перевищує totalPrice maxPrice.
 *
 * products - масив з об'єктами {price, title}.
 * maxPrice - максимальна сума.
 * Повертає чи перевищує totalPrice maxPrice.
 */
function isTotalPriceExceedsMaxPrice(products, maxPrice) {
  // Перевірка, чи products є масивом.
  if (!Array.isArray(products)) {
    console.error("Помилка: перший аргумент має бути масивом.");
    return null;
  }

  // Перевірка, чи maxPrice є числом.
  if (typeof maxPrice !== "number") {
    console.error("Помилка: другий аргумент має бути числом.");
    return null;
  }

  // Обчислення загальної ціни за допомогою методу reduce().
  const totalPrice = products.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  // Конвертація totalPrice та maxPrice за допомогою Math.fround.
  const roundedTotalPrice = Math.fround(totalPrice);
  const roundedMaxPrice = Math.fround(maxPrice);

  // Порівняння, чи не перевищує totalPrice maxPrice.
  return roundedTotalPrice > roundedMaxPrice;
}

console.log("Завдання 11 ==============================");
let products = [
  { title: "Product 1", price: 0.4 },
  { title: "Product 2", price: 0.23 },
  { title: "Product 3", price: 0.109 },
  { title: "Product 4", price: 0.7564 },
  { title: "Product 5", price: 0.33456 },
  { title: "Product 6", price: 0.897654 },
];
let maxPrice = 3.567894;
console.log(isTotalPriceExceedsMaxPrice(products, maxPrice));
// Виведе: false
