<template>
  <div :class="[$style.getInTouch,'featureSection']">
    <vue-grid>

      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <h3 :class="$style.headLine">Get in touch</h3>
          <p>Let's get in touch, find my contants below, looking forward to hearing from you!</p>

          <ul :class="$style.contactList">
            <li>
              <span :class="$style.iconHolder">
                <vue-icon-mail/>
              </span>
              <a href="mailTo:hi@tamermohamed.me" :class="$style.info">hi@tamermohamed.me</a>
            </li>
            <li>
              <span :class="$style.iconHolder">
                <vue-icon-linked-in/>
              </span>
              <a href="www.linkedin.com/in/tamer-a-mohamed" target="_blank" :class="$style.info">linkedin.com/in/tamer-a-mohamed</a>
            </li>
          </ul>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>

  </div>

</template>

<script lang="ts">
  import VueGrid         from '../../shared/components/VueGrid/VueGrid';
  import VueGridItem     from '../../shared/components/VueGridItem/VueGridItem';
  import VueGridRow      from '../../shared/components/VueGridRow/VueGridRow';
  import VuePanel        from '../../shared/components/VuePanel/VuePanel';
  import VuePanelBody    from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody';
  import VueIconLinkedIn    from '../../shared/components/icons/VueIconLinkedIn/VueIconLinkedIn';
  import VueIconMail    from '../../shared/components/icons/VueIconMail/VueIconMail';
  

  export default {
    components: {
      VueGrid,
      VueGridItem,
      VuePanel,
      VuePanelBody,
      VueIconLinkedIn,
      VueGridRow,
      VueIconMail,
    },
     computed:   {
      year() {
        return new Date().getFullYear();
      },
    },

  };
</script>

<style lang="scss" module>
@import "../../shared/styles";

.getInTouch {
  display: block;
  background: #2b2b2b;

  a {
    color: lighten($brand-light-primary, 30%);

    &:hover {
      color: lighten($brand-light-primary, 20%);
    }
  }

  i {
    height: $font-size-h1;
    width: $font-size-h1;
    height: 2.5rem;

    width: 2.5rem;
    margin-top: 1.1rem;
  }

  .headLine {
    margin-bottom: $space-unit * 2;
    color: lighten($brand-light-primary, 10%);
  }

  p {
    font-size: $font-size + 0.4;
  }

  .iconHolder {
    border: 1px solid white;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    text-align: center;
  }

  .contactList {
    display: flex;
    margin-top: 4 * $space-unit;
    flex-direction: column;

    @include media(tabletLandscape) {
      flex-direction: row;
    }
    @include media(tabletLandscape) {
      flex-direction: row;
    }

    li {
      margin-bottom: 4 * $space-unit;
      display: flex;
      align-items: center;

      i {
        display: inline-block;
        vertical-align: middle;
      }

      .info {
        margin-left: $space-unit;
        display: inline-block;
      }

      @include media(tabletLandscape) {
        &:not(:first-child) {
          margin-left: $space-unit * 3;
        }
      }

      @include media(largeDesktop) {
        &:not(:first-child) {
          margin-left: $space-unit * 3;
        }
      }
    }
  }
}
</style>
