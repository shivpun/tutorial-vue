import Chart from './chart-0.vue';

export default {
    title: 'Bootstrap/Chart0',
    component: Chart,
  };

  const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Chart },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<chart v-bind="args"></chart>',
  });
  
  export const Deliverable = Template.bind({});
  Deliverable.args = { };