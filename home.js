const copyBtn = (element) => {
    console.log("copy");
    const text = "kshmine6@gmail.com";
    navigator.clipboard.writeText(text);
    const button = element.querySelector('button');
    button.innerText = "Copied";
}