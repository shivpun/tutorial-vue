import Card from './card-1.vue';

export default {
    title: 'Bootstrap/Card1',
    component: Card,
  };

  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Card },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<card v-bind="args"></card>',
  });
  
  export const Cart = Template.bind({});
  Cart.args = {
    label: 'Total Order',
    amount: '4850',
    description: '+2.5% from last week',
    icon: 'bxs-cart',
    shade: 'info'
  };

  export const Wallet = Template.bind({});
  Wallet.args = {
    label: 'Total Revenue',
    amount: '$84,245',
    description: '+5.4% from last week',
    icon: 'bxs-wallet',
    shade: 'danger'
  };

  export const Chart = Template.bind({});
  Chart.args = {
    label: 'Bounce Rate',
    amount: '34.6%',
    description: '-4.5% from last week',
    icon: 'bxs-bar-chart-alt-2',
    shade: 'chart'
  };

  export const Group = Template.bind({});
  Group.args = {
    label: 'Total Customers',
    amount: '8.4K',
    description: '+8.4% from last week',
    icon: 'bxs-group',
    shade: 'group'
  };
  