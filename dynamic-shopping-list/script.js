const uList = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");



btn.addEventListener("click", () => {
    const currentValue = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const itemBtn = document.createElement("button");


    listItem.appendChild(span);
    span.textContent = currentValue;
    listItem.appendChild(itemBtn);
    itemBtn.textContent = "Delete";
    uList.appendChild(listItem);

    itemBtn.addEventListener("click", () => {
        uList.removeChild(listItem);
    });

    input.focus();

});