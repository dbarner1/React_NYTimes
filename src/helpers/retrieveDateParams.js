import  { formatDates } from './formatDates';

function retrieveDateParams() {
  var end_time = new Date();
  var begin_time = new Date(end_time - 1000 * 60 * 60 * 24 * 21);

  var begin_date = formatDates(begin_time);
  var end_date = formatDates(end_time);

  var BEGIN_DATE_PARAM =`&begin_date=${begin_date}`;
  var END_DATE_PARAM = `&end_date=${end_date}`;
  var DATE_PARAMS = BEGIN_DATE_PARAM+END_DATE_PARAM;
  return DATE_PARAMS;
}


export {retrieveDateParams};
