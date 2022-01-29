import { Container, Typography, makeStyles, Grid} from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';
import heroImage from '../assets/heroImage.png'


const useStyles = makeStyles({
    text: {
        fontSize: 50,
        fontWeight: "bold",
        marginTop: 70
    },
    heroImg: {
        height: 450,
        marginTop: 50 ,
		marginRight: 80,
		zIndex: -1
    }
})

export default function Hero() {
    const classes = useStyles();

    return (
			<Container size='sm'>
				<Grid container spacing={6}>
					<Grid item xs>
						<Typography className={classes.text} variant='h4' component='h2'>
							Amazing
							<br />
							Experiences from Our <br />
							Wonderful Customers
						</Typography>
						<Typography variant='p'>
							Here is what customers and vendors are saying about us,
							<br /> you can share your stories with us too.
						</Typography>
					</Grid>
					<img className={classes.heroImg} src={heroImage} />
				</Grid>
			</Container>
		);
}