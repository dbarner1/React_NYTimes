function formatThisTime(time) {
    var timeStamp = "" + time;
    var timeStampArray = timeStamp.split("");
    var a = timeStampArray;
    var ESThour;
    var PMorAM;
    var raw_hour = "" + a[11]+a[12];

    if( (raw_hour - 5) > 0) {
      ESThour = (raw_hour - 5);

      if(raw_hour > 12) {
        ESThour =  raw_hour - 12;
      }
    }
    else {
      ESThour = raw_hour;
      ;
    }

    raw_hour > 12 ? PMorAM = "PM" : PMorAM = "AM";
    return ESThour + a[13] + a[14] + a[15] + " " + PMorAM;
  }

export {formatThisTime};
