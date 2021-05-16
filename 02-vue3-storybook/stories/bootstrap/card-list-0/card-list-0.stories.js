import CardList from './card-list-0.vue';
import {Cart, Wallet, Group, Chart}  from '../card-0/card-0.stories'

export default {
    title: 'Bootstrap/CardList',
    component: CardList,
  };

  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { CardList },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<cardList v-bind="args"></cardList>',
  });
  
  export const Primary = Template.bind({});
  Primary.args = {
    cardList: [Cart.args, Wallet.args, Chart.args, Group.args]
  }