$('.add-more').click(function() {
    $('.add').clone().appendTo('.add_dynamic');
    $('.add_dynamic .add').addClass('single remove');
    $('.single .add-more').remove();
    $('.single').append('<a href="#" class="remove-field btn-remove-customer">Remove Fields</a>');
    $('.add_dynamic > .single').attr("class", "remove");
  
    $('.add_dynamic input').each(function() {
      var count = 0;
      var fieldname = $(this).attr("name");
      $(this).attr('name', fieldname + count);
      count++;
    });
  
  });
  
  $(document).on('click', '.remove-field', function(e) {
    $(this).parent('.remove').remove();
    e.preventDefault();
  });