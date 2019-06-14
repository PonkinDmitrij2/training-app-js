function Component(events) {
  this.events = events;
}

Component.prototype.initComponent = function initComponent(containerId) {
  this.renderTo(containerId);
};

Component.prototype.render = function render() {};

Component.prototype.renderTo = function renderTo(containerId) {
  document.getElementById(containerId).appendChild(this.render());
  this.attachEvents();
};

Component.prototype.attachEvents = function attachEvents() {
  const addHandlers = (elements, eventType, handlers) => {
    elements.forEach((element) => {
      handlers.forEach((handler) => {
        element.addEventListener(eventType, handler);
      });
    });
  };

  Object.keys(this.events).forEach((selector) => {
    const elems = document.querySelectorAll(selector);

    Object.entries(this.events[selector]).forEach(([eventType, handlers]) => {
      addHandlers(elems, eventType, handlers);
    });
  });
};

export default Component;
