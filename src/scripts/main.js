function setHeaderScrollAnimation() {
  const headerElms = [$('header'), $('nav'), $('h1 img')]
  var scrollTop = 0

  $(window).scroll(function() {
    scrollTop = $(window).scrollTop()

    if($('header').height() <= scrollTop) {
        $('header').css('box-shadow', '0 4px 4px -2px rgba(0,0,0,.2)')
        for(let elm of headerElms) {
          elm.addClass('header-is-animation')
        }
    }
    else {
        $('header').css('box-shadow', '')
        for(let elm of headerElms) {
          elm.removeClass('header-is-animation')
        }
    }
  })
}

$(() => {
  setHeaderScrollAnimation()
})
