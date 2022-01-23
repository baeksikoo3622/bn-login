const userid = document.querySelector(".userid")
const username = document.querySelector(".username")
const pw = document.querySelector(".password")
const pw_check = document.querySelector(".password_check")
const btn = document.querySelector(".btn")



function register(e) {
  event.preventDefault();
  if (pw != pw_check) {
    pw.classList.add('warning');
  }
}