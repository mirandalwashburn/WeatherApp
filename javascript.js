<script src="https:////cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react-dom.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


<script>
/**** GET EACH DAY ****/
function GetDates(startDate, daysToAdd) {
  var arrDates = [];
  for (var i = 0; i <= daysToAdd; i++) {
    var currentDate = new Date();
    currentDate.setDate(startDate.getDate() + i);
    arrDates.push(DayAsString(currentDate.getDay()));
  }
  return arrDates;
}

function DayAsString(dayIndex) {
  var weekdays = new Array(7);
  weekdays[0] = "Sun";
  weekdays[1] = "Mon";
  weekdays[2] = "Tue";
  weekdays[3] = "Wed";
  weekdays[4] = "Thurs";
  weekdays[5] = "Fri";
  weekdays[6] = "Sat";
  return weekdays[dayIndex];
}

var startDate = new Date();
var arrDates = GetDates(startDate, 7);

/**** WEATHER API ****/
var weekday = ["S", "M", "T", "W", "T", "F", "S"];
var d = new Date();
function forecast(location) {
  $.ajax({
    dataType: "json",
    url: "https://api.openweathermap.org/data/2.5/forecast",
    data: {
      id: 5012495, /*Change city here*/
      units: "imperial",
      appid: "YOUR_APP_KEY", /*Change to your API key here*/
      cnt: "5",
      function(json) {}
    }
  }).done(function(response) {
    $(".forecast").empty();
    var dayCounter = d.getDay();
    for (i = 0; i <= 4; i++) {
      if (dayCounter >= weekday.length - 1) {
        dayCounter = 0;
      } else {
        dayCounter += 1;
      }
      var arr = [];
    }

    /**** REACT ****/
    const Title = props => {
      return <div className="weather__title">{props.title}</div>;
    };
    const Day = props => {
      return <div className="weather__day">{props.day}</div>;
    };
    const Image = props => {
      return (
        <div className="weather__image">
          <img src={`http://openweathermap.org/img/w/${props.image}.png`} />
        </div>
      );
    };
    const HighTemp = props => {
      return <div className="weather__highTemp">{props.highTemp}&#176;</div>;
    };
    const LowTemp = props => {
      return <div className="weather__lowTemp">{props.lowTemp}&#176;</div>;
    };

    class WeatherCard extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <div>
            <Title title={response.city.name} />
            <div className="weather__wrapper">
              <div className="weather__cont">
                <Day day={arrDates[0]} />
                <Image image={response.list[0].weather[0].icon} />
                <HighTemp
                  highTemp={Math.round(response.list[0].main.temp_max)}
                />
                <LowTemp lowTemp={Math.round(response.list[0].main.temp_min)} />
              </div>

              <div className="weather__cont">
                <Day day={arrDates[1]} />
                <Image image={response.list[1].weather[0].icon} />
                <HighTemp
                  highTemp={Math.round(response.list[1].main.temp_max)}
                />
                <LowTemp lowTemp={Math.round(response.list[1].main.temp_min)} />
              </div>

              <div className="weather__cont">
                <Day day={arrDates[2]} />
                <Image image={response.list[2].weather[0].icon} />
                <HighTemp
                  highTemp={Math.round(response.list[2].main.temp_max)}
                />
                <LowTemp lowTemp={Math.round(response.list[2].main.temp_min)} />
              </div>

              <div className="weather__cont">
                <Day day={arrDates[3]} />
                <Image image={response.list[3].weather[0].icon} />
                <HighTemp
                  highTemp={Math.round(response.list[3].main.temp_max)}
                />
                <LowTemp lowTemp={Math.round(response.list[3].main.temp_min)} />
              </div>

              <div className="weather__cont">
                <Day day={arrDates[4]} />
                <Image image={response.list[4].weather[0].icon} />
                <HighTemp
                  highTemp={Math.round(response.list[4].main.temp_max)}
                />
                <LowTemp lowTemp={Math.round(response.list[4].main.temp_min)} />
              </div>
            </div>
          </div>
        );
      }
    }
    ReactDOM.render(<WeatherCard />, document.getElementById("weather"));

  });
}
forecast(location);
</script>
