const test = QUnit.test;

QUnit.module('TEMPLATE GALLERY TEST');

function makeGalleryTemplate() {
    return `
        <li>
            <p class="title">Star Wars</p>
            <img src="https://image.tmdb.org/t/p/w1280/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg">
            <p class="release">1977</p>
        </li>
    `;
}

test('Cheater Test', assert => {
    // arrange
    const expected = `
        <li>
            <p class="title">Star Wars</p>
            <img src="https://image.tmdb.org/t/p/w1280/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg">
            <p class="release">1977</p>
        </li>
    `;
    // act
    const result = makeGalleryTemplate();

    // assert
    assert.equal(result, expected);
});