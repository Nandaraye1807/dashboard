export const userColumns = [
	{ field: "id", headerName: "ID", width: 70 }, 
	{
		field: "user",
		headerName: "User", 
		width: 230, 
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img className="cellImg" src={params.row.img} alt="avatar" />
					{params.row.username}
				</div>
			);
		},
	},
	{
		field: "email", 
		headerName: "Email",
		width: 230,
	},
	{
		field: "age",
		headerName: "Age",
		width: 100,
	},
	{
		field: "status",
		headerName: "Status",
		width: 160,
		renderCell:(params)=>{
			return (
				<div className={`cellWithStatus ${params.row.status}`}>
					{params.row.status}
				</div>
			);
		},
	},
	
];

export const userRows = [
	{
		id: 1,
		username: "Snow",
		img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg",
		status: "active",
		email: "1snow@gmail.com",
		age: 35,
	},
	{
		id: 2,
		username: "Lannister",
		img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg",
		status: "passive",
		email: "1snow@gmail.com",
		age: 42,
	},
	{
		id: 3,
		username: "Lannister",
		img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg",
		status: "pending",
		email: "1snow@gmail.com",
		age: 45,
	},
	{
		id: 4,
		username: "Stark",
		img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg",
		status: "active",
		email: "1snow@gmail.com",
		age: 16,
	},
	{
		id: 5,
		username: "Targaryen",
		img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg",
		status: "active",
		email: "1snow@gmail.com",
		age: null,
	},
	{
		id: 6,
		username: "Melisandre",
		img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg",
		status: "active",
		email: "1snow@gmail.com",
		age: 150,
	},
	{
		id: 7,
		username: "Clifford",
		img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg",
		status: "active",
		email: "1snow@gmail.com",
		age: 44,
	},
	{
		id: 8,
		username: "Frances",
		img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg",
		status: "active",
		email: "1snow@gmail.com",
		age: 36,
	},
	{
		id: 9,
		username: "Roxie",
		img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg",
		status: "active",
		email: "1snow@gmail.com",
		age: 65,
	},
	{
		id: 10,
		username: "Roxie",
		img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg",
		status: "active",
		email: "1snow@gmail.com",
		age: 65,
	},
];