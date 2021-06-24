//Daignosis
$('.add-input').click(function(e) {
  e.preventDefault();
 $('.table-data').fadeIn();
 let cat = $('select[name=Utilizaton_Category]').val();
 let doze = $('select[name=doze]').val();
 let imu = $('input[name=imunization]').val();
 let qty = $('input[name=quantity]').val();
 let tarif = $('input[name=tariff]').val();
 $('.table-data tbody').append('<tr><td>'+cat+'</td><td>'+doze+'</td><td>'+imu+'</td><td>'+qty+'</td><td>'+tarif+'</td><td><button class="btn btn-close btn-danger remove-item"></button></td></tr>')
 
 $('select[name=Utilizaton_Category]').val('');
 $('select[name=doze]').val('');
 $('input[name=imunization]').val('');
 $('input[name=quantity]').val('');
 $('input[name=tariff]').val('');
});

$(document).on('click', '.remove-item', function(e) {
  e.preventDefault();
  $(this).closest('tr').remove()
});


// Utilization
$('.addmore').click(function(e) {
  e.preventDefault();
 $('.table-data').fadeIn();
 let cat = $('select[name=Utilizaton_Category]').val();
 let doze = $('select[name=doze]').val();
 let imu = $('input[name=imunization]').val();
 let qty = $('input[name=quantity]').val();
 let tarif = $('input[name=tariff]').val();
 $('.table-data tbody').append('<tr><td>'+cat+'</td><td>'+doze+'</td><td>'+imu+'</td><td>'+qty+'</td><td>'+tarif+'</td><td><button class="btn btn-close btn-danger remove-item"></button></td></tr>')
 
 $('select[name=Utilizaton_Category]').val('');
 $('select[name=doze]').val('');
 $('input[name=imunization]').val('');
 $('input[name=quantity]').val('');
 $('input[name=tariff]').val('');
});

$(document).on('click', '.remove-item', function(e) {
  e.preventDefault();
  $(this).closest('tr').remove()
});