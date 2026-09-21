$(document).ready(function () {

  // Toast Notification Library

  // Contact form Validation + Toast Notification
  $("#contactForm").on("submit", function(e){
    e.preventDefault();
    if(this.checkValidity()){
      ToastNotify.success("تم إرسال رسالتك بنجاح");
      this.reset();
      this.classList.remove("was-validated");
    }else{
      this.classList.add("was-validated");
    }
  });

  // Login Validation
  $("#loginForm").on("submit", function(e){
    e.preventDefault();
    this.classList.add("was-validated");
    if(this.checkValidity()){
      ToastNotify.success("تم التحقق من البيانات");
    }
  });

  // Register Validation
  $("#registerForm").on("submit", function(e){
    e.preventDefault();
    var pass = $("#password").val();
    var confirmPass = $("#confirmPassword").val();

    if(pass !== confirmPass){
      $("#confirmPassword")[0].setCustomValidity("Passwords do not match");
    }else{
      $("#confirmPassword")[0].setCustomValidity("");
    }

    this.classList.add("was-validated");
    if(this.checkValidity()){
      ToastNotify.success("تم إنشاء الحساب بنجاح");
      this.reset();
      this.classList.remove("was-validated");
    }
  });

  $("#confirmPassword").on("input", function(){
    this.setCustomValidity("");
  });

  // Ajax + Bootstrap Modal #1
  $("#foundationDetailsBtn").on("click", function(){
    $.ajax({
      url: "foundation-modal.html",
      method: "GET",
      success: function(data){
        $("#foundationModal .modal-content").html(data);
        $("#foundationModal").modal("show");
      },
      error: function(){
        ToastNotify.error("تعذر تحميل التفاصيل");
      }
    });
  });

  // Ajax + Bootstrap Modal #2
  $("#lipstickDetailsBtn").on("click", function(){
    $.ajax({
      url: "lipstick-modal.html",
      method: "GET",
      success: function(data){
        $("#lipstickModal .modal-content").html(data);
        $("#lipstickModal").modal("show");
      },
      error: function(){
        ToastNotify.error("تعذر تحميل التفاصيل");
      }
    });
  });
});
