// Сортировка пузырьком                               // ассимптотическая сложность сортировки - O(n) = n^2, средняя - θ(n) = n^2
function bubbleSort(arr){
  for (let i = 0; i < arr.length - 1; i++){           // основной проход по массиву без захвата последнего элемента
    for (let j = 0; j < arr.length - i - 1; j++){     // попарный проход по массиву, за один такой проход один наибольший элемент 'всплывает' в конец массива
      if (arr[j] > arr[j + 1]){                       // проверка условия
        let temp = arr[j];                            // меняем элементы местами
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Сортировка выбором                                 // ассимптотическая сложность сортировки - O(n) = n^2, средняя - θ(n) = n^2
function selectionSort(arr){
  for (let i = 0; i < arr.length - 1; i++){           // основной проход по массиву без захвата последнего элемента
    let minIndex = i;                                 // предполагаем, что индекс минимального элемента - i, то есть на каждом проходе берем текущий элемент минимальным
    for (let j = i + 1; i < arr.length; j++){         // начиная со следующего и до конца
      if (arr[j] < arr[minIndex]){                    // если текущий элемент с индексом j меньше 'условно' меньшего, то...
        minIndex = j;                                 // берем текущий индекс минимальным
        let temp = arr[j];                            // меняем элементы местами
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// сортировка вставками                               // ассимптотическая сложность сортировки - O(n) = n^2, средняя - θ(n) = n^2
function insertionSort(arr){
  for (let i = 0; i < arr.length; i++){               // для каждого элемента массива
    let curr = arr[i],                                // берем текущий элемент как ключ, и определяем предыдущий индекс
    prevIndex = i - 1;
    while (prevIndex >= 0 && curr < arr[prevIndex]){  // пока предыдущий индекс больше или равен нулю И текущий элемент меньше предыдущего...
      arr[prevIndex + 1] = arr[prevIndex];            // прееставляем пердыдущий элемент после текущего и умеьшаем предыдущий индекс
      prevIndex--;
    }
    arr[prevIndex + 1] = curr;                        // ничего не меняется
  }
  return arr;
}

// быстрая сортировка                                 // ассимптотическая сложность сортировки - O(n) = n^2, средняя - θ(n) = nlog(n)
function quickSort(arr){
  if (arr.length < 2){                                // условие выхода из рекурсии
    return arr;
  } else {
    let pivot = arr[Math.floor(Math.random() * arr.length)]; // выбираем опорный элемент, в данном случае случайно из элементов массива
    let less = [];                                           // создаем массив меньших элементов
    let more = [];                                           // создаем массив больших элементов
    for (let i = 0; i < arr.length; i++){                    // для каждого элемента массива
      if (arr[i] >= pivot){                                   // проверяем , если он больше опорного, то добавляем в массив more
        more.push(arr[i]);
      }
      if (arr[i] < pivot){                                   // проверяем , если он меньше опорного, то добавляем в массив less
        less.push(arr[i]);
      }
    }
    return [...quickSort(less), pivot, ...quickSort(more)];  // рекурсивно вызываем для массивов less и more
  }
}

// Сортировка слиянием                                 // ассимптотическая сложность сортировки - O(n) = nlog(n), средняя - θ(n) = nlog(n)
function mergeSort(arr){
  if (arr.length < 2) return arr;                      // если длина массива 1, то возвращаем массив - условие выхода из рекурсии
  let middle = Math.floor(arr.length / 2);             // выбираем индекс посередине делимого массива
  let leftArr = arr.slice(0,middle);                   // в массив leftArr кладем элементы слева от middle
  let rightArr = arr.slice(middle,arr.length);         // в массив rightArr кладем элементы справа от middle
  
  return merge(mergeSort(leftArr),mergeSort(rightArr));// возвращаем результат слияния рекурсивно вызываемых функций
}

function merge(left,right){
  let result = [];                                     // создаем пустой массив для результата
  while (left.length && right.length){                 // сортируем переданные массивы
    if (left[0] <= right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());      // если в массиве осталиь элементы - добавляем их в результат
  while (right.length) result.push(right.shift());    // если в массиве осталиь элементы - добавляем их в результат
  return result;
}

