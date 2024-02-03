function* geneKeys() {
    let count = 1;
    while (1) {
        yield count++;
    }
}
export const autoKey = geneKeys()