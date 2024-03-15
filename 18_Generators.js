function* generateNumbers() {
    let number = 1;
    while (true) {
        yield number++;
    }
}

const numberGenerator = generateNumbers();

for (let i = 0; i < 5; i++) {
    console.log(numberGenerator.next().value);
}
