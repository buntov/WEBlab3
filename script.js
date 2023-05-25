function insertionSort() {
    var input = document.getElementById('array').value;
    var array = input.split(',').map(Number);
    var output = document.getElementById('output');
    output.innerHTML = "";

    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;

        let line = document.createElement('p');
        for (let k = 0; k < array.length; k++) {
            let span = document.createElement('span');
            span.textContent = array[k];
            if (k <= i) {
                span.className = 'sorted';
            }
            line.appendChild(span);
            line.innerHTML += " ";
        }
        output.appendChild(line);
    }
}
