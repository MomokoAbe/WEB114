document.addEventListener('DOMContentLoaded', () => {
    const uranaiButton = document.getElementById('uranaiButton');
    const nameInput = document.getElementById('name');
    const birthdayInput = document.getElementById('birthday');
    const seizaResult = document.getElementById('seiza');
    const unseiResult = document.getElementById('unsei');
    const luckyColorResult = document.getElementById('luckyColor');
    const luckyItemResult = document.getElementById('luckyItem');
    const resultArea = document.getElementById('result');

    const unseiList = ['You will have a great day. If you want to try something new, today is the day.', 
    'You need to take care of yourself more. Relax and enjoy your own time.', 
    'You will have a rough day. Before you do something, make sure everything looks good. Do not overestimate yourself.', 
    'You are going to have a fine day. One of your usual day.', 
    'You will have a nice day. You will find something inmportant in your life.'];
    const luckyColorList = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Pink', 'Gold', 'Silver'];
    const luckyItemList = ['Books', 'Pens', 'Mug Cup', 'Flower', 'Glasses', 'Teddy Bear', 'Candy', 'Music', 'Photo'];

    function getConstellation(month, day) {
        if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            return 'Aquarius';
        } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
            return 'Pisces';
        } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
            return 'Aries'; 
        } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
            return 'Taurus';
        } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
            return 'Gemini';
        } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
            return 'Cancer';
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            return 'Leo';
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
            return 'Virgo';
        } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
            return 'Libra';
        } else if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
            return 'Scorpio';
        } else if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
            return 'Sagittarius';
        } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
            return 'Capricorn';
        } else {
            return ''; 
        }
    }  

    function getRandom(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    uranaiButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const birthday = birthdayInput.value;

        if (!name) {
            alert('Please input your name');
            return;
        }

        if (!birthday) {
            alert('Please input your birthday');
            return;
        }

        const birthdayDate = new Date(birthday);
        const month = birthdayDate.getMonth() + 1; 
        const day = birthdayDate.getDate();

        const seiza = getConstellation(month, day);
        const unsei = getRandom(unseiList);
        const luckyColor = getRandom(luckyColorList);
        const luckyItem = getRandom(luckyItemList);

        seizaResult.textContent = `${name}'s Zodiac \n${seiza}`;
        unseiResult.textContent = `${name}'s Fortune \n${unsei}`;
        luckyColorResult.textContent = `Lucky Color \n${luckyColor}`;
        luckyItemResult.textContent = `Lucky Item \n${luckyItem}`;

        resultArea.style.display = 'block';
    });

  
    resultArea.style.display = 'none';
});