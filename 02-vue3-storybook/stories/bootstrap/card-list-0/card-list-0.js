import Card from '../card-0/card-0.vue'

export default {
    name: 'cardList-0',
    components: {Card},
    props: {
        cardList: {
            type: Array,
            requied: true
        }
    }
}  