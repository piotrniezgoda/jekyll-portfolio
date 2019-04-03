(function() {

  const hamburgerBtn = document.querySelector('#hamburgerBtn');
  const menuList = document.querySelector('#menuList');
  const burgerLines = document.querySelectorAll('.burger_line');
  const navbar = document.querySelector('#navBar');
  const menuLinks = document.querySelectorAll('.link--closeNav');

  window.addEventListener('resize', _.debounce(changeNavigationMode, 500));

  changeNavigationMode();

  function changeNavigationMode() {
     const actuallWindowSize = window.innerWidth;
    if(actuallWindowSize >= 768) {
      menuLinks.forEach(link => {
        link.removeEventListener('click', closeNav);
      })
      jQuery(window).off('scroll', _.debounce(debounceNavbarTrigger));
    }
  }

  let ticking = false;
  let lastScrollPositionY = 0;

  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    )
  });

  hamburgerBtn.addEventListener('click', () => {
    if(menuList.classList.contains('navbar__menu--hidden')) {
      requestAnimationFrame(openNav);
    };

    if(menuList.classList.contains('navbar__menu--show')) {
      requestAnimationFrame(closeNav);
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  })

  jQuery(window).on('scroll', _.debounce(debounceNavbarTrigger, 40));

  function debounceNavbarTrigger() {
      const scroll = this.pageYOffset;
      changeNavbarBackground(scroll);
      requestTick(scroll);
  }

  function changeNavbarBackground(scroll) {
    if (scroll >= 250) {
      navbar.classList.add('homeHeader__navbar--background')
    } else if (scroll <= 250) {
      navbar.classList.remove('homeHeader__navbar--background')
    }
  }

  function requestTick(scrollPosY) {
    const actuallScrollPosY = scrollPosY;
    if (!ticking) {
      requestAnimationFrame(() => {
        updateNavbar(actuallScrollPosY);
      })
    ticking = true;
  }
}

  function updateNavbar(actuallScrollPosY) {
    if (actuallScrollPosY < lastScrollPositionY) {
      showNavbar();
    } else if (actuallScrollPosY > lastScrollPositionY) {
      hideNavbar();
    }
    lastScrollPositionY = actuallScrollPosY;
    ticking = false;
  }

  function showNavbar() {
    if (navbar.classList.contains('homeHeader__navbar--hidden')) {
      navbar.classList.remove('homeHeader__navbar--hidden');
      navbar.classList.add('homeHeader__navbar--show');
    }
  }

  function hideNavbar() {
    if (navbar.classList.contains('homeHeader__navbar--show') || !navbar.classList.contains('homeHeader__navbar--hidden')) {
      navbar.classList.remove('homeHeader__navbar--show');
      navbar.classList.add('homeHeader__navbar--hidden');
    }
  }

  function openNav() {
      menuList.classList.add('navbar__menu--show');
      menuList.classList.remove('navbar__menu--hidden');

      burgerLines.forEach(line => {
        line.classList.add('burger_line--menuActive');
      })
  }

  function closeNav() {
      menuList.classList.remove('navbar__menu--show');
      menuList.classList.add('navbar__menu--hidden');

      burgerLines.forEach(line => {
        line.classList.remove('burger_line--menuActive');
      })
  }

})()