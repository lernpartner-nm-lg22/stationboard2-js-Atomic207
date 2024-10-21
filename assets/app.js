"use strict";
const stationElement = document.getElementById("station");
const buttonElement = document.getElementById("submit");
const tableElement = document.getElementById("table-body");

buttonElement.addEventListener("click", async () => {
  const data = await getData();
  displayData(data);
});
// opendata api URL

const getData = async () => {
  const station = stationElement.value;
  const url = `https://transport.opendata.ch/v1/stationboard?station=${station}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const displayData = (data) => {
  const stationName = data.station.name;
    const stationNameElement = document.getElementById("station-name");
    stationNameElement.textContent = stationName;                                   
};
