//Daignosis
// $('.add-input').click(function(e) {
//   e.preventDefault();
//  $('.table-data').fadeIn();
//  let cat = $('select[name=Utilizaton_Category]').val();
//  let doze = $('select[name=doze]').val();
//  let imu = $('input[name=imunization]').val();
//  let qty = $('input[name=quantity]').val();
//  let tarif = $('input[name=tariff]').val();
//  $('.table-data tbody').append('<tr><td>'+cat+'</td><td>'+doze+'</td><td>'+imu+'</td><td>'+qty+'</td><td>'+tarif+'</td><td><button class="btn btn-close btn-danger remove-item"></button></td></tr>')

//  $('select[name=Utilizaton_Category]').val('');
//  $('select[name=doze]').val('');
//  $('input[name=imunization]').val('');
//  $('input[name=quantity]').val('');
//  $('input[name=tariff]').val('');
// });

// $(document).on('click', '.remove-item', function(e) {
//   e.preventDefault();
//   $(this).closest('tr').remove()
// });


// Utilization
$(document).ready(function () {
  $('.addmore').click(function (e) {
    e.preventDefault();
    $('.utilize-data').append('<div class="row g-2">' + '<div class="col-md">' +
      '<label for="diagnosis" class="form-label" style="padding-top: 1rem; padding-left: 2rem; color: rgb(129, 129, 199);">Utilizaton Category</label>' +
      '<div class="form-floating">' +
      '<select class="form-select" name="Utilizaton_Category" id="floatingSelectGrid" aria-label="Floating label select example">' +
      '<option selected></option>' +
      '<option value="1">1</option>' +
      '<option value="2">2</option>' +
      '<option value="3">3</option>' +
      '</select>' +
      '<label for="floatingSelectGrid" style="padding-top: 1.6rem;">Immunization</label>' +
      '</div>' +
      '</div>' +
      '<div class="col-md">' +
      '<label for="diagnosis" class="form-label" style="padding-top: 1rem; padding-left: 2rem; color: rgb(129, 129, 199);">Doze</label>' +
      '<div class="form-floating">' +
      '<select class="form-select" name="doze" id="floatingSelectGrid" aria-label="Floating label select example">' +
      '<option selected></option>' +
      '<option value="1">1</option>' +
      '<option value="2">2</option>' +
      '<option value="3">3</option>' +
      '</select>' +
      '<label for="floatingSelectGrid" style="padding-top: 1.6rem;">Select Doze</label>' +
      '</div>' +
      '</div>' +
      '</div>' +

      '<button class="btn btn-close btn-danger remove-item">Remove</button>' +
      '<br><br><br>');
  });
})

$(document).on('click', '.remove-item', function (e) {
  e.preventDefault();
  $(this).closest('tr').remove()
});

$(document).ready(function () {
  $('.add-input').click(function (e) {
    e.preventDefault();
    $('.diagnosis-data').append('<div class="row g-2">' + '<div class="col-md">' + '<label for="diagnosis" class="form-label" style="padding-top: 1rem; padding-left: 2rem; color: rgb(129, 129, 199);">Diagnosis Code</label>' +
      '<div class="form-floating">' +
      '<select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">' +
      '<option selected></option>' +
      '<option value="1"></option>' +
      '<option value="2"></option>' +
      '<option value="3"></option>' +
      '</select>' +
      '<label for="floatingSelectGrid" style="padding-top: 1.6rem;">Input code</label>' +
      '</div>' +
      '</div>' +
      '<div class="col-md">' +
      '<label for="diagnosis" class="form-label" style="padding-top: 1rem; padding-left: 2rem; color: rgb(129, 129, 199);">Diagnosis Description</label>' +
      '<div class="form-floating">' +
      '<select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">' +
      '<option selected></option>' +
      '<option value="1"></option>' +
      '<option value="2"></option>' +
      '<option value="3"></option>' +
      '</select>' +
      '<label for="floatingSelectGrid" style="padding-top: 1.6rem;">Select Description</label>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="row g-2">' +
                '<div class="col-md">' +
                    '<label for="diagnosis" class="form-label" style="padding-top: 1rem; padding-left: 2rem; color: rgb(129, 129, 199);">Presenting Complaint</label>' +
                    '<div class="form-floating">' +
                        '<input type="email" class="form-control" id="floatingInputGrid">' +
                        '<label for="floatingInputGrid" style="padding-top: 1.5rem"> Input Complaint</label>'+
                    '</div>' +
                '</div>' +
                '<div class="col-md">' +
                    '<label for="diagnosis" class="form-label" style="padding-top: 1rem; padding-left: 2rem; color: rgb(129, 129, 199);">Date</label>'+
                    '<div class="form-floating">' +
                        '<input type="email" class="form-control" id="floatingInputGrid">'+
                        '<label for="floatingInputGrid" style="padding-top: 1.5rem">Select Date</label>' +
                    '</div>' +
                '</div>' +
            '</div>' +
      '<button class="btn btn-close btn-danger remove-item">Remove</button>' +
      '<br><br><br>');
  });
})
$(document).on('click', '.remove-item', function (e) {
  e.preventDefault();
  $(this).closest('diagnosis-data').remove()
});