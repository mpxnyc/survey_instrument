import FormControl from '@mui/material/FormControl';
import {Card, Checkbox, Divider, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Stack} from "@mui/material";
import {questionnaire} from "../const/questionnaire";
import {useState} from "react";
import Typography from "@mui/material/Typography";
import * as React from "react";
import theme from "../const/theme";
import Box from "@mui/material/Box";


export default function InputRadioGrid(props) {
    const {data, handleUpdateData, questionName, language, colorBackground, colorText} = props;
    const [value, setValue] = useState(data[questionName]);

    const handleChange = (event) => {
        setValue(() => {
            console.log("handle change, questionName and target value", questionName, event.target.value)
            handleUpdateData(questionName, event.target.value)
            return event.target.value
        })
    }

    const handleGridChange = (row) => {
        const handleCheckBoxChange = (event) => {

            setValue(
                (old) => {

                    const result = {...old, [row[0]]: event.target.value}

                    handleUpdateData(questionName, result)

                    return result
                }

            )

        }

        return handleCheckBoxChange

    }


const nOptions = questionnaire[questionName].options[language].columns.length
    const widthLabel = 5
    const widthRadio = 8


    return (

        <Box
            sx={{  alignContent: "center", alignSelf: "center", justifySelf: "center", justifyContent: "center", justifyItems: "center"}}

        >
            {Object.entries(questionnaire[questionName].options[language].rows).map(
                (outerItem, outerIndex) => {
                    return (

                        <Box sx={{ display: 'flex' }}
                             key={outerIndex}>
                            <Grid container direction={"row"} sx={{   display: "flex",
                                alignItems: "center",
                                alignContent: "center",
                                alignSelf: "center",
                                justifySelf: "top",
                                justifyContent: "center",
                                justifyItems: "center",}}>
                                <Grid item xs={widthLabel}   sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    alignContent: "center",
                                    alignSelf: "center",
                                    justifySelf: "top",
                                    justifyContent: "right",
                                    justifyItems: "right",
                                    padding: 2
                                }}>
                                    <Typography
                                        variant={"body1"}
                                        color={colorText}
                                        align={"right"}
                                        sx={{alignItems: "center"}}

                                    >
                                        {
                                            outerItem[1]
                                        }
                                    </Typography>
                                </Grid>
                                <Grid item
                                      sx={{
                                          display: "flex",
                                          alignItems: "center",
                                          alignContent: "center",
                                          alignSelf: "center",
                                          justifySelf: "center",
                                          justifyContent: "left",
                                          justifyItems: "center",

                                }}
                                >
                                    <RadioGroup
                                        item
                                        id={questionName}
                                        row={true}
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        value={value[outerItem[0]]}
                                        onChange={handleGridChange(outerItem)}
                                        sx={{display: "flex",  margin: 1}}
                                    >
                                        {Object.entries(questionnaire[questionName].options[language].columns).map(
                                            (item, index) => {
                                                return (
                                                    <FormControlLabel
                                                        sx={{margin: 0.5}}
                                                        key={index}
                                                        value={item[0]}
                                                        control={
                                                            <Radio
                                                                icon={<SelectionItemRadio selected={false} text={item[1]} colorBackground={colorBackground} colorText={colorText}/>}
                                                                checkedIcon={<SelectionItemRadio selected={true} text={item[1]} colorBackground={colorBackground} colorText={colorText}/>}

                                                            />}
                                                    />)
                                            })}
                                    </RadioGroup>
                                </Grid>


                            </Grid>

                        </Box>

                    )
                }
            )}
        </Box>






    );
}



const SelectionItemRadio = (props) => {

    const {text, selected, colorBackground, colorText} = props;



    return(
        <Card

            color={colorText}
            elevation={0}
            sx={
                {
                    margin: 0,
                    backgroundColor: selected ? colorText : colorBackground,
                    width: 30,
                    height: 30,
                    alignContent: "center",
                    alignItems: "center",
                    padding: 1,
                    alignSelf: "center"
                }
            }
        >
            <Stack
                justifyContent={"center"}
                alignItems={"center"}
                alignSelf={"center"}

            >
                <Box
                    height={"100%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    alignSelf={"center"}
                    sx={{ backgroundColor: selected ? colorText : colorBackground, display: "flex", position: "absolute", top: 0, left: 0, bottom: 0, right: 0, opacity: selected ? 0.2 : 0.2, textAlign: "center"}}
                >

                </Box>

                <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    alignSelf={"center"}
                    height={"100%"}
                    sx={{  backgroundColor: selected ? colorText : colorBackground, display: "flex", position: "absolute",  left: 0, bottom: 0, right: 0, textAlign: "center", border: 1, borderColor: !selected ? colorText : colorBackground, borderRadius: 2}}
                >
                    <Typography
                        align={"center"}
                        color= {selected ? colorBackground : colorText}
                        variant={"body2"}
                        sx={{margin: 1}}
                    >
                        {text}
                    </Typography>
                </Box>

            </Stack>
        </Card>
    )
}