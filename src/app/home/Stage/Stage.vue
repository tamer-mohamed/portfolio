<template>
  <div :class="$style.stage" ref="stage">
    <canvas :class="$style.canvas" ref="canvas"></canvas>

    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <div :class="$style.intro">
            <h1>
              Tamer Mohamed
            </h1>
            <h2 :class="$style.subHeading">
              Software engineer passionate about<br /> bridging the gaps between people and Tech industry.
            </h2>
          </div>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import { CircleAnimation } from '../../shared/animations/CircleAnimation';
  import VueGrid             from '../../shared/components/VueGrid/VueGrid';
  import VueGridRow          from '../../shared/components/VueGridRow/VueGridRow';
  import VueGridItem         from '../../shared/components/VueGridItem/VueGridItem';
  import VueIconGithub       from '../../shared/components/icons/VueIconGithub/VueIconGithub';

  export default {
    components: { VueIconGithub, VueGridItem, VueGridRow, VueGrid },
    props:      {
      disableParticles: {
        type:     Boolean,
        required: true,
      },
    },
    data() {
      return {};
    },
    computed:   {},
    methods:    {
      handleResize() {
        const canvas: HTMLCanvasElement = this.$refs.canvas;
        const stage: HTMLElement = this.$refs.stage;
        const stageRect: ClientRect = stage.getClientRects().length > 0 ? stage.getClientRects().item(0) : {
          width:  0,
          height: 0,
        } as ClientRect;

        canvas.width = stageRect.width;
        canvas.height = stageRect.height;
      },
    },
    beforeMount() {
      window.addEventListener('resize', this.handleResize);
    },
    mounted() {
      this.handleResize();

      if (!this.disableParticles) {
        CircleAnimation(this.$refs.canvas);
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
  };
</script>

<style lang="scss" module>
@import '../../shared/styles';

.stage {
  min-height: 100vh;
  background: linear-gradient(171deg, #ffffff 0%, #f3f3f3 100%);
  overflow: hidden;
  position: relative;
  text-align: center;
  @include background-gradient(#ffffff, #f3f3f3, 171deg);
}

.canvas {
  min-height: 100vh;
  width: 100%;
  position: absolute;
  background-color: transparent;
  left: 0;
  top: 0;
}

.stageInfo {
  top: $space-unit * 17;
  text-align: left;
  position: relative;

  @include media(tabletPortrait) {
    top: $space-unit * 24;
  }

  @include media(tabletLandscape) {
    top: $space-unit * 26;
  }
}

.logo {
  margin-right: $space-unit;
}

.info,
.logo {
  display: inline-block;
}

.intro {
  text-align: left;
  color: #000000;
  position: relative;
  top: $space-unit * 17;

  h1 {
    color: $brand-dark-primary;
  }

  @include media(tabletPortrait) {
    top: $space-unit * 22;
  }

  @include media(tabletLandscape) {
    top: $space-unit * 24;
  }

  h2 {
    font-size: $font-size-h3;
    line-height: $line-height-h4;

    &.subHeading {
      color: lighten(#000000, 50%);
    }
  }
}
</style>
