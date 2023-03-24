const copyBtn = (element) => {
    console.log("copy");
    const text = "kshmine6@gmail.com";
    navigator.clipboard.writeText(text);
    const button = element.querySelector('button');
    button.innerText = "Copied";
}

const HIDDEN = "hidden"

const showing = (element) => {
    var target = element.id
    var text = document.getElementById(`${target}Text`)
    text.classList.remove(HIDDEN)
}

const notShowing = (element) => {
    var target = element.id
    var text = document.getElementById(`${target}Text`)
    text.classList.add(HIDDEN)
}

