app.controller('ctrlMVC', function ($timeout) {
  
            $timeout(function () {
                var link = $('.com__nav-link');
                var linkParent = link.parent('li');
                var section = $('.com__section');
                var sectionContent = section.find('*');
                var slides = $('.slides');

                var switchTab = function () {
                    var p = $(this).parent('li');
                    var i = p.index();
                    var s = section.eq(i);
                    var c = s.find('*');

                    section.removeClass('active');
                    sectionContent.removeAttr('style');
                    s.addClass('active');

                    c.css({
                        transform: 'none',
                        opacity: 1
                    });

                    linkParent.removeClass('active');
                    p.addClass('active');

                    return false;
                };

                link.on('click', switchTab);

                function activeFirst() {
                    section.first().addClass('active');
                    section.first().find('*').css({
                        transform: 'none',
                        opacity: 1
                    });
                    linkParent.first().addClass('active');
                }

                activeFirst();

                Reveal.addEventListener('mvcState', function () {
                    console.log('hi');
                    slides.css({"zoom": "1", "height": "100%"})
                    $('pre code').each(function (i, block) {
                        setTimeout(function () {
                            hljs.highlightBlock(block);
                        }, 100)
                    });
                });

                
                Reveal.addEventListener('slidechanged', function (event) {
                    //console.log(event.previousSlide, event.currentSlide, event.indexh, event.indexv);
                });

                $('.com .img').off('mouseover').off('mouseout').on('mouseover', function () {
                    $('h2').css('color', '#404855')
                }).on('mouseout', function () {
                    $('h2').css('color', 'white')
                })

                document.onkeydown = checkKey;

                function checkKey(e) {

                    e = e || window.event;

                    if (e.keyCode == '38') {
                        // up arrow
                        var prev = mvcSlides.prev();
                        $(prev).find('a').trigger('click');
                    } else if (e.keyCode == '40') {
                        // down arrow
                        var next = mvcSlides.next();
                        $(next).find('a').trigger('click');
                    }
                }

                function TraversableArray() {
                    console.log(arguments);
                    if (typeof arguments[0] === "number")
                        this.length = arguments[0];
                    else
                        this.push.apply(this, arguments);

                    this.current = 0;
                }
                TraversableArray.prototype = [];
                TraversableArray.prototype.constructor = TraversableArray;
                TraversableArray.prototype.next = function () {
                    var self = this[0];
                    var index = ++this.current;
                    if (this.current == self.length) {
                        this.current = 0;
                    }

                    return self[index % self.length];
                };
                TraversableArray.prototype.prev = function () {
                    var self = this[0];
                    var index = --this.current;
                    if (this.current + self.length <= 0) {
                        this.current = 0;
                    }

                    return self[(index + self.length) % self.length];
                };

                var mvcSlides = new TraversableArray(Array.prototype.slice.call(linkParent));
                
            },1000)



    
});

app.directive('renderNestedHtml', function ($timeout) {
    return {
       
        compile: function (element, attrs) {
            var rawHtml = element[0].innerHTML;
            var code = angular.element('<code data-trim></code>');

            code.text(rawHtml.trim());
            element.replaceWith(code);
        },
    }
})
