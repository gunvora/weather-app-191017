fetch("http://api.weatherstack.com/current?access_key=41daf8d321df23f5f8b06d20d8f4ad2a&query=Stockholm&units=m").then((response) => {
  return response.json()
}).then((json)  => {
  console.log(json);

  const cityName = json.location.name;
  document.getElementById('city').innerHTML = cityName;

  const weatherType = json.current.weather_descriptions[0];
  document.getElementById('type').innerHTML = weatherType;

  //Added Fetch typeicon
  const weatherTypeIcon = json.current.weather_icons[0];
  document.getElementById('typeicon').src = weatherTypeIcon;

  const temperature = json.current.temperature;
  document.getElementById('temp').innerHTML = (temperature.toFixed(0) +" &#176 C");

  const observationTime = json.current.observation_time;
  document.getElementById('obstime').innerHTML = observationTime;
  //Convert observationTime into 24h format
  document.getElementById('obstime24').innerHTML = observationTime24(observationTime);

  document.getElementById('todayYyyyMmDd').innerHTML = todaysDateConverted();

  document.getElementById('todaysName').innerHTML = namnsdag();

  document.getElementById('todayDayMonth').innerHTML = todaysDayMonth();
})


//Forecast data not supported in free subscription, so below not working/tested
//not sure how to use "todaysDate" in json request
//
// fetch("http://api.weatherstack.com/forecast?access_key=41daf8d321df23f5f8b06d20d8f4ad2a&query=Stockholm&units=m").then((response) => {
//   return response.json()
// }).then((json)  => {
//   console.log(json);
//
//   const todaysDate = todaysDateConverted();
//   console.log('Todays date:' + todaysDate);
//   let x = ('"' + todaysDate + '"').toString();
//   console.log(x);
//
//     //console.log(today);
//   const sunriseTime = json.forecast["todaysDate"].astro.sunrise;
//   console.log('Sunrise:' + sunriseTime)
//   //const sunRise = json.forecast."2019-10-07";
//   //console.log(sunRise);
// })


observationTime24 = (time) => {
    const PM = time.match('PM') ? true : false
    time = time.split(':')
    let hour = 0;
    let min = 0;

    if (PM) {
        if (time[0] == 12) {
          hour = time[0];
        }else{
          hour = 12 + parseInt(time[0],10);
        }
      //Above got wrong at 12pm
        min = time[1].replace('PM', '')
    } else {
      //Remove leading"0" in hour <10
      if (time[0] < 10) {
        hour = time[0].slice(1);
      }else {
        hour = time[0];
      }
        min = time[1].replace('AM', '')
    }
    // console.log('hour:' + hour);
    // console.log('min:' + min);
   return (hour + ':' + min);
}

//Current date to format yyyy-mm-dd
todaysDateConverted = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1;//January is 0!`
  let yyyy = today.getFullYear();
  if(dd<10){dd='0'+dd}
  if(mm<10){mm='0'+mm}
  return [yyyy, mm, dd].join('-');
}

//Today in format  xx MONTH
const todaysDayMonth = () => {
  const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let current_datetime = new Date()
  let formatted_date = current_datetime.getDate() + " " + months[current_datetime.getMonth()]
  return formatted_date;
}

