//(function ($) {
//
//    var test = function(){
//        alert('adf');
//    }
//    test();
//    test2();
//})(jQuery);

//var foo = ( function() {
//    var secret = 'secret';
//    // “闭包”内的函数可以访问 secret 变量，而 secret 变量对于外部却是隐藏的
//    return {
//        get_secret: function () {
//            // 通过定义的接口来访问 secret
//            return secret;
//        },
//        new_secret: function ( new_secret ) {
//            // 通过定义的接口来修改 secret
//            secret = new_secret;
//        }
//    };
//} () );
//
//console.log(foo.get_secret ()); // 得到 'secret'
//console.log(foo.secret); // Type error，访问不能
//console.log(foo.new_secret ('a new secret')); // 通过函数接口，我们访问并修改了 secret 变量
//console.log(foo.get_secret ()); // 得到 'a new secret'

function Foo() {
    this.value = 42;
}
Foo.prototype = {
    method: function() {}
};

function Bar() {}

// 设置Bar的prototype属性为Foo的实例对象
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

// 修正Bar.prototype.constructor为Bar本身
Bar.prototype.constructor = Bar;

var test = new Bar() // 创建Bar的一个新实例
debugger;