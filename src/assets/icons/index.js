import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon.vue';

Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)

req.keys().map(req)






