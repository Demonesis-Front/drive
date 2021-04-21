import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "store/order/reducer";
import { getOrder } from "store/order/selectors";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { CityAndPickUpContainer, CityContainer } from "components/containers";
import { CityAndPickUpTitle } from "components/typography";
import { TEXT } from "constants/text";
import { COLORS } from "constants/colors";

export const CityAndPickUp = () => {
	const dispatch = useDispatch();
	const order = useSelector(getOrder);
	const label = labelStyle();

	const handleCityChose = (_: any, value: any) => {
		if (value) {
			dispatch(orderActions.setCity(value));
		}
	};
	const handlePickUpChose = (_: any, value: any) => {
		dispatch(orderActions.setPickUp(value));
	};

	return (
		<CityAndPickUpContainer>
			<CityContainer>
				<CityAndPickUpTitle>{TEXT.city}</CityAndPickUpTitle>
				<Autocomplete
					id="combo-box-demo"
					options={city}
					getOptionLabel={(option) => option.title}
					style={{ width: 250 }}
					clearOnEscape={true}
					onChange={handleCityChose}
					renderInput={(params) => (
						<Input
							{...params}
							placeholder={order.city.title}
							variant="standard"
							InputLabelProps={{ classes: label }}
						/>
					)}
				/>
			</CityContainer>
			<CityContainer>
				<CityAndPickUpTitle>{TEXT.pickup}</CityAndPickUpTitle>
				<Autocomplete
					id="combo-box-demo"
					options={order.city.pickups}
					getOptionLabel={(option) => option.title}
					style={{ width: 250 }}
					clearOnEscape={true}
					onChange={handlePickUpChose}
					renderInput={(params) => (
						<Input
							{...params}
							hiddenLabel={true}
							placeholder={order.pickup?.title || TEXT.chosePickUp}
							variant="standard"
							InputLabelProps={{ classes: label }}
						/>
					)}
				/>
			</CityContainer>
		</CityAndPickUpContainer>
	);
};

const labelStyle = makeStyles((theme) => ({
	root: {
		"&$focused": {
			color: COLORS.green,
		},
	},
	focused: {},
}));

const Input = styled(TextField)`
	.MuiInput-underline:after {
		border-bottom: 2px solid ${COLORS.green};
	}
`;

const city = [
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
