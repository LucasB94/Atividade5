$(document).ready(function () {
    $("form").submit(function () {
      event.preventDefault();
      var formValue = $(this).serialize();
  
      $.ajax({
        type: "POST",
        url: "http://localhost:3000/reservas",
        data: formValue,
      })
        .done(function (response) {
          alert("Reserva feita com sucesso!");
        })
        .fail(function (response) {
          alert("Falha no POST: " + response);
        });
    });
  });