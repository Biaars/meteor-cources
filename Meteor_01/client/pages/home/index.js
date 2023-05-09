Template.pagesHome.onCreated(function () {
    const self = this;
    this.name = 'Rabia';
    console.log(this.name);
    this.data.name = 'Rabia';
});

Template.pagesHome.onRendered(function () {
    const self = this;
    console.log(this.name);

});
Template.pagesHome.onDestroyed(function(){
    const self = this;
    console.log(this.name);

});




/* */
Template.pagesHome.helpers({
    upperCase: function(name) {
        const self = Template.instance()
        return name?.toUpperCase()
    },
    eq: function (v1,v2) {
        return v1= v2
    },
});
Template.pagesHome.events({
  "click .brd-btn-click": function (event, template) {
    event.preventDefault();
    console.log(event);
    console.log(template);

    alert("ilk tıklamamız");
  },
});

const TemplateName = {
    pagesHome: {
        name: 'Rabia',

        data:{
            name:'Rabia'
        }
    }
}