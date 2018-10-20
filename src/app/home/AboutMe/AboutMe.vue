<template>
  <div :class="[$style.aboutMe, 'featureSection']">
    <vue-grid>
      <vue-grid-row align="middle">
        <vue-grid-item class="imageGridContainer">
          <vue-panel class="vuePanel">
            <vue-panel-body class="vuePanelBody">
              <img src="/tamer-mohamed.jpg" alt="tamer mohamed" />
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item :class="$style.bio">
          <h3>Hello, I am Tamer</h3>
          <p> I'm currently software engineer at Zalando SE.</p>
          <p>
            I've worked in a mixture of projects in complex platforms, coming from an engineering background with enthusiasm into art enables me to bridge the gaps between users and their intentions, and at the meanwhile, balancing business values and enjoyable experiences.
          </p>

        </vue-grid-item>

      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid      from '../../shared/components/VueGrid/VueGrid';
  import VueGridItem  from '../../shared/components/VueGridItem/VueGridItem';
  import VuePanel     from '../../shared/components/VuePanel/VuePanel';
  import VuePanelBody from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody';
  import VueGridRow   from '../../shared/components/VueGridRow/VueGridRow';

  export default {
    components: {
      VueGrid,
      VueGridItem,
      VuePanel,
      VuePanelBody,
      VueGridRow,
    },
  };
</script>

<style lang="scss" module>
@import '../../shared/styles';

.aboutMe {
  display: block;
  @include background-gradient($brand-dark-primary, $brand-primary, -31deg);

  :global {
    .vuePanelBody {
      text-align: left;
      overflow: hidden;

      img {
        transform: scale(1.6) translate(0rem, 1rem);
      }

      ol {
        margin-top: $space-unit * 5;
        padding: 0 0 0 $space-unit * 2;

        li {
          margin-bottom: $space-unit * 2;
        }
      }
    }

    // .vueGridItem {
    //   display: flex;
    //   align-items: center;
    //   justify-content: space-between;
    // }
  }

  .bio {
    @include media(largeDesktop) {
      flex: 0 0 60%;
    }

    h3 {
      margin: $space-unit 0;
    }

    p {
      font-size: $font-size-h6;
      line-height: $line-height-h6;
      margin-bottom: $space-unit * 4;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  // @include media(tabletPortrait) {
  //   :global {
  //     .vuePanel {
  //       width: 50%;
  //     }
  //   }
  // }

  // @include media(tabletLandscape) {
  //   :global {
  //     .vuePanel {
  //       width: 50%;
  //     }
  //   }
  // }
}
</style>
