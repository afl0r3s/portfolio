import * as React from 'react';
import style from '../Styles.module.css';
import {Button, 
        Card, 
        CardActions,
        CardContent,
        CardMedia,
        Typography}  from '@material-ui/core';

export default function ImgMediaCard() {
  return (
    <>
    <div className={style.cardContainer}>
        <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="e-comerce"
                height="140"
                image="https://res.cloudinary.com/afl0r3s/image/upload/v1633493714/test/screenshot.12_oycadq.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                E-Comerce
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    E-comerce, final project in Henry's bootcamp using the learned stack and other extras<br/><br/>
                    #NodeJS, #React, #Redux, #Express, #Mongoose, #MongoDB, #CSS, #MercadoPago, #MaterialUI, #Firebase, #NodeMail, #GoogleMaps, #Totp, #Cloudinary... 
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small"
                    href='https://afl0r3s.github.io/Proyecto-Grupal-Henry-client/#/'
                    target='_blank'>
                View</Button>
                <Button 
                    size="small"
                    href='https://github.com/afl0r3s/Proyecto-Grupal-Henry-client'
                    target='_blank'>
                Code</Button>
            </CardActions>
            </Card>
        </div>
        <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="project individual"
                height="140"
                image="https://res.cloudinary.com/afl0r3s/image/upload/v1633494416/test/screenshot.13_anyb64.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Project Indivual
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Individual project at Henry Bootcamp, to demonstrate everything learned before the final project<br/><br/>
                    #JavaScript, #NodeJS, #React, #Redux, #Express, #Sequelize, #Postgers, #CSS
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small"
                    href='https://afl0r3s.github.io/DogMania/'
                    target='_blank'>
                View</Button>
                <Button 
                    size="small"
                    href='https://github.com/afl0r3s/DogMania'
                    target='_blank'>
                Code</Button>
            </CardActions>
            </Card>
        </div>

        <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="weather app"
                height="140"
                image="https://res.cloudinary.com/afl0r3s/image/upload/v1633493741/test/screenshot.11_pnbm5s.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Weather APP
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Weather app, one of the first web applications developed in Henry's bootcamp, refactor the code and use my own API Key<br/><br/>
                    #JavaScript, #NodeJS, #React, #Redux, #CSS
                </Typography>
            </CardContent>
            <CardActions>
            <CardActions>
                <Button 
                    size="small"
                    href='https://afl0r3s.github.io/WeatherApp/'
                    target='_blank'>
                View</Button>
                <Button 
                    size="small"
                    href='https://github.com/afl0r3s/WeatherApp'
                    target='_blank'>
                Code</Button>
            </CardActions>
            </CardActions>
            </Card>
        </div>
        <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="portfolio"
                height="140"
                image="https://res.cloudinary.com/afl0r3s/image/upload/v1633493775/test/screenshot.14_mjzqpi.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Portfolio
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    My personal Portfolio<br/><br/>
                    #JavaScript, #React, #Redux, #CSS, #MaterialUI
                </Typography>
            </CardContent>
            <CardActions>
            <CardActions>
                <Button 
                    size="small"
                    href='https://afl0r3s.github.io/portfolio/#/'
                    target='_blank'>
                View</Button>
                <Button 
                    size="small"
                    href='https://github.com/afl0r3s/portfolio'
                    target='_blank'>
                Code</Button>
            </CardActions>
            </CardActions>
            </Card>
        </div>

        <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="crud mongo"
                height="140"
                image="https://res.cloudinary.com/afl0r3s/image/upload/v1633494112/test/screenshot.15_nip7oy.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    CRUD Mongo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    A project to practice connect to Mongo DB, i create a TODO App with de CRUD functionaly (Create, Read, Update & Delete)<br/><br/>
                    #JavaScript, #React, #Redux, #CSS, #Mongoose, #MongoDB
                </Typography>
            </CardContent>
            <CardActions>
            <CardActions>
                <Button 
                    size="small"
                    href='https://github.com/afl0r3s/CRUD-1-Mongo'
                    target='_blank'>
                Code</Button>
            </CardActions>
            </CardActions>
            </Card>
        </div>
        <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="delivery app"
                height="140"
                image="https://res.cloudinary.com/afl0r3s/image/upload/v1633494296/test/screenshot.16_fddf7t.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Delivery APP
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    A project to create a "Delivery APP" consuming data from and API and using Responsive Design for a better display en Tables and Smart Phones<br/><br/>
                    #JavaScript, #React, #Redux, #CSS
                </Typography>
            </CardContent>
            <CardActions>
            <CardActions>
                <Button 
                    size="small"
                    href='https://github.com/afl0r3s/DeliveryApp'
                    target='_blank'>
                Code</Button>
            </CardActions>
            </CardActions>
            </Card>
        </div>

        <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="pong game"
                height="140"
                image="https://res.cloudinary.com/afl0r3s/image/upload/v1633496566/test/screenshot.17_fzpwbe.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Pong Game 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    A project to practice creation a clasic Pong Game using JavaScript libraries<br/><br/>
                    #JavaScript, #HTML, #CSS, #PhaserJS
                </Typography>
            </CardContent>
            <CardActions>
 
            </CardActions>
            </Card>
        </div>

    </div>

    </>
  );
}
