import VasitiLogo from '../assets/VasitiLogo.png'
import {makeStyles,Grid} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
	btn: {
		fontSize: 13,
		backgroundColor: '#FF5C00',
		'&:hover': {
			background: '#FF5b00',
		},
	},
	title: {
		fontSize: 12,
	    fontWeight: 'bold',
		textDecoration: 'none',
		padding: 15
	},
	nav: {
		display: 'flex',
		flexDirection: "row",
		justifyContent: "end",
		marginTop: 20,
		marginRight: 45
	}
});

export default function Navbar() {
	const classes = useStyles()

	return (
		<Grid container spacing={2} className={classes.nav}>
			<Grid item xs={6}>
				<img src={VasitiLogo} />
			</Grid>
			<Grid item xs={4}>
				<Link className={classes.title} href='#' color='black' underline='none'>
					ABOUT US
				</Link>
				<Link className={classes.title} href='#' color='black' underline='none'>
					STORIES
				</Link>
				<Link className={classes.title} href='#' color='black' underline='none'>
					CONTACT
				</Link>
				<Link className={classes.title} href='#' color='black' underline='none'>
					LOGIN
				</Link>
				<Button
					className={classes.btn}
					type='submit'
					color='secondary'
					variant='contained'>
					SIGN UP
				</Button>
			</Grid>
		</Grid>
	);
}