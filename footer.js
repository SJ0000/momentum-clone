const footerContainer = document.querySelector(".js-footer");
const footerText = footerContainer.querySelector(".footer__text");

const wiseSayings = [
  '"한낱 빛 따위가 어둠의 깊이를 어찌 알랴."',
  '"춤추는 별을 잉태하려면 반드시 스스로의 내면에 혼돈을 지녀야 한다."',
  '"아무것도 성취하지 못했을지라도 자신을 존경하라. 거기에 상황을 바꿀 힘이 있으니. 자신을 함부로 비하하지 말라. 멋진 인생을 만드는 첫걸음은 바로 자신을 존경하는 것이다."',
  '"상처에 의해 정신은 고양되고, 새 힘은 솟아 오른다."'
];

//명언 가져옴
function getMessages() {
  const randomNum = Math.floor(Math.random() * wiseSayings.length);
  return wiseSayings[randomNum];
}

function paintText() {
  footerText.innerText = getMessages();
}

function init() {
  paintText();
}

init();
