angular.module('cardillApp').factory('articles', [function(){
    var o = {
        articles: [
            {title: 'Not So Fast', author: 'Zen Potter', imgPath: 'images/not-so-fast.jpg', link: '#/posts/not-so-fast'},
            {title: 'F*** Clevland', author: 'Lucksson Nama', imgPath: 'images/f-clevland.png', link: '#/posts/f-clevland'},
            {title: 'Draft Retrospective', author: 'Vithushan Nama', imgPath: 'images/draft-retro.png', link: '#/posts/draft-retro'},
            {title: 'Round 2 Game 7', author: 'Vithushan Nama', imgPath: 'images/rd2-gm7.png', link: '#/posts/rd2-gm7'},	 
            {title: 'Power of Veto', author: 'Vithushan Nama', imgPath: 'images/power-of-veto.jpg', link: '#/posts/power-of-veto'},
            {title: 'The Day I Said What If', author: 'Zen Potter', imgPath: 'images/the-day-i-said-what-if.png', link: '#/posts/the-day-i-said-what-if'},	 
        ]
    };
    return o;
}]);