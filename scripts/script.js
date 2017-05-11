'use strict';

$(() => {

  const projects = [
    { title: 'Vote App', thumb: '#', href: 'https://a-vote-app.herokuapp.com/' },
    { title: 'Coordinator App', thumb: '#', href: 'https://coordinator-app.herokuapp.com/' },
    { title: 'Exercise Tracker', thumb: '#', href: 'https://miwst.github.io/workout-tracker/' },
    { title: 'Responsive JS Documentation', thumb: '#', href: 'https://nameless-river-85772.herokuapp.com/' },
    { title: 'Roguelike Dungeon Crawler', thumb: '#', href: 'https://miwst.github.io/FCC-Dungeon-Crawler/' },
    { title: 'Game of Life', thumb: '#', href: 'http://codepen.io/MichaelWStuart/full/yVjJxE/' },
    { title: 'Drum Machine', thumb: '#', href: 'http://codepen.io/MichaelWStuart/full/RKOyzz/' },
    { title: 'Random Dungeon Generator', thumb: '#', href: 'http://codepen.io/MichaelWStuart/full/aBQdpq/' },
    { title: 'D3 Bar Chart', thumb: '#', href: 'http://codepen.io/MichaelWStuart/full/xgGmPq/' },
    { title: 'D3 Heat Map', thumb: '#', href: 'http://codepen.io/MichaelWStuart/full/LxprYe/' },
    { title: 'D3 Force Layout', thumb: '#', href: 'http://codepen.io/MichaelWStuart/full/ggrJOv/' },
    { title: 'D3 Scatterplot', thumb: '#', href: 'http://codepen.io/MichaelWStuart/full/Xpmbyq/' },
    { title: 'D3 Tree Map', thumb: '#', href: 'http://codepen.io/MichaelWStuart/full/mWeJeP/' },
    { title: 'Recipe Box', thumb: '#', href: 'http://codepen.io/MichaelWStuart/full/NbbOQj/' },
    { title: 'Simon Clone', thumb: '#', href: 'http://codepen.io/MichaelWStuart/pen/jVOrmY' },
    { title: 'Javascript Calculator', thumb: '#', href: 'http://codepen.io/MichaelWStuart/pen/RGdBpq' }
  ]

  function Project(project) {
    this.title = project.title;
    this.href = project.href;
    this.thumb = project.thumb;
  }

});
