$(document).ready(function () {
  var menuItem = $(".header-menu__icon");
  var content = $(".content");
  menuItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    $(activeContent).toggleClass("content--active");
  });
  
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".menu").toggleClass("menu--mobile--visible");
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close, .modal__overlay");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  $(document).keydown(function (press) {
    if (press.key === 'Escape' || press.keyCode === 27) {
      closeModal(press);
    }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var modalBody = $("body");
    modalOverlay.addClass("modal__overlay--active");
    modalDialog.addClass("modal__dialog--active");
    modalBody.addClass("modal-open");
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var modalBody = $("body");
    modalOverlay.removeClass("modal__overlay--active");
    modalDialog.removeClass("modal__dialog--active");
    modalBody.removeClass("modal-open");
  };

  const exampleSlider = new Swiper('.example__slider-container', {
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.example__slider-button--next',
      prevEl: '.example__slider-button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  const textSlider = new Swiper('.text-slider-container', {
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.text-slider-button--next',
      prevEl: '.text-slider-button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "???????? ???????????? ??????",
          minlength: "?????? ???? ???????????? 2 ????????"
        },
        phone: {
          required: "?????????????? ???????? ?????????? ????????????????",
          minlength: "?????? ????????????: +7 (999) 999-99-99"
        },
        email: {
          required: "?????? ?????????? ?????? email, ?????????? ??????????????????",
          email: "???????????? email name@domain.com"
        },
        mail: {
          required: "?????? ?????????? ?????? email, ?????????? ??????????????????",
          email: "???????????? email name@domain.com"
        },
        comment: {
          required: "???????????????? ???????? ??????????????????????",
          minlength: "?????????????????????? ?????????????? 2 ??????????????"
        }
      }
    });
  });

  $('.phone').each(function () {
    $(this).mask("+7 (999) 999-99-99", {
      'translation': {
        9: {
          pattern: /[0-9*]/
        }
      }
    });
  });

  $(document).on("scroll", window, function () {
    if ($(window).scrollTop() > 100) {
      showTop();
    }
    else {
      hideTop();
    }
  });

  function showTop() {
    let toTop = $(".to-top");
    toTop.addClass("to-top--active");
  }

  function hideTop() {
    let toTop = $(".to-top");
    toTop.removeClass("to-top--active");
  }
});