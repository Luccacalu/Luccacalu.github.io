function cardButtonPress(e) {

    document.getElementById('firstButton1').classList.remove('cardButtonActive')
    document.getElementById('secondButton1').classList.remove('cardButtonActive')
    document.getElementById('thirdButton1').classList.remove('cardButtonActive')

    document.getElementById('firstButton2').classList.remove('cardButtonActive')
    document.getElementById('secondButton2').classList.remove('cardButtonActive')
    document.getElementById('thirdButton2').classList.remove('cardButtonActive')

    let target = e.currentTarget;
    target.classList.add('cardButtonActive');

}

function priceList(parameter){

    if(parameter==0){
        document.getElementById('firstPrice1').classList.add('show');
        document.getElementById('secondPrice1').classList.remove('show');
        document.getElementById('thirdPrice1').classList.remove('show');

        document.getElementById('firstPrice2').classList.add('show');
        document.getElementById('secondPrice2').classList.remove('show');
        document.getElementById('thirdPrice2').classList.remove('show');
    }

    else if(parameter==1){
        document.getElementById('firstPrice1').classList.remove('show');
        document.getElementById('secondPrice1').classList.add('show');
        document.getElementById('thirdPrice1').classList.remove('show');

        document.getElementById('firstPrice2').classList.remove('show');
        document.getElementById('secondPrice2').classList.add('show');
        document.getElementById('thirdPrice2').classList.remove('show');
    }

    else{
        document.getElementById('firstPrice1').classList.remove('show');
        document.getElementById('secondPrice1').classList.remove('show');
        document.getElementById('thirdPrice1').classList.add('show');

        document.getElementById('firstPrice2').classList.remove('show');
        document.getElementById('secondPrice2').classList.remove('show');
        document.getElementById('thirdPrice2').classList.add('show');
    }

}