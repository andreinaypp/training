// ------------------------------------------------------------
// AUTOMATIC DROPDOWN
// ------------------------------------------------------------
$('#navbar .dropdown').hover(function() {
  if ($(window).width() > 1200) {
    $('a', this).addClass('show')
    $('a', this).attr('aria-expanded', 'true')
    $('.dropdown-menu', this).addClass('show')
    $('.dropdown-menu', this).attr('data-bs-popper', 'none')
  }
}, function() {
  if ($(window).width() > 1200) {
    $('a', this).removeClass('show')
    $('a', this).attr('aria-expanded', 'false')
    $('.dropdown-menu', this).removeClass('show')
    $('.dropdown-menu', this).removeAttr('data-bs-popper')
  }
})
// ------------------------------------------------------------
// NAVBAR
// ------------------------------------------------------------
$(window).ready(function() {
  changeColorNavbar()
})
$(window).scroll(function() {
  changeColorNavbar()
})
$(window).resize(function() {
  if ($(window).width() < 1200) {
    $('.navbar').css('background-color', 'rgba(3,185,233,1)')
  } else {
    if ($(window).scrollTop() < 150) {
      $('.navbar').css('background-color', 'transparent')
    }
  }
})
function changeColorNavbar() {
  if ($(window).scrollTop() > 150) {
    $('#pre-nav').css({'background-color': 'rgba(3,185,233,1)', 'height': '0px'})
    if ($(window).width() > 1200) {
      $('.navbar').css('background-color', 'rgba(3,185,233,1)')
    }
  } else {
    $('#pre-nav').css({'background-color': 'rgba(3,185,233,0.8)', 'height': '35px'})
    if ($(window).width() > 1200) {
      $('.navbar').css('background-color', 'transparent')
    }
  }
}

function accordionButtonHeight() {
  let accordionButtonH = 0
  $('.accordion-header').each(function() {
    console.log(accordionButtonH)
    if ($(this).height() > accordionButtonH) {
      accordionButtonH = $(this).height()
    }
  })
  $('.accordion-header').css('height', accordionButtonH)
  $('.accordion-button').css('height', '100%')
  $('.accordion-header').addClass('d-flex align-items-center')
}
$(window).ready(function() {
  accordionButtonHeight()
})
$(window).resize(accordionButtonHeight)