function openMenu() {
  $('.menu').fadeIn();
  $('.container').addClass('hidden');
}

function closeMenu() {
  $('.container').removeClass('hidden');
  $('.menu').fadeOut();
}