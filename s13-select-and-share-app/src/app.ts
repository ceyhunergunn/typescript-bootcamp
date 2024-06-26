import axios from "axios";
const mapEl = document.getElementById("map")! as HTMLElement;

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyCnZmAje3Zaa8idcI2iOmnOSlsln2B1axI";

// declare var google: any;

type GoogleGeocadimgResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};
function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GoogleGeocadimgResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      console.log(response);
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = response.data.results[0].geometry.location;
      const map = new google.maps.Map(mapEl, {
        center: coordinates,
        zoom: 16,
      });
      new google.maps.Marker({
        map: map,
        position: coordinates,
      });
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
}

form.addEventListener("submit", searchAddressHandler);
