import DefaultLayout from '~/layouts/Default.vue';
import BootstrapVue from 'bootstrap-vue';
import './assets/styles/main.scss';

import checkIfMobile from './mixins/checkIfMobile';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
    faBirthdayCake,
    faMapMarkerAlt,
    faEnvelopeOpenText,
    faCalendarDay,
    faBars,
} from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(faBirthdayCake, faMapMarkerAlt, faEnvelopeOpenText, faCalendarDay, faBars, faCalendar);

export default function (Vue, { router, head, isClient }) {
    Vue.use(BootstrapVue);
    Vue.component('Layout', DefaultLayout);
    Vue.component('font-awesome', FontAwesomeIcon);
    Vue.mixin(checkIfMobile);
}
