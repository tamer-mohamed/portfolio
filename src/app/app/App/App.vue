<template>
  <div id="app" :class="$style.app">
    <vue-notification-stack />

    <vue-navigation-progress :is-navigating="isNavigating" />

    <vue-nav-bar :links="links" />

    <router-view :class="$style.content" />

    <vue-footer />
  </div>
</template>

<script lang="ts">
  import { mapActions, mapGetters } from 'vuex';
  import VueNavBar                  from '../../shared/components/VueNavBar/VueNavBar.vue';
  import VueGrid                    from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem                from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueFooter                  from '../../shared/components/VueFooter/VueFooter.vue';
  import VueNotificationStack       from '../../shared/components/VueNotificationStack/VueNotificationStack.vue';
  import { loadLocaleAsync }        from '../../shared/plugins/i18n/i18n';
  import { EventBus }               from '../../shared/services/EventBus';
  import VueIconBook                from '../../shared/components/icons/VueIconBook/VueIconBook';
  import VueIconHashtag             from '../../shared/components/icons/VueIconHashtag/VueIconHashtag';
  import VueIconPuzzlePiece         from '../../shared/components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece';
  import VueIconFlag                from '../../shared/components/icons/VueIconFlag/VueIconFlag';
  import VueNavigationProgress      from '../../shared/components/VueNavigationProgress/VueNavigationProgress';

  export default {
    components: {
      VueNavigationProgress,
      VueIconFlag,
      VueIconPuzzlePiece,
      VueIconHashtag,
      VueIconBook,
      VueNavBar,
      VueGrid,
      VueGridItem,
      VueFooter,
      VueNotificationStack,
    },
    data() {
      return {
        isNavigating: false,
        links: 
      [
     { title: 'About me',
      to:{hash: 'about-me'}},
       { title: 'Experience',
      to:{hash:'experience'}},
       { title: 'Get in touch',
      to:{hash:'get-in-touch'}}
      ],
    
      };
    },
    computed:   {
      ...mapGetters('app', ['cookieConsentVersion']),
    },
    methods:    {
      ...mapActions('app', ['changeLocale', 'setCookieConsentVersion']),
      localeSwitch(locale: string): void {
        loadLocaleAsync(locale)
        .catch((error: Error) => console.log(error));

        this.changeLocale(locale);
        this.navBarClose();
      },
      navBarClose() {
        EventBus.$emit('navbar.close');
      },
      initProgressBar() {
        this.$router.beforeEach((to: any, from: any, next: any) => {
          this.isNavigating = true;
          next();
        });
        this.$router.afterEach(() => {
          this.isNavigating = false;
        });
      },
    },
    created() {
      this.initProgressBar();
    },
  };
</script>

<style lang="scss" module>
@import '../../shared/styles';
@import '../../shared/styles/reset';
@import '../../shared/styles/typo';
@import '../../shared/styles/global';
@import url($google-font);

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}

.nav {
  margin: $space-unit 0 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  li {
    flex: 1;
    margin: $space-unit / 2;
    color: $text-color;
    flex-basis: $space-unit * 10;
    height: $space-unit * 10;
    background: $divider-color;
    cursor: pointer;

    a {
      padding: $space-unit * 2;
      display: block;
      color: $text-color;
      text-align: center;
      text-decoration: none;

      small {
        font-size: 12px;
        display: block;
      }

      i {
        height: 32px;
        width: 32px;
      }
    }
  }

  @include media(tabletLandscape) {
    margin: 0;

    li {
      margin: $space-unit;
      opacity: 0.8;
      transition: opacity $transition-duration linear;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
