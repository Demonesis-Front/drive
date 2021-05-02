import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "store/order/reducer";
import { CityDBType, PointDBType } from "store/order/types";
import { getOrder } from "store/order/selectors";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
	CityAndPickUpContainer,
	CityContainer,
	CityAndPickUpTitle,
} from "./styled";
import { TEXT } from "constants/text";
import { COLORS } from "constants/colors";

export const CityAndPickUp = () => {
	const dispatch = useDispatch();
	const order = useSelector(getOrder);

	const handleCityChose = (
		event: React.ChangeEvent<{}>,
		value: CityDBType | null
	) => {
		dispatch(orderActions.setCity(value));
	};
	const handlePickUpChose = (
		event: React.ChangeEvent<{}>,
		value: PointDBType | null
	) => {
		if (!value) {
			dispatch(orderActions.setCar(null));
			dispatch(orderActions.setPoint(null));
		}

		if (value) {
			dispatch(orderActions.setCar(null));
			dispatch(orderActions.setPoint(value));
		}
	};

	return (
		<CityAndPickUpContainer>
			<CityContainer>
				<CityAndPickUpTitle>{TEXT.city}</CityAndPickUpTitle>
				<CityAndPickUpAutocomplete
					id="combo-box-demo"
					options={order.cities || []}
					getOptionLabel={(option) => option.name || ""}
					forcePopupIcon={false}
					value={order.city.name ? order.city : null}
					onChange={handleCityChose}
					renderInput={(params) => (
						<TextField {...params} placeholder={TEXT.choseCity} variant="standard" />
					)}
				/>
			</CityContainer>
			{/* PickUp */}
			<CityContainer>
				<CityAndPickUpTitle>{TEXT.pickup}</CityAndPickUpTitle>
				<CityAndPickUpAutocomplete
					id="combo-box-demo"
					options={
						order.points?.filter(
							(point) => point.cityId && order.city && point.cityId.name === order.city?.name
						) || []
					}
					getOptionLabel={(option: PointDBType) => option.address}
					forcePopupIcon={false}
					value={order.point}
					onChange={handlePickUpChose}
					renderInput={(params) => (
						<TextField {...params} placeholder={TEXT.chosePickUp} variant="standard" />
					)}
				/>
			</CityContainer>
		</CityAndPickUpContainer>
	);
};

const CityAndPickUpAutocomplete: typeof Autocomplete = styled(Autocomplete)`
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
