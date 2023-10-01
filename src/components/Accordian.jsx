import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { RiArrowDropDownLine } from "react-icons/ri";
import Section1 from './Section1';

const Accordian = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div id='accordian'>
            <Section1 subHead='GENERAL DENTAL CARE IN DENVER TECH CENTER, CO' head='Everything you expect and then some' video={'false'} />
            <h2>What we can offer.</h2>
            <p>We’re thrilled to be your new home for exceptional dentistry. Visit us for a cleaning, general dental exam, and a bit of pampering. Plus, everything else you need to look and feel your best.</p>
            <main>
                <Accordion className='service_accordian' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<RiArrowDropDownLine />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>White cavity fillings</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            With early detection technology, advanced imaging, and safe filling materials, addressing tooth decay is easier than ever.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='service_accordian' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<RiArrowDropDownLine />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Dental crowns</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Cover up and protect a damaged tooth. Often the final step of an implant and root canal treatment.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='service_accordian' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<RiArrowDropDownLine />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Gum disease treatments</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Gum disease is the top cause of tooth loss. Early detection and personalized treatment options will keep your mouth healthy.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='service_accordian' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<RiArrowDropDownLine />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Botox for TMJ, head, & facial pain</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Beyond aesthetic improvements, Botox treats common dental concerns like jaw pain, headaches, migraines, and clenching.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='service_accordian' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<RiArrowDropDownLine />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Dentures</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Replace missing teeth! Full and partial dentures created with top-of-the-line materials restore your ability to chew, speak, and smile.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='service_accordian' expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary
                        expandIcon={<RiArrowDropDownLine />}
                        aria-controls="panel6bh-content"
                        id="panel6bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Nightguards/mouthguards</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Stop grinding your teeth at night and protect your teeth during sports with a custom-made mouthguard.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='service_accordian' expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary
                        expandIcon={<RiArrowDropDownLine />}
                        aria-controls="panel7bh-content"
                        id="panel7bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Family Dentistry</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            All ages welcome here! Ou team aims to make every visit as pleasant and productive as possible for you and your family.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </main>
        </div>
    )
}

export default Accordian