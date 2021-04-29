import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "store/order/reducer";
import { getOrder } from "store/order/selectors";
import { StageContainer } from "./../styled";
import {
	CarTypeContainer,
	CarTitleContainer,
	CarCardContainer,
	CarCard,
	CarImage,
	CarTitle,
	CarSubTitle,
	CarTypeTitle,
} from "./styled";
import { MobileCarType } from "./MobileCarType";
import { CarTypeIcon } from "common/icons";
import { url } from "services/main/api";
import { CarDBType } from "store/order/types";
import { TEXT } from "constants/text";

export const ModelStage = () => {
	const dispatch = useDispatch();
	const order = useSelector(getOrder);
	const [activeType, setActiveType] = useState<string | null>(null);

	useEffect(() => {
		if (!order.cars) {
			dispatch(orderActions.initCar());
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const typeHandler = (type: string | null) => {
		dispatch(orderActions.setCar(null));
		if (type) {
			return setActiveType(type);
		}

		setActiveType(null);
	};

	const carHandler = (car: CarDBType) => {
		dispatch(orderActions.setCar(car));
	};

	const carFilter = (car: CarDBType) => {
		if (!activeType) {
			return car;
		}

		if (activeType && car.categoryId.id === activeType) {
			return car;
		}
	};

	return (
		<>
			<StageContainer>
				{/* Car type filter */}
				{order.categories && (
					<CarTypeContainer>
						<CarTitleContainer onClick={() => typeHandler(null)}>
							<CarTypeIcon active={activeType === null ? true : false} />
							<CarTypeTitle active={activeType === null ? true : false}>
								{TEXT.allModels}
							</CarTypeTitle>
						</CarTitleContainer>
						{order.categories?.map((category) => (
							<CarTitleContainer key={category.id} onClick={() => typeHandler(category.id)}>
								<CarTypeIcon active={activeType === category.id ? true : false} />
								<CarTypeTitle active={activeType === category.id ? true : false}>
									{category.name}
								</CarTypeTitle>
							</CarTitleContainer>
						))}
					</CarTypeContainer>
				)}

				{/* Mobile Car type */}
				<MobileCarType options={order.categories} value={activeType} fn={typeHandler} />

				{/* Car grid */}
				<CarCardContainer>
					{order.cars?.filter(carFilter).map((car) => (
						<CarCard
							key={car.id}
							active={car.id === order.car?.id ? true : false}
							onClick={() => carHandler(car)}
						>
							<CarTitle>
								{car.name}
								<CarSubTitle>{car.priceMin + " - " + car.priceMax} </CarSubTitle>
							</CarTitle>
							<CarImage img={url + car.thumbnail.path} />
						</CarCard>
					))}
				</CarCardContainer>
			</StageContainer>
		</>
	);
};