//Fetch todays name
const namnsdag = () => {

  let nu=new Date();

  let dag=nu.getDate();

  let dat=dag;

let man=nu.getMonth()+1;

let namn="";

if(man==1&&dat==1)namn="Nyårsdagen";

if(man==1&&dat==2)namn="Svea";

if(man==1&&dat==3)namn="Alfred och Alfrida";

if(man==1&&dat==4)namn="Rut";

if(man==1&&dat==5)namn="Hanna och Hannele";

if(man==1&&dat==6)namn="Baltsar, Melker och Kasper";

if(man==1&&dat==7)namn="August och Augusta";

if(man==1&&dat==8)namn="Erland";

if(man==1&&dat==9)namn="Gunnar och Gunder";

if(man==1&&dat==10)namn="Sigurd och Sigbritt";

if(man==1&&dat==11)namn="Jan och Jannike";

if(man==1&&dat==12)namn="Frideborg och Fridolf";

if(man==1&&dat==13)namn="Knut";

if(man==1&&dat==14)namn="Felix och Felicia";

if(man==1&&dat==15)namn="Laura och Lorentz";

if(man==1&&dat==16)namn="Hjalmar och Helmer";

if(man==1&&dat==17)namn="Anton och Tony";

if(man==1&&dat==18)namn="Hilda och Hildur";

if(man==1&&dat==19)namn="Henrik";

if(man==1&&dat==20)namn="Fabian och Sebastian";

if(man==1&&dat==21)namn="Agnes och Agneta";

if(man==1&&dat==22)namn="Vincent och Viktor";

if(man==1&&dat==23)namn="Frej och Freja";

if(man==1&&dat==24)namn="Erika";

if(man==1&&dat==25)namn="Paul och Pål";

if(man==1&&dat==26)namn="Bodil och Boel";

if(man==1&&dat==27)namn="Göte och Göta";

if(man==1&&dat==28)namn="Karl och Karla";

if(man==1&&dat==29)namn="Diana";

if(man==1&&dat==30)namn="Gunhild och Gunilla";

if(man==1&&dat==31)namn="Ivar och Joar";



if(man==2&&dat==1)namn="Max och Maximilian";

if(man==2&&dat==2)namn="Marja och Mia";

if(man==2&&dat==3)namn="Disa och Hjördis";

if(man==2&&dat==4)namn="Ansgar och Anselm";

if(man==2&&dat==5)namn="Agata och Agda";

if(man==2&&dat==6)namn="Dorotea och Doris";

if(man==2&&dat==7)namn="Rikard och Dick";

if(man==2&&dat==8)namn="Berta och Bert";

if(man==2&&dat==9)namn="Fanny och Franciska";

if(man==2&&dat==10)namn="Iris";

if(man==2&&dat==11)namn="Yngve och Inge";

if(man==2&&dat==12)namn="Evelina och Evy";

if(man==2&&dat==13)namn="Agne och Ove";

if(man==2&&dat==14)namn="Valentin";

if(man==2&&dat==15)namn="Sigfrid";

if(man==2&&dat==16)namn="Julia och Julius";

if(man==2&&dat==17)namn="Alexandra och Sandra";

if(man==2&&dat==18)namn="Frida och Fritiof";

if(man==2&&dat==19)namn="Gabriella och Ella";

if(man==2&&dat==20)namn="Vivianne";

if(man==2&&dat==21)namn="Hilding";

if(man==2&&dat==22)namn="Pia";

if(man==2&&dat==23)namn="Torsten och Torun";

if(man==2&&dat==24)namn="Mattias och Mats";

if(man==2&&dat==25)namn="Sigvard och Sivert";

if(man==2&&dat==26)namn="Torgny och Torkel";

if(man==2&&dat==27)namn="Lage";

if(man==2&&dat==28)namn="Maria";

if(man==2&&dat==29)namn="Skottdagen";





if(man==3&&dat==1)namn="Albin och Elvira";

if(man==3&&dat==2)namn="Ernst och Erna";

if(man==3&&dat==3)namn="Gunborg och Gunvor";

if(man==3&&dat==4)namn="Adrian och Adriana";

if(man==3&&dat==5)namn="Tora och Tove";

if(man==3&&dat==6)namn="Ebba och Ebbe";

if(man==3&&dat==7)namn="Camilla";

if(man==3&&dat==8)namn="Siv";

if(man==3&&dat==9)namn="Torbjörn och Torleif";

if(man==3&&dat==10)namn="Edla och Ada";

if(man==3&&dat==11)namn="Edvin och Egon";

if(man==3&&dat==12)namn="Viktoria";

if(man==3&&dat==13)namn="Greger";

if(man==3&&dat==14)namn="Matilda och Maud";

if(man==3&&dat==15)namn="Kristoffer och Christel";

if(man==3&&dat==16)namn="Herbert och Gilbert";

if(man==3&&dat==17)namn="Gertrud";

if(man==3&&dat==18)namn="Edvard och Edmund";

if(man==3&&dat==19)namn="Josef och Josefina";

if(man==3&&dat==20)namn="Joakim och Kim";

if(man==3&&dat==21)namn="Bengt";

if(man==3&&dat==22)namn="Kennet och Kent";

if(man==3&&dat==23)namn="Gerda och Gerd";

if(man==3&&dat==24)namn="Gabriel och Rafael";

if(man==3&&dat==25)namn="Mary och Marion";

if(man==3&&dat==26)namn="Emanuel";

if(man==3&&dat==27)namn="Ralf och Rudolf";

if(man==3&&dat==28)namn="Malkom och Morgan";

if(man==3&&dat==29)namn="Jonas och Jens";

if(man==3&&dat==30)namn="Holger och Holmfrid";

if(man==3&&dat==31)namn="Ester";



if(man==4&&dat==1)namn="Harald och Hervor";

if(man==4&&dat==2)namn="Gudmund och Ingemund";

if(man==4&&dat==3)namn="Ferdinand och Nanna";

if(man==4&&dat==4)namn="Marianne och Marlene";

if(man==4&&dat==5)namn="Irene och Irja";

if(man==4&&dat==6)namn="Vilhelm och Helmi";

if(man==4&&dat==7)namn="Irma och Irmelin";

if(man==4&&dat==8)namn="Nadja och Tanja";

if(man==4&&dat==9)namn="Otto och Ottilia";

if(man==4&&dat==10)namn="Ingvar och Ingvor";

if(man==4&&dat==11)namn="Ulf och Ylva";

if(man==4&&dat==12)namn="Liv";

if(man==4&&dat==13)namn="Artur och Douglas";

if(man==4&&dat==14)namn="Tiburtius";

if(man==4&&dat==15)namn="Olivia och Oliver";

if(man==4&&dat==16)namn="Patrik och Patricia";

if(man==4&&dat==17)namn="Elias och Elis";

if(man==4&&dat==18)namn="Valdemar och Volmar";

if(man==4&&dat==19)namn="Olaus och Ola";

if(man==4&&dat==20)namn="Amalia och Amelie";

if(man==4&&dat==21)namn="Annika och Anneli";

if(man==4&&dat==22)namn="Allan och Glenn";

if(man==4&&dat==23)namn="Georg och G&ouml;ran";

if(man==4&&dat==24)namn="Vega";

if(man==4&&dat==25)namn="Markus";

if(man==4&&dat==26)namn="Teresia och Terese";

if(man==4&&dat==27)namn="Engelbrekt";

if(man==4&&dat==28)namn="Ture och Tyra";

if(man==4&&dat==29)namn="Tyko";

if(man==4&&dat==30)namn="Mariana";



if(man==5&&dat==1)namn="Valborg";

if(man==5&&dat==2)namn="Filip och Filippa";

if(man==5&&dat==3)namn="John och Jane";

if(man==5&&dat==4)namn="Monika och Mona";

if(man==5&&dat==5)namn="Gotthard och Erhard";

if(man==5&&dat==6)namn="Marit och Rita";

if(man==5&&dat==7)namn="Carina och Carita";

if(man==5&&dat==8)namn="&Aring;ke";

if(man==5&&dat==9)namn="Reidar och Reidun";

if(man==5&&dat==10)namn="Esbj&ouml;rn och Styrbj&ouml;rn";

if(man==5&&dat==11)namn="M&auml;rta och M&auml;rit";

if(man==5&&dat==12)namn="Charlotta och Lotta";

if(man==5&&dat==13)namn="Linnea och Linn";

if(man==5&&dat==14)namn="Halvard och Halvar";

if(man==5&&dat==15)namn="Sofia och Sonja";

if(man==5&&dat==16)namn="Ronald och Ronny";

if(man==5&&dat==17)namn="Rebecka och Ruben";

if(man==5&&dat==18)namn="Erik";

if(man==5&&dat==19)namn="Majken och Maj";

if(man==5&&dat==20)namn="Karolina och Carola";

if(man==5&&dat==21)namn="Konstantin och Conny";

if(man==5&&dat==22)namn="Henning och Hemming";

if(man==5&&dat==23)namn="Desirée och Desideria";

if(man==5&&dat==24)namn="Ivan och Vanja";

if(man==5&&dat==25)namn="Urban";

if(man==5&&dat==26)namn="Vilhelmina";

if(man==5&&dat==27)namn="Blenda och Beda";

if(man==5&&dat==28)namn="Ingeborg och Borghild";

if(man==5&&dat==29)namn="Yvonne och Jeanette";

if(man==5&&dat==30)namn="Vera och Veronika";

if(man==5&&dat==31)namn="Petronella och Pernilla";



if(man==6&&dat==1)namn="Gun och Gunnel";

if(man==6&&dat==2)namn="Rutger och Roger";

if(man==6&&dat==3)namn="Ingemar och Gudmar";

if(man==6&&dat==4)namn="Solveig och Solbritt";

if(man==6&&dat==5)namn="Bo";

if(man==6&&dat==6)namn="Sveriges nationaldag<br>Gustav och G&ouml;sta";

if(man==6&&dat==7)namn="Robert och Robin";

if(man==6&&dat==8)namn="Eivor och Majvor";

if(man==6&&dat==9)namn="B&ouml;rje och Birger";

if(man==6&&dat==10)namn="Svante och Boris";

if(man==6&&dat==11)namn="Bertil och Berthold";

if(man==6&&dat==12)namn="Eskil";

if(man==6&&dat==13)namn="Aina och Aino";

if(man==6&&dat==14)namn="H&aring;kan och Hakon";

if(man==6&&dat==15)namn="Margit och Margot";

if(man==6&&dat==16)namn="Axel och Axelina";

if(man==6&&dat==17)namn="Torborg och Torvald";

if(man==6&&dat==18)namn="Bj&ouml;rn och Bjarne";

if(man==6&&dat==19)namn="Germund och G&ouml;rel";

if(man==6&&dat==20)namn="Linda";

if(man==6&&dat==21)namn="Alf och Alvar";

if(man==6&&dat==22)namn="Paulina och Paula";

if(man==6&&dat==23)namn="Adolf och Alice";

if(man==6&&dat==24)namn="Johannes D&ouml;parens dag";

if(man==6&&dat==25)namn="David och Salomon";

if(man==6&&dat==26)namn="Rakel och Lea";

if(man==6&&dat==27)namn="Selma och Fingal";

if(man==6&&dat==28)namn="Leo";

if(man==6&&dat==29)namn="Petra och Peter";

if(man==6&&dat==30)namn="Elof och Leif";



if(man==7&&dat==1)namn="Aron och Mirjam";

if(man==7&&dat==2)namn="Rosa och Rosita";

if(man==7&&dat==3)namn="Aurora";

if(man==7&&dat==4)namn="Ulrika och Ulla";

if(man==7&&dat==5)namn="Laila och Ritva";

if(man==7&&dat==6)namn="Esaias och Jessika";

if(man==7&&dat==7)namn="Klas";

if(man==7&&dat==8)namn="Kjell";

if(man==7&&dat==9)namn="J&ouml;rgen och &Ouml;rjan";

if(man==7&&dat==10)namn="André och Andrea";

if(man==7&&dat==11)namn="Eleonora och Ellinor";

if(man==7&&dat==12)namn="Herman och Hermine";

if(man==7&&dat==13)namn="Joel och Judit";

if(man==7&&dat==14)namn="Folke";

if(man==7&&dat==15)namn="Ragnhild och Ragnvald";

if(man==7&&dat==16)namn="Reinhold och Reine";

if(man==7&&dat==17)namn="Bruno";

if(man==7&&dat==18)namn="Fredrik och Fritz";

if(man==7&&dat==19)namn="Sara";

if(man==7&&dat==20)namn="Margareta och Greta";

if(man==7&&dat==21)namn="Johanna";

if(man==7&&dat==22)namn="Magdalena och Madeleine";

if(man==7&&dat==23)namn="Emma";

if(man==7&&dat==24)namn="Kristina och Kerstin";

if(man==7&&dat==25)namn="Jakob";

if(man==7&&dat==26)namn="Jesper";

if(man==7&&dat==27)namn="Marta";

if(man==7&&dat==28)namn="Botvid och Seved";

if(man==7&&dat==29)namn="Olof";

if(man==7&&dat==30)namn="Algot";

if(man==7&&dat==31)namn="Helena och Elin";



if(man==8&&dat==1)namn="Per";

if(man==8&&dat==2)namn="Karin och Kajsa";

if(man==8&&dat==3)namn="Tage";

if(man==8&&dat==4)namn="Arne och Arnold";

if(man==8&&dat==5)namn="Ulrik och Alrik";

if(man==8&&dat==6)namn="Alfons och Inez";

if(man==8&&dat==7)namn="Dennis och Denise";

if(man==8&&dat==8)namn="Silvia och Sylvia";

if(man==8&&dat==9)namn="Roland";

if(man==8&&dat==10)namn="Lars";

if(man==8&&dat==11)namn="Susanna";

if(man==8&&dat==12)namn="Klara";

if(man==8&&dat==13)namn="Kaj";

if(man==8&&dat==14)namn="Uno";

if(man==8&&dat==15)namn="Stella och Estelle";

if(man==8&&dat==16)namn="Brynolf";

if(man==8&&dat==17)namn="Verner och Valter";

if(man==8&&dat==18)namn="Ellen och Lena";

if(man==8&&dat==19)namn="Magnus och M&aring;ns";

if(man==8&&dat==20)namn="Bernhard och Bernt";

if(man==8&&dat==21)namn="Jon och Jonna";

if(man==8&&dat==22)namn="Henrietta och Henrika";

if(man==8&&dat==23)namn="Signe och Signhild";

if(man==8&&dat==24)namn="Bartolomeus";

if(man==8&&dat==25)namn="Lovisa och Louise";

if(man==8&&dat==26)namn="&Ouml;sten";

if(man==8&&dat==27)namn="Rolf och Raoul";

if(man==8&&dat==28)namn="Gurli och Leila";

if(man==8&&dat==29)namn="Hans och Hampus";

if(man==8&&dat==30)namn="Albert och Albertina";

if(man==8&&dat==31)namn="Arvid och Vidar";



if(man==9&&dat==1)namn="Samuel";

if(man==9&&dat==2)namn="Justus och Justina";

if(man==9&&dat==3)namn="Alfhild och Alva";

if(man==9&&dat==4)namn="Gisela";

if(man==9&&dat==5)namn="Adela och Heidi";

if(man==9&&dat==6)namn="Lilian och Lilly";

if(man==9&&dat==7)namn="Regina och Roy";

if(man==9&&dat==8)namn="Alma och Hulda";

if(man==9&&dat==9)namn="Anita och Annette";

if(man==9&&dat==10)namn="Tord och Turid";

if(man==9&&dat==11)namn="Dagny och Helny";

if(man==9&&dat==12)namn="&Aring;sa och &Aring;sl&ouml;g";

if(man==9&&dat==13)namn="Sture";

if(man==9&&dat==14)namn="Ida";

if(man==9&&dat==15)namn="Sigrid och Siri";

if(man==9&&dat==16)namn="Dag och Daga";

if(man==9&&dat==17)namn="Hildegard och Magnhild";

if(man==9&&dat==18)namn="Orvar";

if(man==9&&dat==19)namn="Fredrika";

if(man==9&&dat==20)namn="Elise och Lisa";

if(man==9&&dat==21)namn="Matteus";

if(man==9&&dat==22)namn="Maurits och Moritz";

if(man==9&&dat==23)namn="Tekla och Tea";

if(man==9&&dat==24)namn="Gerhard och Gert";

if(man==9&&dat==25)namn="Tryggve";

if(man==9&&dat==26)namn="Einar och Enar";

if(man==9&&dat==27)namn="Dagmar och Rigmor";

if(man==9&&dat==28)namn="Lennart och Leonard";

if(man==9&&dat==29)namn="Mikael och Mikaela";

if(man==9&&dat==30)namn="Helge";



if(man==10&&dat==1)namn="Ragnar och Ragna";

if(man==10&&dat==2)namn="Ludvig och Love";

if(man==10&&dat==3)namn="Evald och Osvald";

if(man==10&&dat==4)namn="Frans och Frank";

if(man==10&&dat==5)namn="Bror";

if(man==10&&dat==6)namn="Jenny och Jennifer";

if(man==10&&dat==7)namn="Birgitta och Britta";

if(man==10&&dat==8)namn="Nils";

if(man==10&&dat==9)namn="Ingrid och Inger";

if(man==10&&dat==10)namn="Harriet och Harry";

if(man==10&&dat==11)namn="Erling och Jarl";

if(man==10&&dat==12)namn="Valfrid och Manfred";

if(man==10&&dat==13)namn="Birgit och Berit";

if(man==10&&dat==14)namn="Stellan";

if(man==10&&dat==15)namn="Hedvig och Hillevi";

if(man==10&&dat==16)namn="Finn";

if(man==10&&dat==17)namn="Antonia och Toini";

if(man==10&&dat==18)namn="Lukas";

if(man==10&&dat==19)namn="Tore och Tor";

if(man==10&&dat==20)namn="Sibylla";

if(man==10&&dat==21)namn="Ursula och Yrsa";

if(man==10&&dat==22)namn="Marika och Marita";

if(man==10&&dat==23)namn="S&ouml;ren och Severin";

if(man==10&&dat==24)namn="Evert och Eilert";

if(man==10&&dat==25)namn="Inga och Ingalill";

if(man==10&&dat==26)namn="Amanda och Rasmus";

if(man==10&&dat==27)namn="Sabina";

if(man==10&&dat==28)namn="Simon och Simone";

if(man==10&&dat==29)namn="Viola";

if(man==10&&dat==30)namn="Elsa och Isabella";

if(man==10&&dat==31)namn="Edit och Edgar";



if(man==11&&dat==1)namn="Andr&eacute; och Andrea";

if(man==11&&dat==2)namn="Tobias";

if(man==11&&dat==3)namn="Hubert och Hugo";

if(man==11&&dat==4)namn="Sverker";

if(man==11&&dat==5)namn="Eugen och Eugenia";

if(man==11&&dat==6)namn="Gustav Adolf";

if(man==11&&dat==7)namn="Ingegerd och Ingela";

if(man==11&&dat==8)namn="Vendela";

if(man==11&&dat==9)namn="Teodor och Teodora";

if(man==11&&dat==10)namn="Martin och Martina";

if(man==11&&dat==11)namn="M&aring;rten";

if(man==11&&dat==12)namn="Konrad och Kurt";

if(man==11&&dat==13)namn="Kristian och Krister";

if(man==11&&dat==14)namn="Emil och Emilia";

if(man==11&&dat==15)namn="Leopold";

if(man==11&&dat==16)namn="Vibeke och Viveka";

if(man==11&&dat==17)namn="Naemi och Naima";

if(man==11&&dat==18)namn="Lillemor och Moa";

if(man==11&&dat==19)namn="Elisabet och Lisbet";

if(man==11&&dat==20)namn="Pontus och Marina";

if(man==11&&dat==21)namn="Helga och Olga";

if(man==11&&dat==22)namn="Cecilia och Sissela";

if(man==11&&dat==23)namn="Klemens";

if(man==11&&dat==24)namn="Gudrun och Rune";

if(man==11&&dat==25)namn="Katarina och Katja";

if(man==11&&dat==26)namn="Linus";

if(man==11&&dat==27)namn="Astrid och Asta";

if(man==11&&dat==28)namn="Malte";

if(man==11&&dat==29)namn="Sune";

if(man==11&&dat==30)namn="Anders och Andreas";



if(man==12&&dat==1)namn="Oskar och Ossian";

if(man==12&&dat==2)namn="Beata och Beatrice";

if(man==12&&dat==3)namn="Lydia";

if(man==12&&dat==4)namn="Barbro och Barbara";

if(man==12&&dat==5)namn="Sven";

if(man==12&&dat==6)namn="Nikolaus och Niklas";

if(man==12&&dat==7)namn="Angelika och Angela";

if(man==12&&dat==8)namn="Virginia";

if(man==12&&dat==9)namn="Anna";

if(man==12&&dat==10)namn="Malin och Malena";

if(man==12&&dat==11)namn="Daniel och Daniela";

if(man==12&&dat==12)namn="Alexander och Alexis";

if(man==12&&dat==13)namn="Lucia";

if(man==12&&dat==14)namn="Sten och Sixten";

if(man==12&&dat==15)namn="Gottfrid";

if(man==12&&dat==16)namn="Assar";

if(man==12&&dat==17)namn="Stig";

if(man==12&&dat==18)namn="Abraham";

if(man==12&&dat==19)namn="Isak";

if(man==12&&dat==20)namn="Israel och Moses";

if(man==12&&dat==21)namn="Tomas";

if(man==12&&dat==22)namn="Natanael och Jonatan";

if(man==12&&dat==23)namn="Adam";

if(man==12&&dat==24)namn="JULAFTON<br>Eva";

if(man==12&&dat==25)namn="Juldagen";

if(man==12&&dat==26)namn="Annandag jul<br>Stefan och Staffan";

if(man==12&&dat==27)namn="Johannes och Johan";

if(man==12&&dat==28)namn="Benjamin";

if(man==12&&dat==29)namn="Natalia och Natalie";

if(man==12&&dat==30)namn="Abel och Set";

if(man==12&&dat==31)namn="NY&Aring;RSAFTON<br>Sylvester";
console.log(namn)
return (namn + "!");
}
