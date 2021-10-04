import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FifthContent from "./fifthContent.js";
import FifthContent2 from "./fifthContent2.js";
import FifthContent3 from "./fifthContent3.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="mainBox">
      {/* sx={{ width: "100%" }} */}
      <Box className="classCard">
        {/* sx={{ borderBottom: 1, borderColor: "divider" }} */}
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {/* <Grid item xs={12} md={7} className="classGrid"> */}
          {/* <Card > */}
          {/* <Grid item xs={12} md={4}> */}
          <Tab
            style={{
              backgroundColor: value === 0 ? "#fff" : "transparent",
              fontWeight: "bold",
              borderRadius: 5,
              flex: 1,
              display: "flex",
              margin: 0,
            }}
            label="CLASSES 1-4"
            {...a11yProps(0)}
          />
          {/* </Grid> */}
          {/* <Grid item xs={12} md={4}> */}
          <Tab
            style={{
              backgroundColor: value === 1 ? "#fff" : "transparent",
              fontWeight: "bold",
              borderRadius: 5,
              flex: 1,
              display: "flex",
              margin: 0,
            }}
            label="CLASSES 5-8"
            {...a11yProps(1)}
          />
          {/* </Grid> */}
          {/* <Grid item xs={12} md={4}> */}
          <Tab
            style={{
              backgroundColor: value === 2 ? "#fff" : "transparent",
              fontWeight: "bold",
              borderRadius: 5,
              flex: 1,
              display: "flex",
              margin: 0,
            }}
            label="CLASSES 9-12"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FifthContent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FifthContent2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FifthContent3 />
      </TabPanel>
    </Box>
  );
}
