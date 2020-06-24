function moveEye(m, eye) {
    const [iris, retina] = eye.children

    const [eyeWidth, eyeHeight] = [eye.offsetWidth, eye.offsetHeight];
    const [pageWidth, pageHeight] = [window.innerWidth, window.innerHeight];

    const eyePosition = document.querySelector('.eye').getBoundingClientRect()
    const [eyePositionX, eyePositionY] = [eyePosition.x, eyePosition.y]
    const [centerX, centerY] = [eyePositionX + eyeWidth / 2, eyePositionY + eyeHeight / 2];

    const [widthFromEyeAsPointZero, heightFromEyeAsPointZero] = [pageWidth - centerX, pageHeight - centerY]

    let [tx, ty] = [0, 0];

    const [xChangeFromCenter, yChangeFromCenter] = [
        m.pageX - centerX,
        m.pageY - centerY,
    ];

    const [propChangeX, propChangeY] = [
        (xChangeFromCenter * 100) / widthFromEyeAsPointZero,
        (yChangeFromCenter * 100) / heightFromEyeAsPointZero,
    ];

    rx = xChangeFromCenter / centerX;
    ry = yChangeFromCenter / centerY;

    switch (true) {
        case Math.abs(ry) < 0.4:
            ry= 0;
            break;
    }

    ry = ry > 0 ? -Math.abs(ry) : Math.abs(ry)

    tx = (propChangeX * 100) / (eyeWidth / 1.2);
    ty = (propChangeY * 100) / (eyeHeight / 1.2);

    iris.style.transform =
        `rotate3d(${ry}, ${0}, ${45}deg)
        translate(${tx}px, ${ty}px)`;
    retina.style.transform =
        `rotate3d(${ry}, ${rx}, ${0}, ${45}deg)
        translate(${tx}px, ${ty}px`;
}

window.addEventListener("mouseover", (e) => {
    document.querySelectorAll('.eye')
        .forEach(eye => moveEye(e, eye))
});

window.addEventListener("click", (e) => {
    document.querySelectorAll('.eye')
        .forEach(eye => moveEye(e, eye))
});

window.addEventListener("touchstart", (e) => {
    document.querySelectorAll('.eye')
        .forEach(eye => moveEye(e, eye))
});
