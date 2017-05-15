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

});
