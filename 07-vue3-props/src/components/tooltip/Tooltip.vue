<template>
  <div>
    <teleport to="body">
      <div
        v-if="enable"
        :id="tooltipId"
        class="tooltip bs-tooltip-end"
        role="tooltip"
        :style="arrowStyle"
      >
        <div class="tooltip-arrow" :class="placement"></div>
        <div class="tooltip-inner" v-html="tooltipText"></div>
      </div>
    </teleport>
    <button
      type="button"
      id="vals"
      @mouseenter="position"
      @mouseleave="leave"
      class="btn btn-secondary"
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      tooltip-title="Tooltip on top"
    >
      Tooltip on top
    </button>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
  props: {
    tooltipText: {
      type: String,
      default: "Test Data for Tooltips",
    },
    placement: {
      type: String,
      default: "right",
    },
    show: {
      type: Boolean,
      default: false,
    },
    referenceId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      tooltipId: "tooltipId",
      arrowStyle: "",
      enable: this.show,
    };
  },
  methods: {
    leave() {
      console.log("Leave");
      //this.enable = false;
    },
    position() {
      console.log("Enter");
      //this.tooltipId = this.uuid(5);
      var kProps = createPopper(
        document.querySelector("#vals"),
        document.querySelector("#" + this.tooltipId),
        {
          placement: this.placement,
        }
      );
      this.arrowStyle = kProps.state.styles.arrow;
      console.log(kProps);
      this.enable = true;
      return false;
    },
    uuid(n) {
      return (
        "tooltip" +
        Math.floor(Math.random() * (9 * Math.pow(10, n))) +
        Math.pow(10, n)
      );
    },
  },
};
</script>

<style>
body {
  background: white;
  margin: auto;
}

.holder {
  background: white;
  margin: auto;
  width: 300px;
  height: 50px;
  position: relative;
}

.search-tooltip {
  position: absolute;
  color: #fff;
  background: #59ba5b;
  line-height: 1.2;
  text-align: center;
  border-radius: 2px;
  border: 0;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  top: 50%;
  transform: translate(calc(-100% - 24px), -50%);
  padding: 10px 24px;
  font-weight: bold;
  cursor: pointer;
  animation: sti 1s ease, st 2s infinite 1.2s ease;
}

.search-tooltip:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid #59ba5b;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}

@keyframes sti {
  0% {
    transform: translate(calc(-100% - 80px), -50%);
    opacity: 0;
  }

  100% {
    transform: translate(calc(-100% - 24px), -50%);
    opacity: 1;
  }
}

@keyframes st {
  50% {
    transform: translate(calc(-100% - 20px), -50%);
  }
}

/*
.tooltip {
  position: relative;
  background: #ff3466;
  padding: 5px 12px;
  margin: 5px;
  font-size: 15px;
  border-radius: 100%;
  color: #fff;
}*/

.top {
  position: absolute;
  left: 0px;
  transform: translate(45px, 0px);
}
.right {
  position: absolute;
  top: 0px;
  transform: translate(0px, 8px);
}
</style>
