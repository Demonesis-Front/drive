import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderActions, CarType } from "store/order/reducer";
import { getOrder } from "store/order/selectors";
import {
	CarTypeContainer,
	CarTitleContainer,
	StageContainer,
	CarCardContainer,
	CarCard,
	CarImage,
} from "components/containers";
import { CarTitle, CarSubTitle, CarTypeTitle } from "components/typography";
import { CarTypeIcon } from "components/icons";
import { cars } from "constants/cars";

export const ModelStage = () => {
	const dispatch = useDispatch();
	const order = useSelector(getOrder);
	const [activeType, setActiveType] = useState<string | null>(null);

	const typeHandler = (type: string | null) => {
		dispatch(orderActions.setCar(null));
		if (type) {
			return setActiveType(type);
		}

		setActiveType(null);
	};

	const carHandler = (car: CarType) => {
		dispatch(orderActions.setCar(car));
	};

	const carFilter = (car: CarType) => {
		if (!activeType) {
			return car;
		}

		if (activeType && car.type === activeType) {
			return car;
		}
	};

	return (
		<>
			<StageContainer>
				{/* Car type filter */}
				<CarTypeContainer>
					{typeMenu.map((el) => (
						<CarTitleContainer key={el.id} onClick={() => typeHandler(el.type)}>
							<CarTypeIcon active={activeType === el.type ? true : false} />
							<CarTypeTitle active={activeType === el.type ? true : false}>
								{el.title}
							</CarTypeTitle>
						</CarTitleContainer>
					))}
				</CarTypeContainer>
				{/* Car grid */}
				<CarCardContainer>
					{cars.filter(carFilter).map((car) => (
						<CarCard
							key={car.id}
							active={car.id === order.car?.id ? true : false}
							onClick={() => carHandler(car)}
						>
							<CarTitle>
								{car.title}
								<CarSubTitle>{car.price.from + " - " + car.price.to} </CarSubTitle>
							</CarTitle>
							<CarImage img={car.img} />
						</CarCard>
					))}
				</CarCardContainer>
			</StageContainer>
		</>
	);
};

const typeMenu = [
	{ id: "21", title: "Все модели", type: null },
	{ id: "22", title: "Эконом", type: "economy" },
	{ id: "23", title: "Премиум", type: "premium" },
];
