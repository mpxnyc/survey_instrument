import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {ButtonGroup, Stack, Switch} from "@mui/material";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import {questionnaire} from "../const/questionnaire";
import Typography from "@mui/material/Typography";


export default function ControlNavigation(props) {
    const {
        type,
        handleNextQuestion,
        handlePreviousQuestion,
        handleConfirm,
        handleCancel,
        language,
        handleToggleLanguage,
        variant,
        color,
        backButtonDisabled,
        forwardButtonDisabled,
        handleCloseDialog,
        colorBackground,
        colorText

    } = props;



    const languageToggle =
        <Box sx={{display: "flex", margin: 2}}><Typography color={"primary"}>EN</Typography><Switch checked={language !== "english"} onChange={handleToggleLanguage} color="default" /><Typography color={"primary"}>SP</Typography></Box>


    let buttonsNavigate;




    switch (type) {
        case "funkybox":
            buttonsNavigate =
                <ButtonGroup>
                <Button variant={'outlined'} color={colorText}>{questionnaire.buttons.check_results[language]}</Button>
                <Button variant={'contained'} color={colorText} onClick={handlePreviousQuestion}>{questionnaire.buttons.challenge_friends[language]}</Button>
                <Button variant={'contained'} color={colorText} onClick={handleNextQuestion}>{questionnaire.buttons.take_survey[language]}</Button>
            </ButtonGroup>
            break;
        case "surveydone":
            buttonsNavigate =
                <ButtonGroup>
                    <Button variant={'outlined'} color={colorText}>{questionnaire.buttons.check_results[language]}</Button>
                    <Button variant={'contained'} color={colorText}>{questionnaire.buttons.challenge_friends[language]}</Button>
                </ButtonGroup>
            break;
        case "question":
            buttonsNavigate = <ButtonGroup variant={variant} aria-label="outlined button group">
                <Button variant={variant}   onClick={handlePreviousQuestion}  disabled={backButtonDisabled}><SkipPreviousIcon/></Button>
                <Button variant={variant}   onClick={handleNextQuestion}      disabled={forwardButtonDisabled}><SkipNextIcon/></Button>
            </ButtonGroup>
            break;
        case "confirm":
            buttonsNavigate = <Box>
                <Button variant={variant} color={color} onClick={handleCancel}>Cancel</Button>
                <Button variant={variant} onClick={handleConfirm}>Confirm</Button>
            </Box>
            break;
        case "instruction":
            buttonsNavigate = <Box>
            </Box>
            break;
        default :
            buttonsNavigate = <ButtonGroup variant={variant} color={color} aria-label="outlined button group">
                <Button variant={variant} color={color} onClick={handlePreviousQuestion}  disabled={backButtonDisabled}><SkipPreviousIcon/></Button>
                <Button variant={variant} color={color} onClick={handleNextQuestion}      disabled={forwardButtonDisabled}><SkipNextIcon/></Button>
            </ButtonGroup>
    }



    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
        >

            {buttonsNavigate}
            {languageToggle}
        </Stack>
    );
}