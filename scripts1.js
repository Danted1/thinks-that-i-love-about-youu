
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question"); 
const image = document.querySelector(".image");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "YOUR EYEEEEEESSS...... "
    image.src = 
    "https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/413236327_695892842655738_6373304367763653737_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGo8Wvr7MUIcjEl4Gb87_3hKcQmEF__tgspxCYQX_-2C2N84iNFYexXQKajXXHIm_63Uix6LwLAEqA8v9agGkAG&_nc_ohc=dIwElJ9ylLcAX-_INMR&_nc_ht=scontent.fmnl17-3.fna&oh=03_AdTrtA4axth1K7Eue9SqaSnsJv3OTLJEn7KKp5xOdUD14w&oe=65B77571"
    alert('FIRSTTTT!!!!!!')
    yesBtn.innerHTML = 'That is the first one.'
    noBtn.innerHTML = 'The second one isss....'

})

noBtn.addEventListener('click', () => {
    question.innerHTML = "haha, jk! you really thought 2 things was enough?"
    image.src = 
    "https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.15752-9/407096775_1031988061425144_1223411092501693993_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFnRKKqO5s_1qhkwyKLNbDQt9b1VOd6huC31vVU53qG4L-mK9keaPw7i9pGTafM45I5oauT8K_0RFahvgmuBeYJ&_nc_ohc=fy4HXQswyhUAX_ZEZ1-&_nc_ht=scontent.fmnl17-1.fna&oh=03_AdSx6tfBpVlhKrrt8w7FLT3yK5VjMFCzPTTXo79Yse1pVA&oe=65B785CB"
    alert('the second one issss.......')
    alert('really?')
    alert('you really though that 2 is enough?')
    alert('jokes on you HAHA')
    noBtn.innerHTML = 'jokes on you :D'
    yesBtn.innerHTML = 'HAHA she fell for it :d'
   })