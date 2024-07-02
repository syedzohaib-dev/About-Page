const historyBtn = document.querySelector('#historyBtn')
const visionBtn = document.querySelector('#visionBtn')
const goalsBtn = document.querySelector('#goalsBtn')
const historyHeading = document.querySelector('#historyHeading')
const historyPara = document.querySelector('#historyPara')

historyBtn.addEventListener('click', function () {
    historyHeading.textContent = "History"
    historyPara.textContent = "Mountains, according to the angle of view, the season, the time of day, the beholder’s frame of mind, or any one thing, can effectively change their appearance. Thus, it isessential to recognize that we can never know more than one side, one small aspect of a mountain.” Haruki Murakami..."

})

visionBtn.addEventListener('click', function () {
    historyHeading.textContent = "Vision"
    historyPara.textContent = "Mountain vision encapsulates the awe-inspiring experience of witnessing the grandeur of mountains. Whether you’re standing at their base or gazing from a distance, mountains have a unique ability to evoke a sense of wonder and adventure. Here are some key aspects of mountain vision..."

})
goalsBtn.addEventListener('click', function () {
    historyHeading.textContent = "History"
    historyPara.textContent = "Mountain goals often represent significant personal milestones. For some, it might be climbing their first mountain, while for others, it could be achieving a lifelong dream of summiting an iconic peak like Mount Everest or Kilimanjaro. Setting these goals helps individuals push their boundaries and discover their true potential...."

})