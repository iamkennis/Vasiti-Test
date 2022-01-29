import { Box, Typography, Grid, makeStyles,Button, Link } from '@material-ui/core';
import sectionImage from '../assets/sectionImage.png'



const useStyles = makeStyles({
	bttn: {
		fontSize: 13,
		color: 'white',
		borderColor: 'grey',
		marginTop: 20,
		marginBottom: 20
		
	},
	textH5: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'white',
	},
	section: {
		position: 'relative',
		bottom: 460,
	},
	sectionImg: {
		height: 450,
		marginLeft: 50
	},
	textP: {
		fontSize: 16,
		color: 'grey',
	},
});
export default function Section() {
	const classes = useStyles();

	return (
		<div>
			<Box
				sx={{
					width: 1370,
					height: 500,
					backgroundColor: '#222222',
				}}
			/>
			<Grid container spacing={2} className={classes.section}>
				<Grid item xs>
					<img className={classes.sectionImg} src={sectionImage} />
				</Grid>

				<Grid item xs>
					<Typography className={classes.textH5} variant='h5' component='h2'>
						Tolu & Joy’s Experience
					</Typography>
					<Button className={classes.bttn} variant='outlined'>
						CUSTOMERS
					</Button>
					<Grid item xs={6}>
						<Typography variant='p' className={classes.textP}>
							I had the best experience shopping with vasiti. <br />
							Usability of the website was great, very good <br />
							customer service, an all round great experience. I would
							definately be coming back!
							<br /> I had the best experience shopping with vasiti. Usability
							of the website was great, very good customer service, an all round
							great experience. I would definately be coming back!
						</Typography>
					</Grid>
					<Grid>
						<Link>SHARE YOUR OWN STORIES</Link>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}