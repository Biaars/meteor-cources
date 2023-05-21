Template.pagesWorking.onCreated(function () {
    this.count = new ReactiveVar(0)
  
    this.maps = new ReactiveDict(null, {
      name: 'Rabia',
      lastname: 'Arslan',
      count: 0,
    })
  })
  
  Template.pagesWorking.onRendered(function () {
    const self = this
  
    this.autorun(function () {
      const count = self.count.get()
  
      console.log(count)
    })
  
    this.autorun(function () {
      const count = self.maps.get('count')
  
      console.log(count)
    })
  
    this.autorun(function () {
      const todos = Todos.find().fetch()
  
      console.log(todos)
    })
  })
  
  Template.pagesWorking.helpers({
    count: function () {
      return Template.instance().count
    },
    maps: function () {
      return Template.instance().maps
    },
    todos: function () {
      return Todos.find().fetch()
    },
  })
Template.pagesWorking.events({
    'click .brd-add': function (event, template) {
        template.count.set(template.count.get() +1)
        template.maps.set('count', template.count.get('count') +1)

    },
    'click .brd-remove': function (event, template) {
        template.count.set(template.count.get()-1)
        template.maps.set('count', template.count.get('count') -1)

    },
    'click .brd-insert': function(event, template){
      Todos.insert({name: 'my-todos'})
    },
})

