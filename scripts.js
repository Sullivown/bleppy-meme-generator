function updateText(e) {
    const id = this.id[this.id.length - 1];
    const inputContent = this.value;
    const output = document.querySelector(`#output-${ id }`);
    output.textContent = inputContent;
}

// Add event listener to all inputs to update the comic text

const inputs = document.querySelectorAll('.text-input');

inputs.forEach(input => {
    input.addEventListener('keyup', updateText)
});
