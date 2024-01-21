function openMenu() {
  $('.menu').fadeIn();
  $('.container').addClass('hidden');
}

function closeMenu() {
  console.log('close is ');
  $('.container').removeClass('hidden');
  $('.menu').fadeOut();
}