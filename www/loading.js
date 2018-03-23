function loadPic1()
  {
    var pic1;
  var pic2;

  $.ajax({
    type: 'GET',
    url: "",
    data: { pic1: pic1, pic2: pic2},
    dataType: 'json',
    context: document.body,
    async: false,
    success: function(data) {
      $.each( data.items, function( i, pics ) {
        $( "<img>" ).src(pics.media.m);
      });
    }
    });
  }