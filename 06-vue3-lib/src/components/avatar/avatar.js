export default {
  name: "avatar",
  props: {
    tag: {
      type: String,
      default: "span",
      description: "Html tag to use for the badge.",
    },
    position: {
      type: String,
      default: "relative",
      description: "Position should be (relative|absolute)",
    },
    status: {
      type: String,
      default: "online",
      description: "Badge palette (online|offline|meeting|away|busy)",
    },
    icon: {
      type: String,
      default: "",
      description: "Icon name. Will be overwritten by slot if slot is used",
    },
    width: {
      type: Number,
      default: 42,
      description: "Avatar image weight",
    },
    height: {
      type: Number,
      default: 42,
      description: "Avatar image height",
    },
  },
};
