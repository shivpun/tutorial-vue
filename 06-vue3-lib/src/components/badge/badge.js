export default {
  name: "badge",
  props: {
    tag: {
      type: String,
      default: "span",
      description: "Html tag to use for the badge.",
    },
    variant: {
      type: String,
      default: "pill",
      description: "Badge variant (pill|circle)",
    },
    palette: {
      type: String,
      default: "primary",
      description:
        "Badge palette (primary|secondary|danger|warning|success|info|dark|light|transparent|white|gradient)",
    },
    icon: {
      type: String,
      default: "",
      description: "Icon name. Will be overwritten by slot if slot is used",
    },
  },
};
