const mix = require('laravel-mix');

const fs = require('fs')

mix.options({
    terser: {
        extractComments: false,
    }
});

const target = 'public';
// const target = mix.inProduction() ? 'public' : '../../../public/vendor/lunar/admin-hub';

mix.postCss("resources/assets/hub.css", target + "/app.css", [
    require("tailwindcss"),
]);

mix.js("resources/assets/hub.js", target + "/app.js");
