console.log('FRONTWORK')

const articles = document.querySelector('.articles')

const formEl = document.querySelector('.inputInfo')
formEl.addEventListener('submit', async (ev) => {
   ev.preventDefault();
   const formData = new FormData(ev.target)
   const result = await axios.post('/infoSend', formData)
})


const renderPage = async (arrInfo) => {
   articles.innerHTML = '';
   arrInfo.data.forEach(item => {
      articles.innerHTML =
         `
         <div class ="itemname">${item.nickname}</div>
         <div class ="itemsurname">${item.surname}</div>
      `
   })
}

renderPage()






















// console.log('IT`S FRONT JS')
// const name_inp = document.querySelector('.name_inp')
// const text_inp = document.querySelector('.text_inp')
// const submit_but = document.querySelector('.submit_but')
// const articles = document.querySelector('.articles')
// //MODEL

// //CONTROLLER

// submit_but.addEventListener('click', (event) => {
//    event.preventDefault();
//    run(name_inp.value, text_inp.value)
// })

// //VIEW

// const renderPage = async (arrInfo) => {
//    articles.innerHTML = '';
//    arrInfo.data.forEach(item => {
//       articles.innerHTML += `
//       <div class ="article_name">${item.name}
//          <div class ="article_text">${item.text}</div>
//       </div>
//       `
//    })
//    let article_name = document.querySelectorAll('.article_name')
//    let article_text = document.querySelectorAll('.article_text')
//    for (let i = 0; i < article_name.length; i++) {
//       article_name[i].addEventListener('click', (ev) => {
//          for (let i = 0; i < article_text.length; i++) {
//             if (article_text[i].classList.contains('on')) {
//                article_text[i].classList.remove('on')
//                console.log('ЦЕ ІФ ІФ ІФ')
//             }
//          }
//          ev.target.childNodes[1].classList.add('on')
//       })
//    }

// }
// //RUNNER

// const run = async (name, text) => {
//    const arrInfo = await axios.post('/ajax', { name: name, text: text })
//    renderPage(arrInfo)
// }

