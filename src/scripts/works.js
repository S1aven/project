import Vue from 'vue';

const btns = {
  template: '#slider-btns',
};

const thumbs = {
  template: '#slider-thumbs',
  props: ['works']
};

const display = {
  template: '#slider-display',
  components: {
    thumbs,
    btns
  },
  props: ['currentWork', 'works'],
};

const tags = {
  template: '#slider-tags'
};

const info = {
  template: '#slider-info',
  components: {
    tags
  },
  props: ['currentWork']
};

new Vue({
  el: '#slider-component',
  template: '#slider-container',
  components: {
    display,
    info
  },
  data() {
    return {
      works: [],
      currentIndex: 0,
    };
  },

  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    },
  },

  watch: {
    currentIndex(value) {
      const worksAmountFromZero = this.works.length - 1;
      if (value > worksAmountFromZero) this.currentIndex = 3;
      if (value < 0) this.currentIndex = 0;
    },
  },

  methods: {
    handleSlide(direction) {
      switch(direction) {
        case 'left' :
          this.currentIndex--;
          break;
        case 'right' :
          this.currentIndex++;
          break;
      }
    },
    makeArrWithRequireImages(array) {
      return array.map(item => {
        const requirePic = require(`../images/content/${item.photo}`);
        item.photo = requirePic;

        return item;
      })
    },
  },

  created() {
    const data = require('../data/works.json');
    this.works = this.makeArrWithRequireImages(data);
  }
});