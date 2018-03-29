const FizzBuzz = function() {
  let fzbz = [];
  for (i = 0; i < 100; i++) {
    let n = i + 1;
    let divByThree = n % 3 == 0;
    let divByFive = n % 5 == 0

    if (divByThree && divByFive) {
      fzbz[i] = "FizzBuzz";
    } else if (divByThree) {
      fzbz[i] = "Fizz";
    } else if (divByFive) {
      fzbz[i] = "Buzz";
    } else {
      fzbz[i] = n;
    }
  };
  const string = fzbz.join('&nbsp;&nbsp; &nbsp;&nbsp;');
  return string;
}

const showUser = function(e) {
  e.preventDefault()
  const o = document.getElementById('userOutput');
  o.innerHTML = FizzBuzz();
}

const fzbzEvent = function(e) {
  const btn = document.getElementById('fizzbuzzBtn');
  btn.addEventListener('click', showUser);
}

fzbzEvent();
