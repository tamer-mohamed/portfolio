<template>
  <div :class="$style.vueNavBar" ref="nav">
    <div :class="bgCssClasses" />

    <vue-grid>
      <vue-grid-row :class="[$style.header,{[$style.sticky]: isSticky}]" :align="'middle'">
        <vue-grid-item :class="[$style.logoWrapper]">
          <img :class="$style.logo" src="/tm-logo.svg" alt="Tamer mohamed" />
          <span :class="$style.name" v-id="isSticky">Tamer Mohamed</span>
        </vue-grid-item>

        <vue-grid-item :class="$style.menuWrapper">
          <button :class="hamburgerCssClasses" type="button" aria-label="menu" @click="isOpen = !isOpen">
            <span :class="$style.box">
              <span :class="$style.inner"></span>
            </span>
          </button>

          <ul :class="[$style.menu,{[$style.open]: isOpen}]">
            <li v-for="link in links" :key="link.title">
              <router-link :to="link.to" :class="{[$style.active]: isActiveLink(link)}" @click.native="isOpen = false">
                {{link.title}}
              </router-link>
            </li>
          </ul>

        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>

  </div>
</template>

<script lang="ts">
  import VueGrid     from '../VueGrid/VueGrid';
  import VueGridItem from '../VueGridItem/VueGridItem';
  import VueGridRow  from '../VueGridRow/VueGridRow';
  import Logo from '../Logo/Logo';
  import { EventBus } from '../../services/EventBus';

  export default {
    name:       'VueNavBar',
    components: {
      VueGrid,
      Logo,
      VueGridItem,
      VueGridRow,
    },
    data() {
      return {
        isSticky: false,
        isOpen:   false,
        showLogo: false,
        activeMenu: '',
      };
    },
    props:      {
      to:       {
        type:     String,
        required: false,
        default:  '/',
      },
      imageUrl: {
        type:     String,
        required: false,
        default:  '/tm-logo.png',
      },
      links: {
        type: Array,
        required: true,
      }
    },
    computed:   {
      bgCssClasses() {
        const classes = [this.$style.bg];

        if (this.isSticky) {
          classes.push(this.$style.in);
        }

        return classes;
      },
      hamburgerCssClasses() {
        const classes = [this.$style.hamburger];


        if (this.isSticky) {
          classes.push(this.$style.in);
        }


        if (this.isOpen) {
          classes.push(this.$style.active);
        }
        return classes;
      },
    },
    methods:   {
        scrollTo (hashtag:any) {
      setTimeout(() => { location.href = hashtag }, 1)
    },
      isActiveLink(link: any){
          if(link.to && link.to.hash){
             return this.activeMenu === link.to.hash
          }

          return false;
      },
      initScrollTracker(){
        this.scrollLinks = this.links.filter((l:any) => l.to && l.to.hash).map( (h:any) => h.to.hash);

        this.targetDom = this.scrollLinks.map((id:any) => document.getElementById(id));
      },

      handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const active = this.targetDom
        .filter((target:any) => !!target)
        .filter( (target:any) =>{
          return scrollTop >= target.offsetTop && scrollTop <= target.offsetTop + target.offsetHeight
        } );
        
        if(active.length > 0){
          this.activeMenu=active[0].id;
        }else{
          this.activeMenu = '';
        }

        this.isSticky = scrollTop > 10;
      },
      handleDocumentClick(e: Event) {
        if (this.$refs.nav.contains(e.target) === false) {
          this.isOpen = false;
        }
      },
      handleCloseEvent() {
        this.isOpen = false;
      }
    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll);
      document.addEventListener('click', this.handleDocumentClick);
      document.addEventListener('touchstart', this.handleDocumentClick);
      EventBus.$on('navbar.close', this.handleCloseEvent);
    },
    mounted() {
      this.initScrollTracker();

    // From testing, without a brief timeout, it won't work.
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), 1)
    }
      this.handleScroll();
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
      document.removeEventListener('click', this.handleDocumentClick);
      document.removeEventListener('touchstart', this.handleDocumentClick);
    },
  };
</script>

<style lang="scss" module>
@import "../../styles";

.vueNavBar {
  width: $nav-bar-width;
  height: 60px;
  color: $nav-bar-color;
  padding: $nav-bar-padding;
  z-index: $nav-bar-index;
  position: fixed;

  top: 0;
  left: 0;
}

