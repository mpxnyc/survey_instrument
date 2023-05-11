import React, {useEffect, useReducer, useState} from "react";
import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";
import Box from "@mui/material/Box";
import {Drawer} from "@mui/material";
import CanvasQuestion from "./canvasQuestion";
import {questionnaire} from "../const/questionnaire";
import ControlNavigation from "./ControlNavigation";
import {config} from "../const/config";
import services from "../lib/services";
import Search from "./MapInputSearchBar";
import {createCheckBoxDataObject, createDataShell} from "../lib/utilityFunctions";





export default function CanvasMap(props) {
    const {
        visible,
        handleNextQuestion,
        handlePreviousQuestion,
        data,
        currentQuestion,
        questionHistory,
        questionFuture,
        language,
        handleUpdateSurveyData,
        handleToggleLanguage,
        groupSexLocationSelect,
        homeLocationSelect,
        setErrorDialog,
        setCurrentMarker,
        setMarkers,
        setQuestionCurrentMap,
        setQuestionHistoryMap,
        markers,
        handleConfirmRemovePin,
        handleCancelRemovePin
    }
        = props;




    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: config.mapSettings.libraries,
    });



    const handleMarkerClick = (event) => {
        const placeId = "place" + event.latLng.lat() + event.latLng.lng()
        setCurrentMarker(placeId);

        setQuestionCurrentMap(
            () => {
                setQuestionHistoryMap([])
                return questionnaire[currentQuestion].mapRemovePinQuestion && questionnaire[currentQuestion].mapRemovePinQuestion
            })

    }

    const handleMapClick = async (event) => {


        const placeId = "place" + event.latLng.lat() + event.latLng.lng()

        const censusTract = await services.getCensusTract({lat: event.latLng.lat(), lng: event.latLng.lng()})

        setMarkers(
            (old) => {
                const newMarker = createDataShell(questionnaire[currentQuestion].mapQuestionOrder)
                newMarker.variable = currentQuestion;
                newMarker.id = placeId;
                newMarker.lat = event.latLng.lat();
                newMarker.lng = event.latLng.lng();
                newMarker.censusTract = censusTract
                const result = {...old, [placeId]: newMarker}
                setCurrentMarker(placeId);

                const entriesForQuestion = Object.fromEntries(Object.entries(result).filter((item) => {return (item[1].variable === currentQuestion)}))

                handleUpdateSurveyData(currentQuestion, entriesForQuestion)
                return result
            })

        setQuestionCurrentMap(
            () => {
                setQuestionHistoryMap([])
                return questionnaire[currentQuestion].mapQuestionOrder && questionnaire[currentQuestion].mapQuestionOrder[0]
            })

    }




    const backButtonDisabled    = questionHistory.length === 0
    const forwardButtonDisabled =  questionFuture.length === 0

    let controlNavigationButtons =
        <Box sx={{position: "fixed", bottom: 20, left: 10, right: 10, display: "flex", justifyContent: "center"}}>
            <ControlNavigation
                type={"question"}
                data={data}
                handleNextQuestion={handleNextQuestion}
                handlePreviousQuestion={handlePreviousQuestion}
                handleToggleLanguage={handleToggleLanguage}
                currentQuestion={currentQuestion}
                questionHistory={questionHistory}
                variant={"contained"}
                color={"secondary"}
                backButtonDisabled     = {backButtonDisabled}
                forwardButtonDisabled  = {forwardButtonDisabled}
            />
        </Box>


    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(config.mapSettings.mapSearchBar.setZoom);
    }, []);


    const mapRef = React.useRef();


    const handleMapLoad = React.useCallback((map) => {
        mapRef.current = map;


    }, []);

    if (loadError) {
        setErrorDialog({open: true, type: "network", escapable: false});
        return "No Network...";
    }
    if (!isLoaded) return "Loading...";




    return (

            <Drawer sx={{position: "fixed", bottom: 0, top: 0, left: 0, right: 0}} open={visible}>
                { visible && <Box>
                    <GoogleMap
                        id="map"
                        mapContainerStyle={config.mapSettings.mapContainerStyle}
                        zoom={config.mapSettings.zoom}
                        center={config.mapSettings.center}
                        options={config.mapSettings.options}
                        onClick={handleMapClick}
                        onLoad={handleMapLoad}
                    >
                        <Search panTo={panTo}/>
                        {
                            Object.values(markers).map(
                                (marker) => {

console.log("marker", marker)

                                    return (
                                        <MarkerF
                                            key={marker && `${marker.lat}-${marker.lng}`}
                                            position={marker && {lat: marker.lat, lng: marker.lng}}
                                            onClick={handleMarkerClick}
                                            icon={{
                                                url: config.mapSettings.iconURL[marker.variable] ? config.mapSettings.iconURL[marker.variable] : '/MPX_unicorn.svg',
                                                origin: new window.google.maps.Point(0, 0),
                                                anchor: new window.google.maps.Point(15, 15),
                                                scaledSize: new window.google.maps.Size(50, 50),
                                            }}
                                        />
                                    )
                                }
                            )
                        }

                    </GoogleMap>
                    {controlNavigationButtons}
                </Box>
                }
            </Drawer>





    )
}

