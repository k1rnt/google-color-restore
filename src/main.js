// ==UserScript==
// @name         google-color-restore
// @namespace    https://github.com/k1rnt/google-color-restore
// @match        https://www.google.co.jp/search*
// @match        https://www.google.com/search*
// @version      0.1
// @description  Google検索結果の表示色を元に戻します(#fef7e0 to #8ab4f8)
// @author       github.com/k1rnt
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('a').forEach((v) => {v.style.color = '#8ab4f8';});
})();
