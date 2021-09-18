let daily_btn = document.getElementById("daily")
let weekly_btn = document.getElementById("weekly")
let monthly_btn = document.getElementById("monthly")

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



function daily() {
    daily_btn.style.color = "rgb(201, 201, 201)"
    weekly_btn.style.color = "hsl(235, 45%, 61%)"
    monthly_btn.style.color = "hsl(235, 45%, 61%)"
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

function weekly(){
    daily_btn.style.color = "hsl(235, 45%, 61%)"
    weekly_btn.style.color = "rgb(201, 201, 201)"
    monthly_btn.style.color = "hsl(235, 45%, 61%)"
    work_hours[0].innerHTML = "32hrs"
    work_pre[0].innerHTML = "Previous - 36hrs"

    play_hours[0].innerHTML = "10hrs"
    play_pre[0].innerHTML = "Previous - 8hrs "

    study_hours[0].innerHTML = "4hrs"
    study_pre[0].innerHTML = "Previous - 7hrs"

    exercise_hours[0].innerHTML = "4hrs "
    exercise_pre[0].innerHTML = "Previous - 5hrs"

    social_hours[0].innerHTML = "5hrs "
    social_pre[0].innerHTML = "Previous - 10hrs"

    selfcare_hours[0].innerHTML = "2hrs"
    selfcare_pre[0].innerHTML = "Previous - 2hrs"
}

function monthly(){
    daily_btn.style.color = "hsl(235, 45%, 61%)"
    weekly_btn.style.color = "hsl(235, 45%, 61%)"
    monthly_btn.style.color = "rgb(201, 201, 201)"
    work_hours[0].innerHTML = "103hrs "
    work_pre[0].innerHTML = "Previous - 128hrs"

    play_hours[0].innerHTML = "23hrs"
    play_pre[0].innerHTML = "Previous - 29hrs"

    study_hours[0].innerHTML = "13hrs"
    study_pre[0].innerHTML = "Previous - 19hrs"

    exercise_hours[0].innerHTML = "11hrs "
    exercise_pre[0].innerHTML = "Previous - 18hrs"

    social_hours[0].innerHTML = "21hrs "
    social_pre[0].innerHTML = "Previous - 23hrs"

    selfcare_hours[0].innerHTML = "7hrs"
    selfcare_pre[0].innerHTML = "Previous - 11hrs"
}