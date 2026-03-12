function nextStep(step) {
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.add('hidden');
    
    document.getElementById('step' + step).classList.remove('hidden');
}

let popped = 0;
function pop(el) {
    el.style.visibility = 'hidden';
    popped++;
    if(popped === 3) {
        document.getElementById('message').classList.remove('hidden');
        document.getElementById('lastBtn').classList.remove('hidden');
    }
}