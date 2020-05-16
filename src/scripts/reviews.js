import Vue from "vue";
import Flickity from 'vue-flickity';

new Vue({
  el: '#reviews-component',
  template: '#reviews-container',
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true,
        freeScroll: false,
        contain: true,
      }
    }
  },

  reviewsData() {
    return {
      reviews: [],
    };
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
      this.checkArrows();
    },
    
    previous() {
      this.$refs.flickity.previous();
      this.checkArrows();
    },

    checkArrows() {
      if (this.$refs.flickity.selectedIndex() == 0) {
        this.$el.querySelector('.scroll-left_left').disabled = true;

      } else if (this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().length - 1) {
        this.$el.querySelector('.scroll-right_right').disabled = true;
        
      } else {
        this.$el.querySelector('.scroll-left_left').disabled = false;
        this.$el.querySelector('.scroll-right_right').disabled = false;
      }
    },

    makeArrWithRequireImg(array) {
      return array.map(item => {
        const requireImg = require(`../images/content/${item.authorPic}`);
        item.authorPic = requireImg;

        return item;
      })
    },
  },

  created() {
    const reviewsData = require('../data/reviews.json');
    this.reviews = reviewsData;
    this.review = this.makeArrWithRequireImg(reviewsData);
  },
});