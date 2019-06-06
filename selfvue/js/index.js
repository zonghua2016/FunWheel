function SelfVue(options) {
  var self = this;
  this.data = options.data;
  this.methods = options.methods;

  Object.keys(this.data).forEach(key => {
    self.proxyKeys(key); //绑定代理属性
  });
  observe(this.data);
  new Compile(options.el, this);
  options.mounted.call(this);
}

SelfVue.prototype = {
  proxyKeys(key) {
    var self = this;
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function proxyGetter() {
        return self.data[key];
      },
      set: function proxySetter(newVal) {
        self.data[key] = newVal;
      }
    });
  }
};
