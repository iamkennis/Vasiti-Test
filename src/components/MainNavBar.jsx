import {Container, Divider, makeStyles} from '@material-ui/core'
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
	title: {
		fontSize: 12,
	    fontWeight: 'bold',
		textDecoration: 'none',
		padding: 15
	},
	nav: {
		display: 'flex',
		flexDirection: "row",
		alignContent: "center",
		justifyContent: "center",
		marginTop: 20,
		marginRight: 45
	}
});

export default function Navbar() {
    const classes = useStyles()

    return (
			<Container className={classes.nav}>
					<nav>
						<img src='' />
						<Link
							className={classes.title}
							href='#'
							color='black'
							underline='none'>
							MARKETPLACE
						</Link>
						<Link
							className={classes.title}
							href='#'
							color='black'
							underline='none'>
							WHOLESALES CENTER
						</Link>
						<Link
							className={classes.title}
							href='#'
							color='black'
							underline='none'>
							SELLER CENTER
						</Link>
						<Link
							className={classes.title}
							href='#'
							color='black'
							underline='none'>
							SERVICES
						</Link>
						<Link
							className={classes.title}
							href='#'
							color='black'
							underline='none'>
							INTERNSHIPS
						</Link>
						<Link
							className={classes.title}
							href='#'
							color='black'
							underline='none'>
							INTERNSHIPS
						</Link>
					</nav>
			</Container>
		);
}