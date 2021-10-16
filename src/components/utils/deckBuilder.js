import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses';
const CARD_NUMBER = 20;

export default () => {

    const fontAwesomeClasses= FontAwesomeClasses();

    let cards = [];

    while (cards.length < CARD_NUMBER)
    {
        const index = Math.floor(Math.random() * fontAwesomeClasses.length)
        const card = {
            icon: fontAwesomeClasses.splice(index, 1)[0],
            wasGuessed : false,
        }

        cards.push(card);
        cards.push({...card});
    }
    return shuffle(cards);
};