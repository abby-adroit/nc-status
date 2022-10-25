import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface ConfirmMaintenanceProps {
    onOpenConfirm: Dispatch<SetStateAction<boolean>>,
    openConfirm: boolean,
    onMaintenanceMode: Dispatch<SetStateAction<boolean>>,
	maintenanceMode: boolean
}

export default function ConfirmMaintenance({ onOpenConfirm, openConfirm, onMaintenanceMode, maintenanceMode}: ConfirmMaintenanceProps) {
	const [passcode, setPasscode] = useState<string>('');
	const [showError, setShowError] = useState<boolean>(false);

	const handleCancel = () => { 
		console.log("Cancel: Confirm Maintenance")
		onOpenConfirm(false);
		setPasscode('');
	}

	const handleOkay = () => { 
		console.log("Okay: Confirm Maintenance")
		if(passcode == process.env.maintenance_code){
			setShowError(false);
			onMaintenanceMode(!maintenanceMode);
			onOpenConfirm(false);
			setPasscode('');
		}else{
			setShowError(true);
			setPasscode('');
		}
	}

  	return (
		<Dialog
			open={openConfirm}
			onClose={handleCancel}
		>
			<DialogTitle>
				Confirm Maintenance Mode
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					{showError && "*Error: Check passcode."}
				</DialogContentText>
				<TextField
					autoFocus
					variant="outlined"
					margin="normal"
					type="password"
					autoComplete="current-passcode"
					required
					fullWidth
					id="passcode"
					label="Confirmation Code"
					name="passcode"
					value={passcode}
					onChange={ (e) => setPasscode(e.target.value)}
				>
				</TextField>
			</DialogContent>
			<DialogActions>
				<Button 
					onClick={handleCancel}
					color="default"
				>
					Cancel
				</Button>
				<Button 
					onClick={handleOkay}
					color="primary"
				>
					Confirm
				</Button>
			</DialogActions>
		</Dialog>
  )
}
