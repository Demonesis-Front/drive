import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "store/order/reducer";
import { CityType, PickUpType } from "store/order/types";
import { getOrder } from "store/order/selectors";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { CityAndPickUpContainer, CityContainer } from "components/containers";
import { CityAndPickUpTitle } from "components/typography";
import { TEXT } from "constants/text";
import { COLORS } from "constants/colors";

export const CityAndPickUp = () => {
	const dispatch = useDispatch();
	const order = useSelector(getOrder);

	const handleCityChose = (
		event: React.ChangeEvent<{}>,
		value: CityType | null
	) => {
		console.log(value);

		if (!value) {
			dispatch(orderActions.setCar(null));
			dispatch(orderActions.setPickUp(null));
			dispatch(orderActions.setCity(null));
		}

		if (value) {
			dispatch(orderActions.setCar(null));
			dispatch(orderActions.setPickUp(null));
			dispatch(orderActions.setCity(value));
		}
	};
	const handlePickUpChose = (
		event: React.ChangeEvent<{}>,
		value: PickUpType | null
	) => {
		if (!value) {
			dispatch(orderActions.setCar(null));
			dispatch(orderActions.setPickUp(value));
		}

		if (value) {
			dispatch(orderActions.setCar(null));
			dispatch(orderActions.setPickUp(value));
		}
	};

	return (
		<CityAndPickUpContainer>
			<CityContainer>
				<CityAndPickUpTitle>{TEXT.city}</CityAndPickUpTitle>
				<StyledAutocomplete
					id="combo-box-demo"
					options={city}
					getOptionLabel={(option) => option.title}
					forcePopupIcon={false}
					value={order.city}
					onChange={handleCityChose}
					renderInput={(params) => (
						<TextField {...params} placeholder={TEXT.choseCity} variant="standard" />
					)}
				/>
			</CityContainer>
			{/* PickUp */}
			<CityContainer>
				<CityAndPickUpTitle>{TEXT.pickup}</CityAndPickUpTitle>
				<StyledAutocomplete
					id="combo-box-demo"
					options={order.city?.pickups || []}
					getOptionLabel={(option: PickUpType) => option.title}
					forcePopupIcon={false}
					value={order.pickup}
					onChange={handlePickUpChose}
					renderInput={(params) => (
						<TextField {...params} placeholder={TEXT.chosePickUp} variant="standard" />
					)}
				/>
			</CityContainer>
		</CityAndPickUpContainer>
	);
};

// const useStyles = makeStyles({
//   button
// })

const StyledAutocomplete: typeof Autocomplete = styled(Autocomplete)`
	min-width: 224px;
	padding-left: 0px;

	.MuiAutocomplete-root {
		padding: 0px;
	}

	.MuiFormControl-root {
		padding: 0px;
	}
	.MuiInputBase-root {
		padding: 0px;
	}

	.MuiAutocomplete-clearIndicator {
		padding: 3px 3px;
		margin-top: 3px;
		margin-right: 3px;

		visibility: ${({ value }) => (value ? "visible" : "hidden")};
	}

	.MuiSvgIcon-fontSizeSmall {
		font-size: 0.8rem;
	}

	.MuiAutocomplete-input:first-child {
		padding: 0px;
	}

	.MuiAutocomplete-inputRoot[class*="MuiInput-root"]
		.MuiAutocomplete-input:first-child {
		padding: 3px 0;
		padding-left: 8px;
		color: ${COLORS.black};
	}

	.MuiAutocomplete-input:first-child {
		padding: 0px;
	}

	.MuiAutocomplete-inputFocused {
		button {
			visibility: visible;
		}
	}

	div {
		font-size: 14px;
		font-weight: 300;
		padding-left: 8px;
		padding-top: 3px;
		padding-bottom: 3px;
	}

	.MuiInput-underline:before {
		border-bottom: 1px solid ${COLORS.grey};
	}
	&& .MuiInput-underline:hover:before {
		border-bottom: 1px solid ${COLORS.grey};
	}
	.MuiInput-underline:focus:before {
		border-bottom: none;
	}

	.MuiInput-underline:after {
		border-bottom: 2px solid ${COLORS.green};
	}
`;

const city: CityType[] = [
	{
		title: "Ульяновск",
		id: "1",
		coordinates: [54.330056, 48.389127],
		pickups: [
			{
				title: "проспект Нариманова, 1 ст2",
				id: "11",
				coordinates: [54.333551, 48.384378],
			},
			{
				title: "​улица Островского, 20",
				id: "12",
				coordinates: [54.326695, 48.394832],
			},
		],
	},
	{
		title: "Самара",
		id: "2",
		coordinates: [53.210548, 50.133757],
		pickups: [
			{
				title: "Лесная улица, 33",
				id: "13",
				coordinates: [53.215478, 50.134096],
			},
			{
				title: "проспект Ленина, 1",
				id: "14",
				coordinates: [53.205167, 50.133539],
			},
		],
	},
	{
		title: "Москва",
		id: "3",
		coordinates: [55.755814, 37.617635],
		pickups: [
			{
				title: "Тверская улица, 6с6",
				id: "15",
				coordinates: [55.760597, 37.611719],
			},
			{
				title: "​Малый Черкасский переулок, 2",
				id: "16",
				coordinates: [55.758339, 37.626018],
			},
		],
	},
	{
		title: "Санкт-Петербург",
		id: "4",
		coordinates: [59.939095, 30.315868],
		pickups: [
			{
				title: "Большая Конюшенная улица, 1",
				id: "17",
				coordinates: [59.940738, 30.323762],
			},
			{
				title: "Малая Морская улица, 6",
				id: "18",
				coordinates: [59.935567, 30.314901],
			},
		],
	},
];
