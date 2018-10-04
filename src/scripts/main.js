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

function setScrollFadein() {
  $(window).scroll(function (){
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top
      var scroll = $(window).scrollTop()
      var windowHeight = $(window).height()
      if (scroll > elemPos - windowHeight + 200){
        $(this).addClass('scrollin')
      }
      else {
        $(this).removeClass('scrollin')
      }
    })
  })
}

function setSmoothScroll() {
  $('a[href^="#"]').click(function() {
    var href= $(this).attr("href")
    var hash = href == "#" || href == "" ? 'html' : href
    var target = $(hash)
    var position = target.offset().top
    $('body,html').stop().animate({scrollTop:position}, 300, () => { window.location.hash = href })
    return false
  })
}

$(() => {
  setHeaderScrollAnimation()
  setScrollFadein()
  setSmoothScroll()
})