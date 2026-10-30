// VIBECODED!!!!
document.getElementById('scare-btn').addEventListener('click', function(e) {
    const bwaaa = document.createElement('div');
    bwaaa.classList.add('fly-text');
    bwaaa.innerText = 'bwaaaaa~~';

    const randomX = (Math.random() - 0.5) * 160;
    const randomRot = (Math.random() - 0.5) * 40;

    bwaaa.style.left = `calc(50% + ${randomX}px)`;
    bwaaa.style.bottom = '70px';
    bwaaa.style.setProperty('--rot', `${randomRot}deg`);

    document.body.appendChild(bwaaa);

    setTimeout(() => {
        bwaaa.remove();
    }, 1000);
});

