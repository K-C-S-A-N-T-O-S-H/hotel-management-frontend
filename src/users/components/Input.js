import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Icons from "./Icons";

function InputFields({
	focused,
	required,
	color,
	value,
	defaultValue,
	name,
	onChange,
	disabled,
	label,
	variant,
	autoFocus,
	type,
	error,
	hidden,
	autoSave,
	autoCorrect,
	hiddenLabel,
	margin,
	maxRows,
	minRows,
	multiline,
	placeholder,
	readOnly,
	sx,
	fullWidth,
	helperText,
	size,
	icon,
}) {
	const [visible, setVisible] = useState(false);
	return (
		<TextField
			InputProps={
				icon.visible || icon.secondIcon
					? {
							[icon.position === "start" ? "startAdornment" : "endAdornment"]: (
								<>
									{icon.visible && (
										<InputAdornment
											position={icon?.position}
											sx={{ p: variant === "standard" ? 1 : 0 }}
										>
											{icon.clickable ? (
												<IconButton
													onClick={() => setVisible(!visible)}
													edge={icon?.position}
												>
													{visible ? (
														<Icons icon={icon.name} />
													) : (
														<Icons icon={icon.name1} />
													)}
												</IconButton>
											) : (
												<Icons icon={icon.secondaryName} />
											)}
										</InputAdornment>
									)}
								</>
							),
							[icon.position === "start" ? "endAdornment" : "startAdornment"]: (
								<>
									{icon.secondIcon && (
										<InputAdornment
											position={icon?.position === "end" ? "start" : "end"}
											sx={{ p: variant === "standard" ? 1 : 0 }}
										>
											{icon.secondIconClickable ? (
												<IconButton
													onClick={() => setVisible(!visible)}
													edge={
														icon?.position === "end" ? "start" : "end"
													}
												>
													{visible ? (
														<Icons icon="VisibilityOff" />
													) : (
														<Icons icon="Visibility" />
													)}
												</IconButton>
											) : (
												<Icons icon={icon.secondaryName} />
											)}
										</InputAdornment>
									)}
								</>
							),
					  }
					: {}
			}
			autoCorrect={autoCorrect}
			autoSave={autoSave}
			hidden={hidden}
			error={error}
			type={icon?.visible && icon?.clickable ? (visible ? "text" : "password") : type}
			label={label}
			variant={variant}
			color={color}
			focused={focused}
			required={required}
			value={value}
			defaultValue={defaultValue}
			name={name}
			onChange={onChange}
			disabled={disabled}
			autoFocus={autoFocus}
			fullWidth={fullWidth}
			hiddenLabel={hiddenLabel}
			margin={margin}
			maxRows={maxRows}
			minRows={minRows}
			multiline={multiline}
			placeholder={placeholder}
			readOnly={readOnly}
			sx={sx}
			helperText={helperText}
			size={size}
		/>
	);
}
InputFields.defaultProps = {
	variant: "outlined",
	disabled: false,
	type: "text",
	autoFocus: false,
	color: "primary",
	defaultValue: "",
	required: true,
	label: "",
	error: false,
	fullWidth: true,
	hiddenLabel: false,
	margin: "dense",
	maxRows: 1,
	minRows: 1,
	multiline: false,
	placeholder: "",
	readOnly: "",
	sx: { m: 1 },
	helperText: " ",
	size: "small",
	icon: {},
};
export default InputFields;
