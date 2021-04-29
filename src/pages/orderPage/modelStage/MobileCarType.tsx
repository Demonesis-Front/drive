import React from "react";
import { MenuItem, Select, FormControl, makeStyles } from "@material-ui/core";
import { CategoriesDBType } from "store/order/types";
import { TEXT } from "constants/text";
import { MobileCarTypeContainer } from "./styled";
import { COLORS } from "constants/colors";

type MobileCarTypeProps = {
	options: CategoriesDBType[] | null;
	value: string | null;
	fn: (id: string | null) => void;
};

export const MobileCarType = ({ options, value, fn }: MobileCarTypeProps) => {
	const classes = useStyles();

	const handler = (event: React.ChangeEvent<{ value: any }>) => {
		console.log(event.target.value);

		fn(event.target.value);
	};

	return (
		<MobileCarTypeContainer>
			<FormControl>
				<Select
					classes={{
						select: classes.select,
					}}
					value={value ? value : 0}
					disableUnderline={true}
					onChange={handler}
				>
					<MenuItem value={0}>{TEXT.allModels}</MenuItem>
					{options?.map((option) => (
						<MenuItem key={option.id + option.name} value={option.id}>
							{option.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</MobileCarTypeContainer>
	);
};

const useStyles = makeStyles({
	select: {
		background: COLORS.white,
		fontSize: "14px",
		"&:focus": {
			background: COLORS.white,
		},
		"&$selected": {},
	},
});
