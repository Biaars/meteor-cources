import {FlowRouter} from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
    name: 'public.home',
    action: function (params, queryparams) {
        this.render('publicLayoutsDefault', {page: 'pagesHome'});
    }
});

FlowRouter.route('/about', {
    name: 'public.about',
    action: function (params, queryparams) {
        this.render('publicLayoutsDefault', {page: 'pagesAbout'});
    }
});

FlowRouter.route('/working', {
    name: 'public.working',
    action: function (params, queryparams) {
        this.render('publicLayoutsDefault', {page: 'pagesWorking'});
    }
});

FlowRouter.route('/todos', {
    name: 'public.todos',
    action: function (params, queryparams) {
        this.render('publicLayoutsDefault', {page: 'pagesTodos'});
    }
});

FlowRouter.route('*', {
    action() {
        this.render('notFound')
    }
})