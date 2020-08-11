
# gps-frontend
The aim of this project is to build a Front-End application responsible to interact with locations-api. This UI will show google maps and based on a license plate, it will retrieve
all locations from that license plate in the last two hours.

Requirements

* [node](https://nodejs.org/en/download/)
* [Docker](https://docs.docker.com/engine/install/ubuntu/#installation-methods)
* [Docker Compose](https://docs.docker.com/compose/install/#install-compose-on-linux-systems)
* [Git](https://git-scm.com/downloads)

### Preparing environment

git clone https://github.com/rafaelpcustodio/gps-truck-frontend.git

### Starting application locally

Before starting it. You must have a Google API key to be able to use Google
APIs. This project uses Google Places API and Google Maps API. To create your 
key, you must follow the steps located on this link:

https://developers.google.com/maps/documentation/javascript/get-api-key

Basically you have to create an account on google. 
After that go to Google Cloud Platform. Select a project.
Go on the left-side bar and select API and services. Select credentials.

Create a credential, key for API. This will generate your API Key. After 
generating this API key, you have to  search for "Google Places API" and
"Google maps API" on the Google Cloud Platform. Active them to allow your
API Key to use these APIs. It is important to remember that your selected 
project must be with billing settings enabled before generating the Key.

Any additional doubt can be checked on Google documentation:

https://developers.google.com/maps/documentation/javascript/places

With your API KEY, go to the "docker-compose.yml" on the root of this 
project and paste it on the line 12:

environment:
      - REACT_APP_GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY_MUST_BE_HERE

after it, save the changes.

In the root of the project type the following command on terminal:

docker-compose up

This command will build the image from Dockerfile of this project. 


### Testing locally

After following the instructions from the READ-ME located on the repository:

https://github.com/rafaelpcustodio/locations-api

You'll also have the backend API called locations-api which is responsible
for data retrieving for this Frontend Application.

If you want to test. You can create some locations using the following end-point
from locations-api:

POST http://localhost:8080/api/v1/locations 

with a request-body like:

{
	"licensePlate": "ABC1234",
	"latitude": 41.40368,
	"longitude" :2.17438
}

you can use Insomnia or Postman to help you:

https://insomnia.rest/download/

https://www.postman.com/


After creating some location points. You can make a search based on the license
plate (ex: ABC1234) and the api will show all the positions of your vehicle. 
(It is important to remember that the license plate format must be in the exact
format, otherwise it will not save correctly)



### Used libraries
- FontAwesome
- Axios
- Bootstrap
- Connected-react-router
- Dotenv
- Google-maps-react
- history
- http
- immutable
- lodash
- moment
- props-types
- react
- react-aasync-script-loader
- react-bootstrap
- react-dom
- react-fontawesome
- react-modal
- react-popper
- react-redux
- react-router
- react-router-dom
- react-scripts
- react-transition-group
- reactstrap
- redux
- redux-actions
- redux-immutable
- redux-saga
- reselect
- styled-components


5 - Docker hub:
This application can also be found via [Docker image Gps Frontend](https://hub.docker.com/repository/docker/rafaelpcustodio/gps-frontend)


