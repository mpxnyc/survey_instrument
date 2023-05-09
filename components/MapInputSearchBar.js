import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import Box from "@mui/material/Box";
import {Autocomplete, Paper, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import _ from "lodash";
import {config} from "../const/config";

export default function Search({ panTo }) {
    const {
            ready,
            value,
            suggestions: { status, data },
            setValue,
            clearSuggestions,
        } = usePlacesAutocomplete({
            requestOptions: {
                location: { lat: () => config.mapSettings.center.lat, lng: () => config.mapSettings.center.lng },
                radius: config.mapSettings.mapSearchBar.searchRadius,
            },
        })
    ;


    const handleInput = _.throttle((e) => {
        setValue(e.target.value);
    }, config.mapSettings.mapSearchBar.searchThrottleDuration, {leading: false, trailing: true});


    const handleSelect = async (e) => {

        const address = e.target.value
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });


        } catch (error) {
            console.log("😱 Error: ", error);
        }
    };



    return (
        <Box sx={{position:"fixed", top:10, left:10, right:10, display: "flex", justifyContent:"center"}}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={value}
                sx={{ width: "100vh", alignItems: "center", alignContent: "center", alignSelf: "center" }}
                options={data}
                onSelect={handleSelect}
                getOptionLabel={(option) =>
                    typeof option === 'string' ? option : option.description
                }
                renderInput={
                    (params) =>
                        <Paper sx={{margin: 1, opacity: 0.9}}>
                            <TextField
                                {...params}
                                variant="filled"
                                label={
                                    <Typography variant={"body1"}>Search a location</Typography>
                                }
                                onChange={handleInput}
                            />
                        </Paper>
                }
            />
        </Box>


    );
}