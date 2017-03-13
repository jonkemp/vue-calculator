import Vue from 'vue';

Vue.component('entry-list', {
  props: ['list'],
  template: '\
    <ul>\
      <li v-for="item in list">\
        {{ item }}\
      </li>\
    </ul>\
  '
});

var app = new Vue({
  el: '#app',
  data: {
    list: [],
    text: ''
  },
  methods: {
    addEntry: function() {
      var value = this.text;
      var entry = value + ' = ' + eval(value);
      this.list = [entry].concat(this.list);
      this.text = '';
    }
  }
});
