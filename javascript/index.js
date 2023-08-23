function updateTime() {
  // San Diego
  let sanDiegoElement = document.querySelector(`#san-diego`);
  let sanDiegoDateElement = sanDiegoElement.querySelector(`.date`);
  let sanDiegoTimeElement = sanDiegoElement.querySelector(`.time`);
  let sanDiegoTime = moment().tz(`America/Los_Angeles`);

  sanDiegoDateElement.innerHTML = sanDiegoTime.format("MMMM Do YYYY");
  sanDiegoTimeElement.innerHTML = sanDiegoTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );

  // Manchester
  let manchesterElement = document.querySelector(`#manchester`);
  let manchesterDateElement = manchesterElement.querySelector(`.date`);
  let manchesterTimeElement = manchesterElement.querySelector(`.time`);
  let manchesterTime = moment().tz(`Europe/London`);

  manchesterDateElement.innerHTML = manchesterTime.format("MMMM Do YYYY");
  manchesterTimeElement.innerHTML = manchesterTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );

  // Singapore
  let singaporeElement = document.querySelector(`#singapore`);
  let singaporeDateElement = singaporeElement.querySelector(`.date`);
  let singaporeTimeElement = singaporeElement.querySelector(`.time`);
  let singaporeTime = moment().tz(`Asia/Singapore`);

  singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");
  singaporeTimeElement.innerHTML = singaporeTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );

  // Queenstown
  let queenstownElement = document.querySelector(`#queenstown`);
  let queenstownDateElement = queenstownElement.querySelector(`.date`);
  let queenstownTimeElement = queenstownElement.querySelector(`.time`);
  let queenstownTime = moment().tz(`Pacific/Auckland`);

  queenstownDateElement.innerHTML = queenstownTime.format("MMMM Do YYYY");
  queenstownTimeElement.innerHTML = queenstownTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );
}

updateTime();
setInterval(updateTime, 1000);
