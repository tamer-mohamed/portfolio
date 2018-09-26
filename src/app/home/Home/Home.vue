<template>
  <div :class="$style.home">
    <stage id="intro" :disable-particles="disableParticles" />
    <about-me id="about-me" />
    <experience id="resume" />
    <get-in-touch id="get-in-touch" />
  </div>
</template>

<script lang="ts">
  import { mapState }    from 'vuex';
  import Stage           from '../Stage/Stage';
  import Experience           from '../Experience/Experience';
  import AboutMe      from '../AboutMe/AboutMe';
  import GetInTouch from '../GetInTouch/GetInTouch';
  import { IState }      from '../../state';

  export default {
    metaInfo:   {
      title: 'Tamer mohamed - Software engineer',
      meta:  [
        {
          name:    'description',
          content: 'Tamer mohamed - Software engineer',
        },
        {
          name:    'robots',
          content: 'INDEX,FOLLOW',
        },
        {
          name:    'keywords',
          content: 'software engineer, frontend, Node.js, backend javascript, software developer, React, vue, vuejs, React.js, Javascript, CSS preprocessors (less,s, seo, server-side-rendering, isomorphic, progressive-web-app',
        },

        { name: 'og:url', content: 'http://tamermohamed.me/' },
        { name: 'og:site_name', content: 'Tamer Mohamed' },
        { name: 'og:type', content: 'website' },
        { name: 'og:locale', content: 'en' },
        {
          name:    'og:title',
          content: 'Tamer Mohamed | Software engineer',
        },
        {
          name:    'og:description',
          content: 'Software engineer passinoate about bridging the gap between users and their goals',
        },
        { name: 'og:image:url', content: 'http://tamermohamed.me/logo.png' },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@_jwerner_' },
        { name: 'twitter:creator', content: '@_jwerner_' },
        {
          name:    'twitter:title',
          content: 'Tamer Mohamed | Software engineer',
        },
        { name: 'twitter:url', content: 'http://tamermohamed.me/' },
        { name: 'twitter:image', content: 'http://tamermohamed.me/logo.png' },
        {
          name:    'twitter:description',
          content: 'Software engineer passinoate about bridging the gap between users and their goals',
        },
      ],
    },
    components: {
      Stage,
      Experience,
      GetInTouch,
      AboutMe,
    },
    computed:   {
      ...mapState({
                    disableParticles: (state: IState) => state.app.config && state.app.config.features.disableParticles,
                  }),
    },
  };
</script>

<style lang="scss" module>
@import "../../shared/styles";

.home {
  :global {
    .vuePanel {
      height: 100%;
    }

    .featureSection {
      padding: $space-unit * 5 0;
    }
  }

  @include media(tabletLandscape) {
    :global {
      .featureSection {
        padding: $space-unit * 8 0;
      }
    }
  }
}
</style>
