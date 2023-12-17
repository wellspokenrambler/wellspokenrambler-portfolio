Vue.directive("click", {
    bind: function(t, e, n) {
        var r = function(t) {
            n.context[e.expression](t)
        };
        t.addEventListener("click", r),
        t._clickHandler = r
    },
    unbind: function(t) {
        t.removeEventListener("click", t._clickHandler),
        delete t._clickHandler
    }
});
Vue.directive('click-outside', {
    bind(el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
            if (! (el == event.target || el.contains(event.target))) {
                vnode.context[binding.expression](event)
            }
        }

        document.body.addEventListener('click', el.clickOutsideEvent)
    },

    unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
    },
});

Vue.directive('focus-out', {
    bind(el, binding, vnode) {
        el.focusOutEvent = function (event) {
            if (el == event.target) {
                vnode.context[binding.expression](event)
            }
        }

        document.body.addEventListener('focusout', el.focusOutEvent)
    },

    unbind(el) {
        document.body.removeEventListener('focusout', el.focusOutEvent)
    },
});

Vue.directive("keyup-enter", {
    bind: function(t, e, n) {
        t.keyupEnterEvent = function(t) {
            "Enter" === t.key && n.context[e.expression](t)
        }
        ,
        t.addEventListener("keyup", t.keyupEnterEvent)
    },
    unbind: function(t) {
        t.removeEventListener("keyup", t.keyupEnterEvent)
    }
});
