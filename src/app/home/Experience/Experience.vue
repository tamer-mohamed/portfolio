<template>
  <div :class="$style.devEx">
    <vue-grid>

      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <h3 :class="$style.headLine">Experience</h3>

        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <div :class="$style['timeline-item']" v-for="(info, index) in experience" :key="index" :dateIs="info.date">
            <h3>{{ info.company }}</h3>
            <h5>{{info.title}}</h5>
            <p v-for="(paragraph,index) in info.desc" :key="index">
              {{paragraph}}
            </p>
          </div>
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
  import VueIconCode     from '../../shared/components/icons/VueIconCode/VueIconCode';
  import VueIconBullhorn from '../../shared/components/icons/VueIconBullhorn/VueIconBullhorn';

  export default {
    components: {
      VueIconBullhorn,
      VueIconCode,
      VueGrid,
      VueGridItem,
      VuePanel,
      VuePanelBody,
      VueGridRow,
    },

    data() {
  return {
   experience: [
        {
          "company":"Zalando SE",
          "title": "Senior software engineer",
          "desc":[
            'Implemented and Designed the UI (and it distributed service) of the experimentation platform which enables teams in Zalando to create, run and analyse their experiments in interactive web tool.',
            'Additionally, defined a UI component library with a living style guide to enable the teams to re-use UI components easily. Also, designated a composable architecture to enable different teams to contribute to the central platform with several deployment units as definition micro-service for the frontend.',
          ],
          "date":"2016 - present",
        },
        {
          "company":"Viasto",
          "title": "Frontend engineer",
          "desc":[
              'Implemented distributed system and plugin solution for an online interviewing tool that provides two ways for recording using WebRTC and Flash, besides that implemented services using Node.js and web sockets for operations which fulfil the business flow.',
              'Also was the core contributor in the architecture of the interviewee platform and developed the MVP for the mobile version using React Native.'
          ],
          "date":"2015 - 2016",
        },
        {
          "company":"KPI Communications",
          "title": "Software engineer",
          "desc":[
            'Developed fitness tracker interactive platform using Drupal and jQuery, furthermore, using Garmin SDK to track the user activities and publish fitting recipe program aligned with user goal.',
            'Also, implemented Risk management tool using Angular, Node.js and Firebase which manage and maintain project risks which have been used for international companies (i.e Siemens)',
            'Additionally, implemented several portfolios and web-portals using (Wordpress or Drupal) and Angular.'
          ],
          "date":"2012 - 2015",
        },{
          "company": "Link Development",
          "title": "UI developer",
          "desc":[
            'Introduced CSS preprocessor and responsive design methodologies and techniques to existing and new applications.',
            'Accelerated bottlenecks for different teams on moving autonomous, modernised with the latest technologies and accepting challenges and applying this to Government portals (i.e. Egypt-air, Pizza Dominos) in Egypt, Qatar, Saudi Arabia.'
          ],
          "date":"2011 - 2012",
        },
      ]
}
    }
  };
</script>

<style lang="scss" module>
@import '../../shared/styles';

.devEx {
  display: block;
  padding-top: $space-unit * 5;

  @include media(tabletLandscape) {
    padding-top: $space-unit * 8;
  }

  @include media(largeDesktop) {
    padding-top: $space-unit * 8;
  }

  i {
    height: $font-size-h1;
    width: $font-size-h1;
    margin-top: $space-unit;
  }

  .headLine {
    margin-bottom: $space-unit * 2;
    color: lighten($brand-light-primary, 10%);

    @include media(tabletLandscape) {
      margin-bottom: $space-unit * 5;
    }

    @include media(largeDesktop) {
      margin-bottom: $space-unit * 5;
    }
  }
}

$border-color: #808080;
$dot-color: darken($border-color, 10%);
$current-dot-color: $brand-dark-primary;

.timeline-item {
  padding: 0.2rem 2.5rem 2.5rem 1.5rem;
  position: relative;
  border-left: 2px solid $border-color;
  padding-top: 3.2rem;

  @include media(tabletLandscape) {
    margin-left: 10rem;
    padding-top: 0.1rem;
  }

  p {
    list-style: circle outside;
    margin-bottom: $space-unit;
  }

  &::before {
    content: attr(dateIs);
    position: absolute;
    display: block;
    font-size: 1.2rem;
    left: 1.5rem;
    top: 1.6rem;
    color: lighten($border-color, 20%);

    @include media(tabletLandscape) {
      left: -8.5rem;
      top: 1.4rem;
    }
  }

  &::after {
    width: 20px;
    height: 20px;
    display: block;
    top: 1em;
    position: absolute;
    left: -12px;
    border-radius: 10px;
    content: '';
    border: 2px solid $border-color;
    background: $dot-color;
  }

  &:first-child {
    border-image: linear-gradient(
        to top,
        $border-color 60%,
        rgba($border-color, 0)
      )
      1 100%;

    border-right: 0;

    padding-top: 5.8rem;

    &::after {
      top: 2.8em;
      background: $current-dot-color;
    }

    &::before {
      top: 4.5rem;
      left: 2rem;

      @include media(tabletLandscape) {
        left: -9.6rem;
        top: 3.7rem;
      }
    }

    @include media(tabletLandscape) {
      padding-top: 2.5rem;
      left: 0;
    }
  }

  &:last-child {
    padding-bottom: 7.5rem;
  }

  h3 {
    font-size: $font-size-h4;
    margin-bottom: $space-unit;

    @include media(tabletLandscape) {
      font-size: $font-size-h4 * $font-size-factor-tablet-landscape;
    }

    @include media(largeDesktop) {
      font-size: $font-size-h4 * $font-size-factor-large-desktop;
    }
  }

  h5 {
    font-size: 1.5rem;
    margin-bottom: 2 * $space-unit;

    @include media(tabletLandscape) {
      font-size: 1.5rem * $font-size-factor-tablet-landscape;
    }

    @include media(largeDesktop) {
      font-size: 1.5rem * $font-size-factor-large-desktop;
    }
  }

  p {
    color: darken($text-color-inverse, 5%);
    line-height: 1.3;

    @include media(tabletLandscape) {
      width: 70%;
    }
  }
}
</style>
