import axios from 'axios';
import _ from 'lodash';

// تعيين axios و lodash كمتغيرات عامة
window._ = _;
window.axios = axios;

// تهيئة headers الافتراضية لـ axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true;

// (اختياري) إعداد base URL لـ axios
window.axios.defaults.baseURL = '/';