import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import InputFields from "../../components/Input";
import { getTemplateData } from "../../apis";
function Login() {
	const [data, setData] = useState([]);
	const [userData, setUserData] = useState();
	const getDatas = async () => {
		const datas = await getTemplateData();
		console.log(datas);
		setData(datas);
	};
	useEffect(() => {
		getDatas();
	}, []);
	return (
		<div align="center" style={{ padding: "40px" }}>
			<form style={{ maxWidth: "400px auto" }}>
				{data.length ? (
					data.map((e, i) => (
						<div key={i}>
							{!e.hidden && (
								<InputFields
									{...e}
									onChange={(e) => {
										setUserData({
											...userData,
											[e.target.name]: e.target.value,
										});
									}}
								/>
							)}
							<br />
							<br />
						</div>
					))
				) : (
					<Typography style={{ color: "white" }}>Loading...</Typography>
				)}
				{data.length && (
					<Button type="submit" variant="contained" color="secondary">
						Button
					</Button>
				)}
			</form>
			<br />
			<br />
		</div>
	);
}

export default Login;
