$('#get_songs').on('click', function(event){
  event.preventDefault()
  event.stopPropagation()
  $.ajax({
    url: 'http://localhost:3000/api/v1/songs',
    method: 'GET',
    success: function(response){
      var songNames = []
      response.forEach(function(song){
        songNames.push(song.title);
      });
      // for (var i = 0; i < response.length; i++) {
      //   songNames.push(response[i].title)
      // };
      var formattedSongNames = "";
      songNames.forEach(function(title) {
        formattedSongNames += "<li>" + title + "</li>"
      });
      $("#song_list").append(formattedSongNames);
      // for (var i = 0; i < songNames.length; i++) {
      //   $("#song_list").append('<li>' + songNames[i] + '</li>')
      // };
      
    }

  })
});