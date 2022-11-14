import React from "react";
import * as Muicon from "@material-ui/icons";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

const Icon = ({ name, ...rest }) => {
  const IconComponent = Muicon[name];
	return IconComponent ? <IconComponent {...rest} /> : name=="CleaningServices" ? <CleaningServicesIcon {...rest} /> :  null;
  
};

export default Icon;
