import {
    createStyles,
    Image,
    Container,
    Title,
    Text,
    Button,
    SimpleGrid,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import image from '../public/4.svg';
  import blackImage from '../public/4-removebg-preview.svg'


  
  const useStyles = createStyles((theme) => ({
    root: {
      paddingTop: rem(80),
      paddingBottom: rem(80),
    },
  
    title: {
      fontWeight: 900,
      fontSize: rem(34),
      marginBottom: theme.spacing.md,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(32),
      },
    },
  
    control: {
      [theme.fn.smallerThan('sm')]: {
        width: '100%',
      },
    },
  
    mobileImage: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    desktopImage: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  }));
  
  export default function NotFoundImage() {
    const { classes } = useStyles();
  

    const theme = useMantineTheme();

    // Determine which images to use based on the color scheme
    const image1 = theme.colorScheme === 'dark' ? blackImage : image;
  
    return (
      <Container className={classes.root}>
        <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
          <Image src={image1.src} className={classes.mobileImage} />
          <div>
            <Title className={classes.title}>Something is not right...</Title>
            <Text color="dimmed" size="lg">
              Page you are trying to open does not exist. You may have mistyped the address, or the
              page has been moved to another URL. If you think this is an error contact support.
            </Text>
            <Button variant="outline" size="md" mt="xl" className={classes.control}>
              Get back to home page
            </Button>
          </div>
          <Image src={image1.src} className={classes.desktopImage} />
        </SimpleGrid>
      </Container>
    );
  }