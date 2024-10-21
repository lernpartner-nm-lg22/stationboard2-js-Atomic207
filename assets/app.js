"use strict";
const stationElement = document.getElementById("station");
const buttonElement = document.getElementById("submit");
const tableElement = document.getElementById("table-body");
// opendata api URL
const url = `https://transport.opendata.ch/v1/stationboard?station=${station}`;

const getData = async () => {
  const station = stationElement.value;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

buttonElement.addEventListener("click", async () => {
  const data = await getData();
  displayData(data);
});
const displayData = (data) => {};
