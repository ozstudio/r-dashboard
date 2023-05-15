import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


const FAQ = () => {
     const theme = useTheme();
     const colors = tokens(theme.palette.mode)

    return (
        <Box m ='20px'>
            <Header title = 'FAQ' 
            subtitle='FAQ questions' />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]}
                    variant = 'h5'>
                        Important question
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    Important answer
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]}
                    variant = 'h5'>
                        Important question
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    Important answer
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]}
                    variant = 'h5'>
                        Important question
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    Important answer
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]}
                    variant = 'h5'>
                        Important question
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    Important answer
                </AccordionDetails>
            </Accordion>
        </Box>
        
    )
}

export default FAQ
