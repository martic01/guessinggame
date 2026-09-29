

document.addEventListener("DOMContentLoaded", function () {
    let inptName = document.querySelector("#nameInpt")
    let inptNm = document.querySelector("#nmInpt")
    let result = document.querySelector("#result")
    let result1 = document.querySelector(".card .cardafter")
    let card = document.querySelector(".card")
    let check = document.querySelector("#check")

    check.addEventListener('click', function () {
        let name = inptName.value
        let chooseNm = parseInt(inptNm.value)

        let nm3 = 17
        if (chooseNm === nm3) {
            result.innerHTML = `<h2> <span class="trynm">${chooseNm}</span> <br> You guessed the secret number!, ${name} You are a magician! 👑</h2>`
            result.classList.remove('tooHigh', 'tooLow')
            result.classList.add('win')
            card.classList.add('is-flipped')
        } else if (chooseNm > nm3) {
            result1.innerHTML = `<h2> Number too high, You Lost</h2>`
            result1.classList.remove('win', 'tooLow')
            result1.classList.add('tooHigh')
            card.classList.remove('is-flipped')
        } else if (chooseNm < nm3) {
            result1.innerHTML = `<h2>Number too Low, You Lost</h2>`
            result1.classList.remove('win', 'tooHigh')
            result1.classList.add('tooLow')
            card.classList.remove('is-flipped')
        } else {
            alert('Enter a valid number')
        }


    })


});
