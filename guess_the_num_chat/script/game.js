window.addEventListener("load", GuessTheNum);

function restartGame(){
    window.location.reload();
}
function sendAnswer(inputNum, resultText) {
    var inputNumMessage = inputNum;
    var resultTextMessage = resultText;
  
    if (inputNumMessage !== "") {
      var chatBlock = document.getElementById("chat-block");
      var inputNumMessageForm = document.createElement("div");
      var resultTextMessageForm = document.createElement("div");


      inputNumMessageForm.classList.add("input_num_message");
      inputNumMessageForm.textContent = inputNumMessage;

      resultTextMessageForm.classList.add("result_text_message");
      resultTextMessageForm.textContent = resultTextMessage;


      chatBlock.appendChild(inputNumMessageForm);
      chatBlock.appendChild(resultTextMessageForm);
  

      inputNum.value = "";
      resultText = "";
      chatBlock.scrollTop = chatBlock.scrollHeight;
    }
}

function GuessTheNum() {
    const btn = document.querySelector(".send_num");
    let inputnum;
    let resultText;
    let randomnum = 1 + Math.floor(Math.random() * 10);

    btn.onclick = function Game() {
        inputnum = document.querySelector(".input_num").value;

        if (inputnum > 10 || inputnum < 1) {
            resultText = "Загаданное число в диапазоне от 1 до 10 🤨"
        }
        else
        {
            if (inputnum > randomnum) {
                resultText = "Загаданное число меньше😎"
            }
                    
            else if (inputnum < randomnum) {
                resultText = "Загаданное число больше🤩"
            }
            else {
                resultText = "Наконец - то ты выиграл, поздравляю!🤡"
                inputnum.disabled = true;
                btn.disabled = true;
            }
        }
        sendAnswer(inputnum, resultText)
    } 
}