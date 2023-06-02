import Box from "@mui/material/Box";
import {config} from "../const/config";
import Typography from "@mui/material/Typography";
import {questionnaire} from "../const/questionnaire";
import OutputUserNameDisplay from "./OutputUserNameDisplay";
import InputRadio from "./InputRadio";
import * as React from "react";

export default function InputUserNameAssign(props) {
    const {data, handleUpdateData, questionName, language, colorBackground, colorText} = props;

    return (
        <Box>
          <OutputUserNameDisplay
                language={language}
                questionName={questionName}
                data={data}
                handleUpdateData={handleUpdateData}
                colorBackground={colorBackground}
                colorText={colorText}
            />
        </Box>
    )

}