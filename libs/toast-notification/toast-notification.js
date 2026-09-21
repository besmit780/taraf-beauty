(function (window, document) {
  "use strict";

  function getContainer() {
    var container = document.getElementById("toast-notification-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-notification-container";
      container.setAttribute("aria-live", "polite");
      container.setAttribute("aria-atomic", "true");
      document.body.appendChild(container);
    }
    return container;
  }

  function show(message, type) {
    var toast = document.createElement("div");
    toast.className = "toast-notification " + (type || "success");
    toast.setAttribute("role", "alert");
    toast.textContent = message;

    getContainer().appendChild(toast);

    setTimeout(function () {
      toast.classList.add("show");
    }, 20);

    setTimeout(function () {
      toast.classList.remove("show");
      setTimeout(function () {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 220);
    }, 3000);
  }

  window.ToastNotify = {
    success: function (message) {
      show(message, "success");
    },
    error: function (message) {
      show(message, "error");
    }
  };
})(window, document);
