import Component from './component.js';

function PreviewUserComponent(name, nickname, company, events = {}) {
  this.name = name;
  this.nickname = nickname;
  this.company = company;
  this.events = events;
}

PreviewUserComponent.prototype = Object.create(Component.prototype);
PreviewUserComponent.prototype.constructor = PreviewUserComponent;

PreviewUserComponent.prototype.render = function render() {
  const template = `<div class="card x-shadow-fade-in h-100 bg-light" style="min-height: 13rem">
  <h5 class="card-header text-center">${this.company}</h5>
  <div class="card-body d-flex flex-column">
    <h6 class="card-title">${this.name}</h6>
    <p class="card-text">${this.nickname}</p>
    <div class="mt-auto">
      <a href="#" class="x-link-only-hover stretched-link">See more</a>
    </div>
  </div>
</div>`;

  const column = document.createElement('div');
  column.className = 'col-sm-4 mb-5';
  column.innerHTML = template;

  return column;
};

export default PreviewUserComponent;
