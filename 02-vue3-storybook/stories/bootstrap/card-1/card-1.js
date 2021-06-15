import 'boxicons';

export default {
    name: 'card-1',

    props: {
        label: {
          type: String,
          required: true,
        },
        description: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true
        },
        shade: {
            type: String,
            required: true
        }
    }
}  