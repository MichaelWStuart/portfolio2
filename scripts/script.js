'use strict';

$(() => {

  function Project(project) {
    for (let key in project) {
      this[key] = project[key];
    }
  }

  Project.prototype.toHtml = function () {
    const template = $('#project-template').html();
    const templateRender = Handlebars.compile(template);
    return templateRender(this);
  }

  const projects = projectData.reduce((acc, project) => acc.concat(new Project(project)), []);

  projects.forEach(project => $('#projects-div').append(project.toHtml()));

  console.log($('#projects-div'))

});
