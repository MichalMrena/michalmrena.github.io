const mode_key = "mode";
const light_mode_str = "light";
const dark_mode_str = "dark";
const dark_mode_class = "dark-mode";

function initModeClass(body) {
    const mode = localStorage.getItem(mode_key);
    if (mode == dark_mode_str) {
        body.classList.add(dark_mode_class);
    }
}

function setModeStuff(body, button) {
    const mode = body.classList.contains(dark_mode_class) ? dark_mode_str : light_mode_str;
    const codeCssLink = document.getElementById("pandoc-css");

    if (mode == light_mode_str) {
        button.textContent = "Lights off";
        localStorage.setItem(mode_key, light_mode_str);
        if (codeCssLink) {
            codeCssLink.setAttribute("href", "../css/code-pandoc-light.css");
        }
    } else {
        button.textContent = "Lights on";
        localStorage.setItem(mode_key, dark_mode_str);
        if (codeCssLink) {
            codeCssLink.setAttribute("href", "../css/code-pandoc-dark.css");
        }
    }
}

window.onload = () => {
    const body = document.querySelector("body");
    const button = document.getElementById("dark-mode-toggle");

    initModeClass(body);
    setModeStuff(body, button);

    button.onclick = () => {
        body.classList.toggle(dark_mode_class);
        setModeStuff(body, button);
    }
}