// http://freegeoip.net/?q=172.92.234.170
// http://openweathermap.org/api
// BPeitz  BPeitz@hotmail.com
// ThisPW123
// Key: 267946ad29e61f5dfc4660f8aae69962

$(document).ready(function () {
  var C = false;
  var APIData;
 // var location = '172.92.234.170'

  function render (data,C){
    var currentWeather = data.weather[0].description; // tells state of weather.
    var currentTemp = displayTemp(data.main.temp,C); // in F
    var icon = data.weather[0].icon;
    apiData = data;

    $('#currentTemp').html(currentTemp);
    $('#currentWeather').html(currentWeather);
    console.log('temp ' + currentTemp);
    var iconSource = 'http://openweathermap.org/img/w/' + icon + '.png';
    $('#currentTemp').prepend('<img src = ' + iconSource + '>');
  }
  // var BackgroundImagesArr = {clear_sky: 'https://images.pexels.com/photos/490411/pexels-photo-490411.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', few_clouds:'https://images.pexels.com/photos/530158/pexels-photo-530158.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', scattered_clouds:'https://images.pexels.com/photos/530158/pexels-photo-530158.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', broken_clouds:'https://images.pexels.com/photos/530158/pexels-photo-530158.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', shower_rain:'https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', rain:'https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', thunderstorm:'https://www.pexels.com/photo/brown-and-beige-wooden-barn-surrounded-with-brown-grasses-under-thunderclouds-99577/', snow:'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', mist:'http://www.srh.noaa.gov/jetstream/global/images/dz.jpg'}
  var backgroundImagesArr =  {thunderstorm_with_light_rain:'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  thunderstorm_with_rain:'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  thunderstorm_with_heavy_rain:'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  light_thunderstorm:'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  thunderstorm:'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  heavy_thunderstorm:'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  ragged_thunderstorm:'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  thunderstorm_with_light_drizzle:'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  thunderstorm_with_drizzle:'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  thunderstorm_with_heavy_drizzle:'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  light_intensity_drizzle:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  drizzle:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  heavy_intensity_drizzle:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  light_intensity_drizzle_rain:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  drizzle_rain:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  heavy_intensity_drizzle_rain:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  shower_rain_and_drizzle:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  heavy_shower_rain_and_drizzle:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  shower_drizzle:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  light_rain:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  moderate_rain:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  heavy_intensity_rain:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  very_heavy_rain:'https://images.pexels.com/photos/235795/pexels-photo-235795.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  extreme_rain:'https://images.pexels.com/photos/235795/pexels-photo-235795.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  freezing_rain:'https://images.pexels.com/photos/274778/pexels-photo-274778.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  light_intensity_shower_rain:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  shower_rain:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  heavy_intensity_shower_rain:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  ragged_shower_rain:'https://images.pexels.com/photos/235795/pexels-photo-235795.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  light_snow:'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  snow:'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  heavy_snow:'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  sleet:'https://www.disclosurenewsonline.com/wp-content/uploads/2013/02/sleet-1.jpeg', 
  shower_sleet:'https://www.disclosurenewsonline.com/wp-content/uploads/2013/02/sleet-1.jpeg', 
  light_rain_and_snow:'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  rain_and_snow:'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  light_shower_snow:'https://images.pexels.com/photos/274778/pexels-photo-274778.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  shower_snow:'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  heavy_shower_snow:'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  mist:'https://www.istockphoto.com/photo/misty-dawn-in-the-national-park-deer-streams-gm532256806-94176547', 
  smoke:'http://www.mercurynews.com/wp-content/uploads/2017/10/ebt-l-smokeadvisory-1011-13.jpg?w=810', 
  haze:'http://www.mercurynews.com/wp-content/uploads/2017/10/ebt-l-smokeadvisory-1011-13.jpg?w=810', 
  sand_dust_whirls:'https://i.imgur.com/tcBmPFb.png', 
  fog:'https://www.istockphoto.com/photo/misty-dawn-in-the-national-park-deer-streams-gm532256806-94176547', 
  sand:'https://i.imgur.com/tcBmPFb.png', 
  dust:'https://i.imgur.com/tcBmPFb.png', 
  volcanic_ash:'http://3.bp.blogspot.com/-HqvZ_u5YXyM/VUZrlIZYk6I/AAAAAAAAfUw/C8oSioa6eXE/s1600/_82521685_026883262-1.jpg', 
  squalls:'https://www.surfertoday.com/images/stories/squall.jpg', 
  tornado:'http://static-32.sinclairstoryline.com/resources/media/88b6b984-ca1b-4dde-aa0b-4a4cc380ce39-large16x9_wenn31364057.jpg?1493149328139', 
  clear_sky:'https://images.pexels.com/photos/490411/pexels-photo-490411.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  few_clouds:'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/3kc8SPX/a-mediterranean-white-puffy-clouds-timelapse-on-a-light-blue-sky-background-ideal-for-bringing-a-calming-and-reassuring-mood-to-your-video_vk2tmqzr__F0000.png', 
  scattered_clouds:'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/3kc8SPX/a-mediterranean-white-puffy-clouds-timelapse-on-a-light-blue-sky-background-ideal-for-bringing-a-calming-and-reassuring-mood-to-your-video_vk2tmqzr__F0000.png', 
  broken_clouds:'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/3kc8SPX/a-mediterranean-white-puffy-clouds-timelapse-on-a-light-blue-sky-background-ideal-for-bringing-a-calming-and-reassuring-mood-to-your-video_vk2tmqzr__F0000.png', 
  overcast_clouds:'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/3kc8SPX/a-mediterranean-white-puffy-clouds-timelapse-on-a-light-blue-sky-background-ideal-for-bringing-a-calming-and-reassuring-mood-to-your-video_vk2tmqzr__F0000.png', 
  tornado:'http://static-32.sinclairstoryline.com/resources/media/88b6b984-ca1b-4dde-aa0b-4a4cc380ce39-large16x9_wenn31364057.jpg?1493149328139', 
  tropical_storm:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hurricane_Isabel_from_ISS.jpg/300px-Hurricane_Isabel_from_ISS.jpg', 
  hurricane:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hurricane_Isabel_from_ISS.jpg/300px-Hurricane_Isabel_from_ISS.jpg', 
  cold:'https://images.pexels.com/photos/414459/pexels-photo-414459.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  hot:'https://static.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg', 
  windy:'https://static.pexels.com/photos/149671/pexels-photo-149671.jpeg', 
  hail:'http://weknowyourdreams.com/images/hail/hail-02.jpg', 
  calm:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwitqsGMvb3XAhUGKWMKHeowAQYQjRwIBw&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fmeadow&psig=AOvVaw23YexFr_JypyGw0DWVUllY&ust=1510728693251423', 
  light_breeze:'http://www.979thebreeze.com/breeze/images/banner_reeds.jpg', 
  gentle_breeze:'http://www.979thebreeze.com/breeze/images/banner_reeds.jpg', 
  moderate_breeze:'http://www.979thebreeze.com/breeze/images/banner_reeds.jpg', 
  fresh_breeze:'http://www.979thebreeze.com/breeze/images/banner_reeds.jpg', 
  strong_breeze:'http://www.979thebreeze.com/breeze/images/banner_reeds.jpg', 
  high_wind_near_gale:'https://a.scpr.org/i/9f09aea0e099693dc9857228b1c9717e/38737-full.jpg', 
  gale:'https://www.flickr.com/photos/brightonbird/37814782586', 
  severe_gale:'https://www.flickr.com/photos/brightonbird/37814782586', 
  storm:'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  violent_storm:'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb', 
  hurricane:'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1475798793%2Fhurricane-elena-space-scf4320-006.jpg%3Fitok%3DTELXzN8Q&w=800&q=85' 
  }  
  
  
  // var imagesArr =  [{key: 'thunderstorm_with_light_rain', ref: 'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'thunderstorm_with_rain', ref: 'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'thunderstorm_with_heavy_rain', ref: 'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'light_thunderstorm', ref: 'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'thunderstorm', ref: 'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'heavy_thunderstorm', ref: 'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'ragged_thunderstorm', ref: 'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'thunderstorm_with_light_drizzle', ref: 'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'thunderstorm_with_drizzle', ref: 'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'thunderstorm_with_heavy_drizzle', ref: 'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'light_intensity_drizzle', ref: 'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'drizzle', ref: 'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'heavy_intensity_drizzle', ref: 'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'light_intensity_drizzle_rain', ref: 'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'drizzle_rain', ref: 'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'heavy_intensity_drizzle_rain', ref: 'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'shower_rain_and_drizzle', ref: 'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'heavy_shower_rain_and_drizzle', ref: 'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'shower_drizzle', ref: 'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'light_rain', ref: 'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'moderate_rain', ref: 'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'heavy_intensity_rain', ref: 'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'very_heavy_rain', ref: 'https://images.pexels.com/photos/235795/pexels-photo-235795.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'extreme_rain', ref: 'https://images.pexels.com/photos/235795/pexels-photo-235795.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'freezing_rain', ref: 'https://images.pexels.com/photos/274778/pexels-photo-274778.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'light_intensity_shower_rain', ref: 'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'shower_rain', ref: 'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'heavy_intensity_shower_rain', ref: 'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'ragged_shower_rain', ref: 'https://images.pexels.com/photos/235795/pexels-photo-235795.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'light_snow', ref: 'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'snow', ref: 'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'heavy_snow', ref: 'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'sleet', ref: 'https://www.disclosurenewsonline.com/wp-content/uploads/2013/02/sleet-1.jpeg'}, 
  // {key: 'shower_sleet', ref: 'https://www.disclosurenewsonline.com/wp-content/uploads/2013/02/sleet-1.jpeg'}, 
  // {key: 'light_rain_and_snow', ref: 'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'rain_and_snow', ref: 'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}, 
  // {key: 'light_shower_snow', ref: 'https://images.pexels.com/photos/274778/pexels-photo-274778.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  // {key: 'shower_snow', ref: 'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  // {key: 'heavy_shower_snow', ref: 'https://images.pexels.com/photos/209839/pexels-photo-209839.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  // {key: 'mist', ref: 'https://www.istockphoto.com/photo/misty-dawn-in-the-national-park-deer-streams-gm532256806-94176547'},
  // {key: 'smoke', ref: 'http://www.mercurynews.com/wp-content/uploads/2017/10/ebt-l-smokeadvisory-1011-13.jpg?w=810'},
  // {key: 'haze', ref: 'http://www.mercurynews.com/wp-content/uploads/2017/10/ebt-l-smokeadvisory-1011-13.jpg?w=810'},
  // {key: 'sand_dust_whirls', ref: 'https://i.imgur.com/tcBmPFb.png'},
  // {key: 'fog', ref: 'https://www.istockphoto.com/photo/misty-dawn-in-the-national-park-deer-streams-gm532256806-94176547'},
  // {key: 'sand', ref: 'https://i.imgur.com/tcBmPFb.png'}, 
  // {key: 'dust', ref: 'https://i.imgur.com/tcBmPFb.png'},
  // {key: 'volcanic_ash', ref: 'http://3.bp.blogspot.com/-HqvZ_u5YXyM/VUZrlIZYk6I/AAAAAAAAfUw/C8oSioa6eXE/s1600/_82521685_026883262-1.jpg'},
  // {key: 'squalls', ref: 'https://www.surfertoday.com/images/stories/squall.jpg'},
  // {key: 'tornado', ref: 'http://static-32.sinclairstoryline.com/resources/media/88b6b984-ca1b-4dde-aa0b-4a4cc380ce39-large16x9_wenn31364057.jpg?1493149328139'},
  // {key: 'clear_sky', ref: 'https://images.pexels.com/photos/490411/pexels-photo-490411.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  // {key: 'few_clouds', ref: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/3kc8SPX/a-mediterranean-white-puffy-clouds-timelapse-on-a-light-blue-sky-background-ideal-for-bringing-a-calming-and-reassuring-mood-to-your-video_vk2tmqzr__F0000.png'},
  // {key: 'scattered_clouds', ref: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/3kc8SPX/a-mediterranean-white-puffy-clouds-timelapse-on-a-light-blue-sky-background-ideal-for-bringing-a-calming-and-reassuring-mood-to-your-video_vk2tmqzr__F0000.png'},
  // {key: 'broken_clouds', ref: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/3kc8SPX/a-mediterranean-white-puffy-clouds-timelapse-on-a-light-blue-sky-background-ideal-for-bringing-a-calming-and-reassuring-mood-to-your-video_vk2tmqzr__F0000.png'},
  // {key: 'overcast_clouds', ref: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/3kc8SPX/a-mediterranean-white-puffy-clouds-timelapse-on-a-light-blue-sky-background-ideal-for-bringing-a-calming-and-reassuring-mood-to-your-video_vk2tmqzr__F0000.png'},
  // {key: 'tornado', ref: 'http://static-32.sinclairstoryline.com/resources/media/88b6b984-ca1b-4dde-aa0b-4a4cc380ce39-large16x9_wenn31364057.jpg?1493149328139'},
  // {key: 'tropical_storm', ref: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hurricane_Isabel_from_ISS.jpg/300px-Hurricane_Isabel_from_ISS.jpg'},
  // {key: 'hurricane', ref: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hurricane_Isabel_from_ISS.jpg/300px-Hurricane_Isabel_from_ISS.jpg'},
  // {key: 'cold', ref: 'https://images.pexels.com/photos/414459/pexels-photo-414459.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  // {key: 'hot', ref: 'https://static.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg'},
  // {key: 'windy', ref: 'https://static.pexels.com/photos/149671/pexels-photo-149671.jpeg'},
  // {key: 'hail', ref: 'http://weknowyourdreams.com/images/hail/hail-02.jpg'},
  // {key: 'calm', ref: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwitqsGMvb3XAhUGKWMKHeowAQYQjRwIBw&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fmeadow&psig=AOvVaw23YexFr_JypyGw0DWVUllY&ust=1510728693251423'},
  // {key: 'light_breeze', ref: 'http://www.979thebreeze.com/breeze/images/banner_reeds.jpg'},
  // {key: 'gentle_breeze', ref: 'http://www.979thebreeze.com/breeze/images/banner_reeds.jpg'},
  // {key: 'moderate_breeze', ref: 'http://www.979thebreeze.com/breeze/images/banner_reeds.jpg'},
  // {key: 'fresh_breeze', ref: 'http://www.979thebreeze.com/breeze/images/banner_reeds.jpg'},
  // {key: 'strong_breeze', ref: 'http://www.979thebreeze.com/breeze/images/banner_reeds.jpg'},
  // {key: 'high_wind_near_gale', ref: 'https://a.scpr.org/i/9f09aea0e099693dc9857228b1c9717e/38737-full.jpg'},
  // {key: 'gale', ref: 'https://www.flickr.com/photos/brightonbird/37814782586'},
  // {key: 'severe_gale', ref: 'https://www.flickr.com/photos/brightonbird/37814782586'},
  // {key: 'storm', ref: 'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  // {key: 'violent_storm', ref: 'https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
  // {key: 'hurricane', ref: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.coastalliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1475798793%2Fhurricane-elena-space-scf4320-006.jpg%3Fitok%3DTELXzN8Q&w=800&q=85'}];
  
  // alert(imagesArr[1].ref)
  // $('body').css("background-image", "url('http://www.979thebreeze.com/breeze/images/banner_reeds.jpg'");
  // function tryBk(){
    // for (var i= 0; i < 90; i++){      
      // var i = 2;
      // alert(i + " " + imagesArr[i].ref);
      // alert(imagesArr.indexOf("key"));
      // alert("url('" + imagesArr[imagesArr.indexOf("storm")].ref + "')");
      // // $('body').css('background-image', 'url(\'' + imagesArr[i].ref + '\')');      
      // $('body').css('background-image', 'url(' + imagesArr[i].ref + ')');
      // // $('body').css('background-image', "url('http://www.979thebreeze.com/breeze/images/banner_reeds.jpg')");
      
    // }
  // }
  // tryBk();
  // alert(imagesArr[2].ref);

  function displayTemp(F,C){
    if(C) return Math.round((F-32)*5/9 * 10)/10 + '&deg;C';
    return Math.round(F*10)/10 + '&deg;F';}

  function displayMetric(C){
    if(C) return Math.round((apiData.main.temp - 32)*5/9 * 10)/10 + '&deg;C';
    return Math.round(apiData.main.temp * 10)/10 + '&deg;F';}
  
  function displayRate(rate,C){
    if(C) return Math.round(rate* 0.44704 * 10)/10 + ' meter/sec';
    return Math.round(rate * 10)/10 + ' miles/hr';}
  
$.getJSON('https://freegeoip.net/json/').done(function(location){
    // console.log(location);
    // console.log(document.querySelector('input').value);
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + document.querySelector('input').value + '&units=imperial&appid=267946ad29e61f5dfc4660f8aae69962',function(data){
  // $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + document.getElementById('browswers').value + '&units=imperial&appid=267946ad29e61f5dfc4660f8aae69962',function(data){
      apiData=data;          
      var iconSource = 'http://openweathermap.org/img/w/' + apiData.weather[0].icon + '.png';
      $('#currentTemp').html( displayTemp(apiData.main.temp ,C)).append('<br><img src = ' + iconSource + '>');      
      $('#currentWeather').html(apiData.weather[0].description);
      $('#humidity').html(apiData.main.humidity + "%");  
      $('#city').html(apiData.name);
      $('#latitude').html(apiData.coord.lat);
      $('#longitude').html(apiData.coord.lon);
      $('#speed').html(displayRate(apiData.wind.speed,C));
      $('#direction').html(apiData.wind.deg+'&deg;');
      $('#gust').html(displayRate(apiData.wind.gust,C));
      // console.log(apiData);                
      $('body').css('background-image', 'url('+ backgroundImagesArr[apiData.weather[0].description.replace(/ /g, "_")] + ')');
      $('#toggle').click(function(){          
        C = !C;
        $('#currentTemp').html( displayTemp(apiData.main.temp, C)).append('<br><img src = ' + iconSource + '>');
        $('#speed').html(displayRate(apiData.wind.speed,C));
        $('#gust').html(displayRate(apiData.wind.gust,C));
      })
    })
  })
  $("input").change(function(){
    $.getJSON('https://freegeoip.net/json/').done(function(location){
      // console.log(location);
      // console.log(document.querySelector('input').value);
      $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + document.querySelector('input').value + '&units=imperial&appid=267946ad29e61f5dfc4660f8aae69962',function(data){
    // $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + document.getElementById('browswers').value + '&units=imperial&appid=267946ad29e61f5dfc4660f8aae69962',function(data){
        apiData=data;          
        var iconSource = 'http://openweathermap.org/img/w/' + apiData.weather[0].icon + '.png';
        $('#currentTemp').html( displayTemp(apiData.main.temp ,C)).append('<br><img src = ' + iconSource + '>');      
        $('#currentWeather').html(apiData.weather[0].description);
        $('#humidity').html(apiData.main.humidity + "%");  
        $('#city').html(apiData.name);
        $('#latitude').html(apiData.coord.lat);
        $('#longitude').html(apiData.coord.lon);
        $('#speed').html(displayRate(apiData.wind.speed,C));
        $('#direction').html(apiData.wind.deg+'&deg;');
        $('#gust').html(displayRate(apiData.wind.gust,C));
        // console.log(apiData);                
        $('body').css('background-image', 'url('+ backgroundImagesArr[apiData.weather[0].description.replace(/ /g, "_")] + ')');
        // $('#toggle').click(function(){          
        //   C = !C;
        //   $('#currentTemp').html( displayTemp(apiData.main.temp, C)).append('<br><img src = ' + iconSource + '>');
        //   $('#speed').html(displayRate(apiData.wind.speed,C));
        //   $('#gust').html(displayRate(apiData.wind.gust,C));
        // })
      })
    })  
  });
})

//$(".CLASSNAME").addClass("animated bounce");
//$("#target6").addClass("animated fadeOut")
//$("#getMessage").on("click", function(){});
//$("#target1").css("color", "blue");


//http://freegeoip.net/?q=172.92.234.170

//icons at: https://openweathermap.org/weather-conditions

// data arrays from JSON call......
//  from: https://openweathermap.org/current
// {"coord":{"lon":-122.09,"lat":37.39},
// "sys":{"type":3,"id":168940,"message":0.0297,"country":"US","sunrise":1427723751,"sunset":1427768967},
// "weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],
// "base":"stations",
// "main":{"temp":285.68,"humidity":74,"pressure":1016.8,"temp_min":284.82,"temp_max":286.48},
// "wind":{"speed":0.96,"deg":285.001},
// "clouds":{"all":0},
// "dt":1427700245,
// "id":0,
// "name":"Mountain View",
// "cod":200