import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import ruLocale from "date-fns/locale/ru";
import DateFnsUtils from "@date-io/date-fns";
import {
	DateTimePicker as Picker,
	MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { TEXT } from "constants/text";
import { COLORS } from "constants/colors";

type DateTimePickerProps = {
	option: MaterialUiPickersDate;
	fn: (option: MaterialUiPickersDate) => void;
};

export const DateTimePicker = ({ option, fn }: DateTimePickerProps) => {
	const pickerHandler = (value: MaterialUiPickersDate) => fn(value);

	const clearHandler = () => fn(null);

	return (
		<Container>
			<ThemeProvider theme={defaultMaterialTheme}>
				<MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
					<Picker
						value={option}
						onChange={pickerHandler}
						placeholder={TEXT.choseDateTime}
						ampm={false}
						format={"d.MM.yyyy p"}
					/>
				</MuiPickersUtilsProvider>
			</ThemeProvider>
			<CloseIconContainer>
				{option && <CloseIcon onClick={clearHandler} />}
			</CloseIconContainer>
		</Container>
	);
};

const defaultMaterialTheme = createMuiTheme({
	overrides: {
		MuiInput: {
			root: {
				padding: 0,
			},
			input: {
				width: "224px",
				padding: "3px",
				paddingLeft: "8px",
				fontSize: "14px",
			},
		},
	},
	palette: {
		primary: {
			main: COLORS.green,
		},
		secondary: {
			main: COLORS.black,
		},
	},
});

const Container = styled.div`
	display: flex;
`;

const CloseIconContainer = styled.div`
	position: relative;
	z-index: 1000;
`;

const CloseIcon = styled(CloseOutline)`
	width: 16px;
	height: 16px;
	color: black;
	position: absolute;
	left: -20px;
	top: 4px;
`;
