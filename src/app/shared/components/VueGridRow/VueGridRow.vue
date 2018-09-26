<template>
  <div :class="cssClasses">
    <slot />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'VueGridRow',
    props: {
      align:{
        type: String,
        validator: (v: any) => ['left','right','center'].includes(v),
        required:false,
        default: 'left'
      }
    },
    computed:{
        cssClasses(){
          let classes = [this.$style.vueGridRow];

          classes.push(this.$style[`align-${this.align}`]);

            return classes;
        }
      }
  };
</script>

<style lang="scss" module>
@import "../../styles";

.vueGridRow {
  display: flex;
  flex-wrap: wrap;
  margin: 0 (-$screen-phone-gutter);

  &.align-middle {
    align-items: center;
  }

  @include media(tabletPortrait) {
    margin: 0 (-$screen-tablet-portrait-gutter);
  }

  @include media(tabletLandscape) {
    margin: 0 (-$screen-tablet-landscape-gutter);
  }

  @include media(smallDesktop) {
    margin: 0 (-$screen-small-desktop-gutter);
  }

  @include media(largeDesktop) {
    margin: 0 (-$screen-large-desktop-gutter);
  }
}
</style>
