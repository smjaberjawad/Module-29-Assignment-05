// const seats = document.getElementsByClassName('seat');
// for (const seat of seats) {
//     seat.addEventListener('click', function (e) {
//         let clickCount = 0;


//         e.target.setAttribute('disabled', true);

//         e.target.style.backgroundColor = '#1DD100';

//         const choosenSeatContainer = document.getElementById('choosen_seat_container');
//         const div = document.createElement('div');
//         div.classList.add('flex', 'justify-between', 'mt-4');
//         div.innerHTML = `
//             <h4>${e.target.innerText}</h4>
//             <h4>Economy</h4>
//             <h4>550</h4>
//         `
//         choosenSeatContainer.appendChild(div);

//         const leftSeatsId = document.getElementById('left_seats');
//         const leftSeatsText = leftSeatsId.innerText;
//         const leftSeats = parseInt(leftSeatsText);
//         const finalSeat = leftSeats - 1;
//         leftSeatsId.innerText = finalSeat;

//         const seatCounterId = document.getElementById('seat_counter');
//         const seatCounterText = seatCounterId.innerText;
//         const seatCounter = parseInt(seatCounterText);
//         seatCounterId.innerText = seatCounter + 1;

//         clickCount++;

//         if (clickCount >= 4) {
//             seat.removeEventListener('click', function () {

//             });
//         }
//     })
// }


const seats = document.getElementsByClassName('seat');
let counter = 0;

function getInnerTextById(elementId) {
    const tag = document.getElementById(elementId);
    const tagText = tag.innerText;
    const value = parseInt(tagText);
    return value;
}

function setInnerTextById(elementId, value) {
    const tag = document.getElementById(elementId);
    tag.innerText = value;
}

function seatClickHandler(e) {
    e.target.setAttribute('disabled', true);
    e.target.style.backgroundColor = '#1DD100';

    const choosenSeatContainer = document.getElementById('choosen_seat_container');
    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'mt-4');
    div.innerHTML = `
        <h4>${e.target.innerText}</h4>
        <h4>Economy</h4>
        <h4>550</h4>
    `;
    choosenSeatContainer.appendChild(div);

    const leftSeats = getInnerTextById('left_seats');
    const finalSeat = leftSeats - 1;
    setInnerTextById('left_seats', finalSeat);

    const seatCounter = getInnerTextById('seat_counter');
    const finalSeatCounter = seatCounter + 1;
    setInnerTextById('seat_counter', finalSeatCounter);

    const totalPriceBefore = getInnerTextById('total_price');
    const totalPriceNow = totalPriceBefore + 550;
    setInnerTextById('total_price', totalPriceNow);

    const grandTotalBefore = getInnerTextById('grand_total');
    const grandTotalNow = grandTotalBefore + 550;
    setInnerTextById('grand_total', grandTotalNow);

    counter++;

    if (counter === 4) {
        for (const seat of seats) {
            seat.removeEventListener('click', seatClickHandler);
        }
    }

}

document.getElementById('apply_button').addEventListener('click', function () {
    const grandTotalBefore = getInnerTextById('grand_total');

    const applyInputId = document.getElementById('apply_input');
    const applyInputValue = applyInputId.value;
    if (applyInputValue.toLowerCase() === 'new15') {
        let discount = grandTotalBefore * 0.15;
        const newGrandTotal = grandTotalBefore - discount;
        setInnerTextById('grand_total', newGrandTotal);

        const applySection = document.getElementById('apply_section');
        applySection.classList.add('hidden');
    } else if (applyInputValue.toLowerCase() === 'couple 20') {
        let discount = grandTotalBefore * 0.2;
        const newGrandTotal = grandTotalBefore - discount;
        setInnerTextById('grand_total', newGrandTotal);

        const applySection = document.getElementById('apply_section');
        applySection.classList.add('hidden');
    }
})

for (const seat of seats) {
    seat.addEventListener('click', seatClickHandler);
}