.bg {
  background: $nav-bar-bg;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: $nav-bar-bg-transition;
  opacity: 0;
  box-shadow: $nav-bar-shadow;

  &.in {
    opacity: 1;
  }
}

.brand {
  padding: $space-unit * 2 0 0 0;
}

.header {
  justify-content: space-between;
  align-items: center;

  .menuWrapper {
    text-align: right;

    .menu {
      transition: 0.1s all ease-in-out;

      @media only screen and (max-width: $menu-max-width) {
        opacity: 0;
        display: none;
        background: #ffffff;
        position: absolute;
        box-shadow: 1px 4px 1px #0000001c;
        width: 100%;
        right: 0rem;
        top: 7rem;
        width: 100%;
        padding: $space-unit 2 * $space-unit;
      }

      &.open {
        opacity: 100;
        display: block;
      }

      li {
        display: inline-block;
        margin: 10px;

        a {
          &:hover {
            color: #000000;
          }
        }

        @media (max-width: $menu-max-width) {
          width: 100%;
          text-align: left;
          margin: 0;

          a {
            display: block;
            background: none;
            transition: 0.3s all ease-in-out;

            padding: 10px;

            &:hover,
            &:focus {
              background: #e7e7e7;
            }
          }

          &:not(:last-child) {
            border-bottom: 1px solid #e7e7e7;
          }
        }

        a {
          color: #777;
          text-decoration: none;
          font-size: $font-size-h6;

          &.active {
            color: #000000;
          }
        }
      }
    }
  }

  .logoWrapper {
    display: flex;
    align-items: center;
    margin-bottom: $space-unit;

    @media (max-width: $menu-max-width) {
      flex: 1 1 100%;
    }

    .name {
      opacity: 0;
      transition: 0.2s all ease-in-out;
      margin-top: $space-unit;
      color: black;
      display: inline-block;
      margin-left: $space-unit;
    }

    .logo {
      margin-top: $space-unit;
      width: 100px;
      transition: 0.3s width ease-in-out;
    }
  }

  &.sticky {
    .logo {
      width: 60px;
    }

    .name {
      opacity: 1;
    }

    .menu {
      @media only screen and (max-width: $menu-max-width) {
        top: 5.3rem;
      }
    }
  }
}

.hamburger {
  display: block; // only avalible for phones
  outline: 0;
  // position: absolute;
  // right: 0;
  // top: 2rem;
  transform: translate(0, -70px);
  padding: $space-unit / 2 $space-unit;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter, transform;
  transition-duration: 250ms;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  border: 0;
  overflow: visible;
  background: none;
  color: gray;

  &.in {
    background: transparent;
    transform: translate(0, -55px);
    .inner {
      &,
      &::before,
      &::after {
        background: $nav-bar-hamburger-bg;
      }
    }
  }
  .box {
    width: $space-unit * 4;
    height: $space-unit * 4;
    display: inline-block;
    position: relative;
  }
  .inner {
    display: block;
    top: 50%;
    margin-top: 0;
    &,
    &::before,
    &::after {
      width: $space-unit * 4;
      height: $space-unit / 2;
      background: darken(#f3f3f3, 40%);
      border-radius: 0;
      position: absolute;
      transition-property: transform;
      transition-duration: 0.15s;
      transition-timing-function: ease;
    }
    &::before,
    &::after {
      content: "";
      display: block;
    }
    &::before {
      top: ($space-unit / 2 + $space-unit / 2) * -1;
    }
    &::after {
      bottom: ($space-unit / 2 + $space-unit / 2) * -1;
    }
    transition-duration: 0.075s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    &::before {
      transition: top 0.075s 0.12s ease, opacity 0.075s ease;
    }
    &::after {
      transition: bottom 0.075s 0.12s ease,
        transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }
  &.active {
    .inner {
      transform: rotate(45deg);
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      &::before {
        top: 0;
        opacity: 0;
        transition: top 0.075s ease, opacity 0.075s 0.12s ease;
      }
      &::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.075s ease,
          transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
}

@include media(largeDesktop) {
  .hamburger {
    display: none;
  }
}

@include media(smallDesktop) {
  .hamburger {
    display: none;
  }
}

@include media(tabletPortrait) {
  .hamburger {
    display: none;
  }
}

@include media(tabletLandscape) {
  .hamburger {
    display: none;
  }
}
</style>
