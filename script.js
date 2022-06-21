//LAB 7

let secretNumber = 20;
let score = 20;
let highestRecord = 0;

  //tạo ra 1 số ngẫu nhiên và tạo giá trị bên trong các thẻ span
  document.addEventListener('Loaded', function () {
  document.querySelector('.score').textContent = '💯 Score: ' + score;
  document.querySelector('.message').textContent = 'Your Guess!';
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.record').textContent = '🥇 Highest Score: ' + 0;
});

//tạo sự kiện click cho thẻ button để kiểm tra giá trị nhập vào với số ngẫu nhiên
document.querySelector('.check-btn').addEventListener('click', function () {
  let inputNumber = Number(document.querySelector('.guess-number').value);

  //kiểm tra giá trị nhập vào có phải là số không và trong khoảng từ 1 đến 20 không
  if (inputNumber=="" || isNaN(inputNumber)) {
    alert("Please enter a number!");
    return;
  }else if(typeof inputNumber != "number"){
    alert("Please enter a number!");
    return;
  }else if(inputNumber > 20 || inputNumber < 1){
    alert("Please enter a number between 1 and 20!");
    return;
  }

  
  //kiểm tra giá trị nhập vào với số ngẫu nhiên
  if (inputNumber == secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#DC143C';
    if (score > highestRecord) {
      document.querySelector('.record').textContent =
        '🥇 Highest Score: ' + score;
    }
    return;
  } else if (inputNumber < secretNumber) {
    document.querySelector('.message').textContent = 'You guess is too small!';
    score--;
  } else {
    document.querySelector('.message').textContent = 'You guess is too large!';
    score--;
  }
  document.querySelector('.score').textContent = '💯 Score: ' + score;
});

//LAB10
//tạo sự kiện click cho thẻ button để reset lại trạng thái ban đầu
document.querySelector('.again-btn').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = '💯 Score: ' + score;
  document.querySelector('.message').textContent = 'Your Guess!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'rgba(116, 231, 101, 0.9)';
  document.querySelector('.guess-number').value = "";
});
