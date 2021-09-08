import shuffle from 'lodash.shuffle'
const CARD_NUMBER = 20;

export default () => {

    const emojis= ['icon-2', 'icon-3']

    let cards = [];

    while (cards.length < CARD_NUMBER)
    {
        const index = Math.floor(Math.random() * emojis.length)
        const card = {
            icon: emojis.splice(index, 1)[0],
            guessed : false,
        }

        cards.push(card);
        cards.push({...card});
    }
    return shuffle(cards);
}
