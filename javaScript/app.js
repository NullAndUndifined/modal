const btn = document.querySelector(".btn")

const modal = document.querySelector(".modal")

const modalMain = document.querySelector(".modal__main")

const cls = document.querySelector(".cls")

const btnCancel = document.querySelector(".btn-cancel")

const submit = document.querySelector("#submit")

btn.addEventListener("click",() => {
  modal.classList.add("show")
})

modal.addEventListener("click",() => {
    modal.classList.remove("show")
})

modalMain.addEventListener("click",(e) => {
    e.stopPropagation()
})

cls.addEventListener("click",() => {
    modal.classList.remove("show")
})

btnCancel.addEventListener("click",() => {
    modal.classList.remove("show")
})

submit.addEventListener("click",() => {
    alert("done")
})
