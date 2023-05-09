import React, {useCallback, useEffect, useReducer, useState} from "react";
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import Box from "@mui/material/Box";
import {Drawer} from "@mui/material";
import CanvasQuestion from "./canvasQuestion";
import {questionnaire} from "../const/questionnaire";
import ControlNavigation from "./ControlNavigation";
import {config} from "../const/config";
import services from "../lib/services";
import Search from "./MapInputSearchBar";


const libraries = ["places"];


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
        setStudyData,
        english,
        handlePageTransitionForward,
        handlePageTransitionBack,
        handleToggleLanguage,
        groupSexLocationSelect,
        homeLocationSelect,
        mapSearchBarVisible,
        setErrorDialog,
        setWaiting,
        setCurrentMarker,
        setMarkers,
        setQuestionCurrentMap,
        setQuestionHistoryMap,
        currentMarker,
        markers,
        questionCurrentMap,
        handleConfirmRemovePin,
        handleCancelRemovePin
    }
        = props;


    const [instructionsOpen, setInstructionsOpen] = useState(true);
    const [removePinPromptOpen, setRemovePinPromptOpen] = useState(false);


    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries,
    });


    const [instructionsHomeOpen, setInstructionsHomeOpen] = React.useState(homeLocationSelect);
    const [instructionsSexOpen, setInstructionsSexOpen] = React.useState(groupSexLocationSelect);
    const [dataSafetyInfoOpen, setDataSafetyInfoOpen] = React.useState(false);

    //const [markers, setMarkers] = useState([studyData.places]);
    const [selected, setSelected] = useState(null);
    const [mapDialogOpen, setMapDialogOpen] = useState(false);
    const [, forceRerender] = useReducer(x => x + 1, 0, x => x + 1);



    const handleMarkerClick = (event) => {
        const placeId = "place" + event.latLng.lat() + event.latLng.lng()
        setCurrentMarker(placeId);
        setRemovePinPromptOpen(true);


    }

    const handleMapClick = async (event) => {


        const placeId = "place" + event.latLng.lat() + event.latLng.lng()

        const censusTract = await services.getCensusTract({lat: event.latLng.lat(), lng: event.latLng.lng()})

        setMarkers(
            (old) => {
                const newMarker = {id: placeId, lat: event.latLng.lat(), lng: event.latLng.lng(), censusTract: censusTract};
                const result = {...old, [placeId]: newMarker}
                setCurrentMarker(placeId);
                handleUpdateSurveyData(currentQuestion, result)
                return result
            })

        setQuestionCurrentMap(
            () => {
                setQuestionHistoryMap([])
                return questionnaire[currentQuestion].mapQuestionOrder && questionnaire[currentQuestion].mapQuestionOrder[0]
            })

    }

    const handleCloseInstructions = () => {
        setInstructionsOpen(false);
    }







    let mapInstructions = <CanvasQuestion
        data={data}
        currentQuestion={questionnaire[currentQuestion].mapQuestionInstruction}
        visible={true}
        language={language}
        questionHistory={[]}
    />



    let removePinPrompt = <CanvasQuestion
        data={data}
        currentQuestion={questionnaire[currentQuestion].mapRemovePinQuestion}
        visible={removePinPromptOpen}
        language={language}
        handleConfirm={handleConfirmRemovePin}
        handleCancel={handleCancelRemovePin}
        handleToggleLanguage={handleToggleLanguage}
        questionHistory={[]}

    />

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
        <Drawer open={visible} anchor={"top"}>
            <div sx={{position: "fixed", bottom: 0, top: 0, left: 0, right: 0}}>
                {visible && <Box>
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
                                    return (
                                        <Marker
                                            key={marker && `${marker.lat}-${marker.lng}`}
                                            position={marker && {lat: marker.lat, lng: marker.lng}}
                                            onClick={handleMarkerClick}
                                            icon={{
                                                url: `/MPX_unicorn.svg`,
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
                    {mapInstructions}
                    {removePinPrompt}
                    {controlNavigationButtons}
                </Box>
                }
            </div>


        </Drawer>


    )
}

