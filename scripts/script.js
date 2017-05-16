'use strict';

$(() => {

  function Project(project) {
    for (let key in project) {
      this[key] = project[key];
    }
  }

  Project.prototype.toHtml = function () {
    return (Handlebars.compile($('#project-template').html()))(this);
  }

  projectData.forEach(project => $('#projects-div').append((new Project(project)).toHtml()));

  $('.thumb').on('mousemove', (e) => {
    $('#tooltip').stop().fadeIn(200).css('opacity', .9)
    .text(e.currentTarget.parentNode.parentNode.childNodes[3].textContent)
    .css({
      'left': `${e.pageX}px`,
      'top': `${e.pageY - 20}px`
    })
  });
  $('.thumb').on('mouseout', () => $('#tooltip').fadeOut(300).css('opacity', .0));

});
