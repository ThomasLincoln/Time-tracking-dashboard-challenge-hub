let daily_btn = document.getElementById("daily")
let work_hours = document.getElementsByClassName("h -work")
let work_pre = document.getElementsByClassName("pre -work")
let play_hours = document.getElementsByClassName("h -play")
let play_pre = document.getElementsByClassName("pre -play")
let study_hours = document.getElementsByClassName("h -study")
let study_pre = document.getElementsByClassName("pre -study")
let exercise_hours = document.getElementsByClassName("h -exercise")
let exercise_pre = document.getElementsByClassName("pre -exercise")
let social_hours = document.getElementsByClassName("h -social")
let social_pre = document.getElementsByClassName("pre -social")
let selfcare_hours = document.getElementsByClassName("h -selfcare")
let selfcare_pre = document.getElementsByClassName("pre -selfcare")

function selecao(){
    daily_btn.style.color="rgb(201, 201, 201)"
    work_hours[0].innerHTML = "5hrs"
    work_pre[0].innerHTML = "Previous - 7hrs"
    play_hours[0].innerHTML = "1hr"
    play_pre[0].innerHTML = "Previous - 2hrs"
    study_hours[0].innerHTML = "0hrs"
    study_pre[0].innerHTML = "Previous - 1hr"
    exercise_hours[0].innerHTML = "1hr"
    exercise_pre[0].innerHTML = "Previous - 1hr"
    social_hours[0].innerHTML = "1hr"
    social_pre[0].innerHTML = "Previous - 1hr"
    selfcare_hours[0].innerHTML = "0hrs"
    selfcare_pre[0].innerHTML = "Previous - 1hr"
}
